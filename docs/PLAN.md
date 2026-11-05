# PLAN: veronicamiron_nails website

Owner: Ivan (A&I Automation). Builder: Claude Code (cloud session).
Branch: `claude/eloquent-wozniak-o2us0t`. Preview only, never production, never client accounts.

## One goal
An Instagram or Google visitor books in under 60 seconds on a phone.

Everything below is judged against that goal: the Book button is visible on every page without scrolling (sticky bottom bar on mobile, header button on desktop), the booking path has at most 2 taps before the booking tool or WhatsApp opens, and the three most asked questions (address, duration, price) are answered on the Home page itself.

## Inputs
- Client facts: given by Ivan in the brief (copied into `content/site.json`, nothing invented).
- Current website: the brief left the field as a placeholder, so treated as **unknown**. No `docs/AUDIT.md` until Ivan sends a URL.
- Photos: none yet. Clearly marked placeholders only. No AI generated nail images ever.

## Phases
1. **Research** (`docs/RESEARCH.md`): 12 to 15 nail studio sites (5+ Portugal), Fresha, Booksy, Treatwell. Feature matrix, 10 patterns, 5 anti patterns, mapping to her site.
2. **Design** (`docs/DESIGN.md`): 2 directions, pick one, reasoning.
3. **Build**: Next.js App Router + Tailwind, fully static export where possible.
   - `content/site.json` holds every editable fact (services, prices, durations, hours, FAQ, texts).
   - Routes: `/` Home, `/servicos`, `/galeria`, `/sobre`, `/como-chegar`, `/avaliacoes`, `/faq`, `/contacto`, `/marcar`, `/privacidade`.
   - Booking: `BookingProvider` interface, Adapter A (embed via `BOOKING_EMBED_URL`) active, Adapter B (native form to `BOOKING_WEBHOOK_URL`) stubbed, sends nothing.
   - Floating WhatsApp button with prefilled PT message.
   - Local SEO: `NailSalon` JSON-LD, sitemap, robots, OG image, metadata.
   - Legal: Politica de Privacidade, cookie notice (no tracking cookies used, so informative notice only), Livro de Reclamacoes link.
4. **Verify**: gates G1 to G9 with evidence in `docs/GATES.md`.
5. **Report**: one report at the end.

## Key decisions (with reasoning)
| Decision | Choice | Why |
|---|---|---|
| Rendering | Static pages (SSG), no server runtime needed except none | Fast on 4G, cheap on Vercel, Lighthouse friendly |
| Booking adapter A with no URL set | Falls back to WhatsApp + phone CTA | Nothing breaks before Ivan picks a tool; WhatsApp is her current channel |
| Adapter B | Code present, `submit()` is a no op returning a stub result, form never calls `fetch` | Gate G8, no live sends until Make scenario exists |
| Prices and durations | `[PREENCHER]` in `site.json` | Never invent; brief gives none |
| Reviews | Link to Google profile only | Never fabricate; no real review text supplied |
| Language | PT-PT only for v1 | PT must be complete first; EN/RU toggle is an open question |
| Map | Link out to Google Maps, no embedded iframe | Iframe costs ~500 KB and sets third party cookies; link is lighter and RGPD clean |
| Fonts | Self hosted via `next/font` | No Google Fonts request at runtime, better performance and RGPD |
| Analytics | None | No consent banner needed for tracking; can add later |

## Vercel economy
- `vercel.json` `ignoreCommand` builds only `main`/production and `preview/*` branches.
- Build Machines: Standard (set in project settings, noted for Ivan).
- One push per loop.

## Constraints
- PT-PT copy, short and warm, zero em dashes or en dashes in content and components (gate G6).
- Credentials: env var names only.
