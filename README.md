# veronicamiron_nails website

Next.js (App Router) + Tailwind v4. All pages static. Portuguese (Portugal).

- **Edit content**: `content/site.json` (services, prices, durations, hours, FAQ, texts). No code changes needed.
- **Booking**: `lib/booking/`. `BOOKING_ADAPTER=embed` (default) uses `BOOKING_EMBED_URL`; empty falls back to WhatsApp per service. `BOOKING_ADAPTER=form` shows the native form (adapter B), which is stubbed: `LIVE_SEND_ENABLED = false` in `lib/booking/webhook-adapter.ts`. Preview of the form: `/marcar/formulario` (noindex).
- **Env vars**: see `.env.example` (names only).
- **Checks**: `npm run lint:dashes` (no em or en dashes), `npm run check:content` (regenerates `docs/CONTENT-NEEDED.md`).
- **Vercel**: `vercel.json` Ignored Build Step builds only production and `preview/*` branches. Build machine: Standard.
- **Docs**: `docs/PLAN.md`, `docs/TASKS.md`, `docs/RESEARCH.md`, `docs/DESIGN.md`, `docs/CONTENT-NEEDED.md`, `docs/GATES.md`, `docs/screenshots/`.
