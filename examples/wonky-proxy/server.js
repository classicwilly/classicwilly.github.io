// Minimal Express proxy example for Wonky AI
// Security: keep API keys in environment variables; redact prompts before forwarding.

const express = require('express');
const fetch = require('node-fetch');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(helmet());
app.use(bodyParser.json({ limit: '16kb' }));

// Basic rate limiter
const limiter = rateLimit({ windowMs: 60 * 1000, max: 60 });
app.use(limiter);

const MODEL_ENDPOINT = process.env.MODEL_ENDPOINT; // e.g. remote endpoint
const MODEL_API_KEY = process.env.MODEL_API_KEY;

if (!MODEL_ENDPOINT || !MODEL_API_KEY) {
  console.warn('MODEL_ENDPOINT and MODEL_API_KEY must be set in env for proxy to function.');
}

function redactPrompt(prompt) {
  // very small sample redaction: remove emails and long digit sequences
  if (!prompt || typeof prompt !== 'string') return '';
  let out = prompt.replace(/[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}/g, '[redacted-email]');
  out = out.replace(/\b\d{6,}\b/g, '[redacted-number]');
  if (out.length > 3000) out = out.slice(0, 3000) + ' [truncated]';
  return out;
}

app.post('/api/wonky-proxy', async (req, res) => {
  try {
    const { prompt } = req.body || {};
    if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
      return res.status(400).json({ ok: false, error: 'prompt required' });
    }
    const safePrompt = redactPrompt(prompt);
    // Call the remote model using server-side API key (not exposed to client)
    const response = await fetch(MODEL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MODEL_API_KEY}`
      },
      body: JSON.stringify({ prompt: safePrompt })
    });

    if (!response.ok) {
      const text = await response.text();
      return res.status(502).json({ ok: false, error: 'upstream error', detail: text });
    }
    const data = await response.json();
    // Return only necessary bits; avoid logging or storing user prompt
    return res.json({ ok: true, result: data });
  } catch (err) {
    console.error('proxy error', err);
    return res.status(500).json({ ok: false, error: 'internal error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Wonky proxy listening on ${PORT}`));
