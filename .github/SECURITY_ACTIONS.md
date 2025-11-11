## GitHub Actions: using secrets securely (example snippets)

Short guide: store secrets in the repository Settings → Secrets → Actions, and reference them in workflows with `${{ secrets.NAME }}`.

1) Minimal example: pass secret as env var to a job step

```yaml
# .github/workflows/example-use-secret.yml (snippet)
name: Example use secret
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    env:
      MODEL_API_KEY: ${{ secrets.MODEL_API_KEY }}
      MODEL_ENDPOINT: ${{ secrets.MODEL_ENDPOINT }}
    steps:
      - uses: actions/checkout@v4
      - name: Show that env var is available to the step
        run: |
          echo "Model endpoint is set"
          # DO NOT echo the key itself in logs
```

2) Example: deploy `examples/wonky-proxy` to Google Cloud Run and set runtime env vars from secrets

```yaml
name: Deploy Wonky Proxy (example)
on:
  push:
    paths:
      - 'examples/wonky-proxy/**'
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Set up gcloud
        uses: google-github-actions/setup-gcloud@v1
        with:
          service_account_key: ${{ secrets.GCP_SA_KEY }}
          project_id: ${{ secrets.GCP_PROJECT }}

      - name: Build container and push to GCR
        run: |
          IMAGE=gcr.io/${{ secrets.GCP_PROJECT }}/wonky-proxy:${{ github.sha }}
          docker build -t $IMAGE ./examples/wonky-proxy
          docker push $IMAGE

      - name: Deploy to Cloud Run (set env vars from secrets)
        run: |
          gcloud run deploy wonky-proxy \
            --image $IMAGE \
            --region us-central1 --platform managed \
            --set-env-vars MODEL_API_KEY=${{ secrets.MODEL_API_KEY }},MODEL_ENDPOINT=${{ secrets.MODEL_ENDPOINT }} \
            --allow-unauthenticated
```

Notes:
- Never print secrets in workflow logs. Avoid `echo ${{ secrets.MODEL_API_KEY }}`.
- Prefer to store long-lived credentials in a cloud secrets manager (GCP Secret Manager, AWS Secrets Manager) and reference those from your runtime.
- For Heroku, GitHub Actions can set config vars with the Heroku CLI using `HEROKU_API_KEY` stored as a secret.

If you want, I can create a draft workflow in `.github/workflows/` tailored to a target provider (Heroku, Cloud Run, Vercel, Netlify) and wire it to deploy `examples/wonky-proxy` from this repo—tell me which provider and I'll add it as a non-running example.
