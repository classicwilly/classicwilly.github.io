# Wonky AI Proxy - Example (Node/Express)

This folder contains a minimal, secure example of a server-side proxy that safely calls an external model (e.g., Gemini).

Important security notes
- Keep your API key in an environment variable (never commit it).
- Consider redacting or truncating user prompts before sending them to the model.
- Log only metadata (timestamps, status) — do not persist user prompts.

Files
- `server.js` - minimal Express app that accepts POST /api/wonky-proxy with { prompt } and forwards to the remote model.
- `.env.example` - shows required environment variables.

Usage (development)
1. Copy `.env.example` to `.env` and set `MODEL_API_KEY` and `MODEL_ENDPOINT`.
2. Install dependencies: `npm install`.
3. Run: `node server.js` (or use `nodemon` in development).

Proxy contract
- Accepts JSON: { prompt: string }
- Returns JSON: { ok: true, result: { ... } } or { ok: false, error: 'message' }

Redaction advice
- Remove or mask email addresses, phone numbers, social-security-like numbers.
- Optionally limit prompt length (e.g., 2000 chars) and return an error if too long.

This file is an example for maintainers. Adapt to your hosting environment (serverless, cloud functions, container) and secure the endpoint (auth, rate-limiting) as needed.
