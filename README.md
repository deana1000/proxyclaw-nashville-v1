# ProxyClaw Nashville Site

## Run Locally

```bash
npm install
npm run dev -- --webpack
```

Open [http://localhost:3000](http://localhost:3000).

## Lead Form Backend

The Book a Call form posts to `/api/book-call`.

Configure one of these options in Vercel environment variables:

1. Formspree (simplest)
- `FORMSPREE_ENDPOINT` (example: `https://formspree.io/f/xxxxxxx`)

2. Resend
- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL` (destination inbox)
- `CONTACT_FROM_EMAIL` (optional; defaults to `onboarding@resend.dev`)

If no provider is configured, the form will return a configuration error.
