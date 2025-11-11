## Security: Keys, Secrets, and Remote AI Proxy

This file explains how to keep model API keys and other secrets out of the repository and how to deploy the `examples/wonky-proxy` server safely.

Principles
- Never commit API keys or secrets to the repository.
- Keep production keys in host-managed secrets (Vercel/Netlify/GCP/Heroku/GitHub Secrets).
- Use a server-side proxy (see `examples/wonky-proxy`) that holds keys in environment variables and redacts user-supplied content before forwarding.

Local development
- Copy `examples/wonky-proxy/.env.example` to `.env` in that folder and fill in values for `MODEL_API_KEY` and `MODEL_ENDPOINT`.
- Add `.env` to your `.gitignore` (it should already be ignored by project conventions). Do NOT commit `.env`.
- Example `.env` (do not commit):
```
MODEL_API_KEY=sk_live_your_real_key_here
MODEL_ENDPOINT=https://api.example.com/v1/model/generate
PORT=3000
```

Vercel
- Add environment variables in Project Settings → Environment Variables: `MODEL_API_KEY`, `MODEL_ENDPOINT`.
- Implement your proxy as a Serverless Function under `/api/` that reads `process.env.MODEL_API_KEY`.
- Do not expose the key to client-side code. Only return safe, redacted responses.

Netlify
- Add environment variables in Site settings → Build & deploy → Environment → Environment variables.
- Use Netlify Functions (AWS Lambda) for proxying; read `process.env.MODEL_API_KEY` inside the function handler.

Google Cloud Run (recommended for small proxies)
- Deploy a container with env vars set at deploy time or via the Cloud Console.
- Example deploy command:
```
gcloud run deploy wonky-proxy --image gcr.io/PROJECT_ID/wonky-proxy:TAG \
  --region us-central1 --platform managed \
  --set-env-vars MODEL_API_KEY=${MODEL_API_KEY},MODEL_ENDPOINT=${MODEL_ENDPOINT} \
  --allow-unauthenticated
```
Store `MODEL_API_KEY` in Secret Manager where supported and mount or reference it at runtime.

Heroku
- `heroku config:set MODEL_API_KEY=your_key --app your-app-name`
- Use Heroku environment variables in `process.env` in your proxy app.

GitHub Actions / CI
- Store values in the repository Settings → Secrets → Actions (e.g. `MODEL_API_KEY`, `MODEL_ENDPOINT`, `GCP_SA_KEY`).
- An example workflow snippet is provided in `.github/SECURITY_ACTIONS.md`.

Security hardening recommendations
- Rate-limit requests server-side and add a small cooldown or CAPTCHA for abuse-prone endpoints.
- Always validate and redact PII or sensitive content before forwarding to a model.
- Log minimally and rotate logs often; avoid storing raw user input.

If you need help deploying the proxy to a specific host, tell me which host and I'll provide exact commands and a minimal workflow for it.
