# Competitive Research: Nail Studio Websites and Booking UX

Project: mobile-first website for Veronica Miron (Instagram: veronicamiron_nails), solo nail artist in Linda-a-Velha, Oeiras, Portugal.
Single goal of the site: an Instagram or Google visitor books in under 60 seconds on a phone.

---

## 1. Method

- **Date of research:** 2026-11-05.
- **Tools:** WebSearch (standard and extended mode) and WebFetch.
- **Important limitation:** in this research session, direct page fetches were blocked by the session's network policy. WebFetch to `timeout.pt`, `timeout.com` and `dezstudio.com` failed with DNS/host errors, and a `curl` test through the proxy returned `403` on CONNECT (policy denial). Because of this, **every site below was verified through search results (title, URL and indexed page snippets), not through a live page load.** No site in this document was invented: each URL appeared as a search result during this session, and each feature listed was stated in an indexed snippet of that page or of a directly linked page (booking page, price list, FAQ).
- **Consequences for the data:**
  - Features that can only be judged by loading the page on a phone (sticky CTA, mobile performance feel, real vs stock gallery, embedded Instagram feed) are marked `?` for every site. They must be checked by hand on a phone before design decisions rely on them.
  - `Y` means the feature was observed in a snippet of the site or its own booking/price/FAQ page. `N` means a snippet of the relevant page was seen and the feature was clearly absent (for example, a price list with no durations). `?` means not observed either way.
  - Where a snippet came from a third-party listing (Fresha, Booksy, Treatwell, Yelp, Time Out) rather than the studio's own site, this is stated.
- **Sites only seen via search snippet:** all 15 sites and all 3 booking platform pages (see limitation above). Three Portuguese candidates were rejected because no own website could be found in search: Nails n'Roll Cascais (only a Time Out article), Our Porto Studio (only a Fresha listing), Nubia Santos Nails (only Treatwell). Unistella (Seoul) and Olive & June (LA) were rejected: Unistella's own domain never appeared as a result (only directories and Instagram), and Olive & June's salons show as closed on Yelp, with the site now pushing virtual appointments.
- **Selection:** 6 Portugal sites (Lisbon, Oeiras/Algés, Porto) and 9 international sites (London, New York, Sydney, Paris), chosen for being well reviewed, frequently cited by press roundups (Time Out, Marie Claire, Country and Town House, Refinery29) or directly comparable to a small studio.

---

## 2. Site list

| # | Name | City | URL |
|---|------|------|-----|
| 1 | Dez Studio (Nail Bar) | Lisbon, PT | https://dezstudio.com/en (services: https://dezstudio.com/servicos/unhas) |
| 2 | NAILCORE studio | Lisbon, PT | https://nailcore.setmore.com/ (Instagram: https://www.instagram.com/nailcore_studio/) |
| 3 | The Manipedi Nail Spa | Lisbon, PT | https://themanipedi.pt/en/ |
| 4 | NACO Nail Colors | Porto, PT | https://www.naconails.com/ |
| 5 | Hello Nails Algés | Algés, Oeiras, PT | https://hellonails.com/pt-pt/centers/alges/hello-nails-alges/ |
| 6 | Plena Estética | Algés, Oeiras, PT | https://plenaestetica.pt/manicure-e-pedicure/ |
| 7 | Townhouse | London, UK | https://townhouse.co.uk/locations/covent-garden/ |
| 8 | Margaret Dabbs London | London, UK | https://www.margaretdabbs.co.uk/treatments/the-medical-pedicure/ |
| 9 | Shoreditch Nails | London, UK | https://www.shoreditchnails.com/services (FAQ: https://shoreditch-nails.squarespace.com/studios-faqs) |
| 10 | HACO Nails | London, UK | https://www.haconails.com/ |
| 11 | Paintbox | New York, US | https://paint-box.com/pages/services (policy: https://paint-box.com/pages/cancellation-policy, FAQ: https://paint-box.com/pages/faq) |
| 12 | Vanity Projects | New York, US | http://www.vanityprojectsnyc.com/appointment |
| 13 | sundays | New York, US | https://dearsundays.com/ (example studio page: https://dearsundays.com/pages/soho-studio) |
| 14 | Laque Nail Bar | Sydney, AU | https://laquenailbar.com.au/ (price list: https://laquenailbar.com.au/pricelist/) |
| 15 | Manikya | Paris, FR | https://manikyabeaute.fr/ (example: https://manikyabeaute.fr/paris-16/manucure-russe) |

Booking platform pages studied (section 6):

| Platform | Salon | URL |
|----------|-------|-----|
| Fresha | Dez Studio, Dona Filipa de Vilhena, Lisbon | https://www.fresha.com/a/dona-filipa-de-vilhena-dez-studio-hair-nail-bar-lisboa-rua-dona-filipa-de-vilhena-36d-ef2ww32o |
| Booksy | Lisbon Beauty Lounge, Lisbon | https://booksy.com/pt-pt/2780_lisbon-beauty-lounge_salao-de-manicures-pedicures_157422_lisboa |
| Treatwell | Atelier de Unhas, Chiado, Lisbon | https://www.treatwell.pt/estabelecimento/atelier-de-unhas-chiado/ |

---

## 3. Feature matrix

Legend: `Y` observed, `N` observed absent, `?` not observed (see Method). "Sticky CTA", "Real gallery", "IG feed" and "Mobile feel" need a manual phone check for every site.

| Site | Book CTA on site | Sticky Book CTA | Booking tool | Prices visible | Durations visible | WhatsApp | Map / directions detail | Real gallery | Reviews shown | FAQ | Hygiene / sterilisation messaging | Language toggle | Instagram link / feed | Mobile feel | Policies (cancel / late) |
|------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 Dez Studio | Y ("Marcar") | ? | Own "Marcar" button + WhatsApp per studio; also on Fresha | Y | Y | Y | Y (two addresses, hours) | ? | ? (Fresha shows 4.9, ~2,277 reviews) | ? | ? | Y (PT and /en) | ? | ? | ? (nail art: send photo in advance to reserve right time) |
| 2 NAILCORE studio | Y | ? | Setmore | Y | Y | ? | Y (Rua Paul Harris 11A, hours) | ? (via Instagram) | ? | N | Partial (cruelty-free, vegan products) | ? | Y | ? | Y (12 h notice, late cancel or no-show pays service; no Multibanco / MB WAY) |
| 3 The Manipedi | Y | ? | Online booking (tool ?) | N (no price list found) | N | ? | Y (Travessa dos Pescadores 21) | ? | ? | ? | ? | Y (PT and /en) | ? | ? | ? |
| 4 NACO Nail Colors | Y ("Agende Agora") | ? | Fresha (per location) | Partial (one promo price only) | N | ? | Y (3 addresses, incl. "Piso 3" in mall) | ? | ? | ? | ? | ? | ? | ? | ? |
| 5 Hello Nails Algés | N (download app) | ? | Hello Nails app only | ? | ? | ? | Y (street address, weekday hours) | ? | ? | ? | ? | ? | ? | ? | ? |
| 6 Plena Estética | Y (online booking stated) | ? | Online (tool ?) | ? | ? | ? | Y (Rua Quinta de Santa Marta) | ? | ? | ? | ? | ? | ? | ? | ? |
| 7 Townhouse | Y | ? | Own booking system (select salon, treatment, time) | Partial (total shown during booking) | ? | ? | Y (one page per location) | ? | ? | ? | Y ("industry-leading hygiene standards") | ? | ? | ? | ? |
| 8 Margaret Dabbs | Y ("Book Treatment") | ? | Own online booking | Y (by practitioner grade, varies by clinic) | Y (45, 55, 65 min) | ? | Y (clinic list) | ? | ? | ? | Y (medical framing: podiatrists, Foot Health Practitioners) | Y (UK and EU sites) | ? | ? | ? |
| 9 Shoreditch Nails | Y ("Book a Treatment") | ? | Fresha | Y | Y (15m, 45m) | ? | Y (Cleeve Workshops, Boundary Street) | ? | ? | Y | Partial (natural scrubs, balms, oils) | ? | ? | ? | Y (no deposit, card on file, 100% late cancel and no-show; >5 min late shortened, >10 min cancelled) |
| 10 HACO Nails | Y | ? | Fresha (pick a nailist or "any available") | Y (on Fresha) | Y (on Fresha, 1 to 2.5 h) | ? | Y (two addresses, daily 10:00 to 20:00, email per salon) | ? | ? | ? | ? | ? | ? | ? | ? |
| 11 Paintbox | Y | ? | Zenoti | Y (gel vs polish side by side) | Y (in booking, e.g. 60 min) | ? | Y (location page, "2nd floor" partner address) | ? | ? | Y | ? | ? | ? | ? | Y (cancel by 6 PM day before, 50% fee; 20 min late cancelled) |
| 12 Vanity Projects | Y ("Book Appointment") | ? | Online + phone | Y (menu by category) | ? | ? | Y ("99 Chrystie Street, 2nd Floor", by appointment only) | ? | ? | ? | ? | ? | ? | ? | ? |
| 13 sundays | Y ("Book Now") | ? | Booker | ? | ? | ? | Y (one page per studio) but inconsistent addresses | ? | ? | ? | Partial (non-toxic, 10-free products; no sterilisation detail found) | ? | ? | ? | Partial (walk-ins when space allows) |
| 14 Laque Nail Bar | Y (one button per location) | ? | Fresha | Y | Y (45 m, 1 h) | ? | Y (hours, phone per shop) | ? | ? | ? | N (none on own pages; only in third-party reviews) | ? | Y (TikTok/IG "link in bio") | ? | ? |
| 15 Manikya | Y | ? | Own online booking; Planity (16e) | Y | Y (45 min, 1 h) | ? | Y (page per salon) but inconsistent addresses/phones across sources | ? | ? | ? | ? | ? | ? | ? | ? |

Observed counts (Y or partial): own Book CTA 14/15; prices visible 11/15; durations visible 8/15; clear policies 3/15 (Nailcore, Shoreditch Nails, Paintbox); hygiene messaging (any form) 6/15, but only 2/15 (Townhouse, Margaret Dabbs) speak to safety rather than product ingredients; WhatsApp 1/15 (Dez Studio).

---

## 4. The 10 best patterns worth copying

1. **One unmistakable "Book" verb on the site, in the local language.** Dez Studio ("Marcar"), NACO ("Agende Agora"), Shoreditch Nails ("Book a Treatment"), Margaret Dabbs ("Book Treatment"), Vanity Projects ("Book Appointment"), sundays ("Book Now"). 14 of 15 sites had it.
2. **Price and duration on the same line per service.** Dez Studio (verniz gel maintenance 40 EUR, 1 h; first application 60 EUR, 1 h 20), Nailcore (gel nude 30 EUR, about 1 h 15), Shoreditch Nails (Mani Full Works 46 GBP, 45 min), Laque (Classic Manicure 45 min, 70 AUD), Manikya (manucure russe 45 min, 45 EUR). This directly answers two of Veronica's three most asked questions.
3. **WhatsApp as a booking fallback next to the main button.** Dez Studio offers a WhatsApp contact per studio beside "Marcar". The Booksy listing for Lisbon Beauty Lounge also says bookings can be made by Direct/SMS/WhatsApp. Unistella (rejected from the list, see Method) is booked mostly via WhatsApp/KakaoTalk per guides. For a Portuguese audience, WhatsApp is the natural channel.
4. **Floor-level address detail.** Vanity Projects writes "99 Chrystie Street, 2nd Floor"; Paintbox's partner location says "184 5th Ave (2nd floor)"; NACO says "Via Catarina Shopping (Piso 3)"; Lisbon Beauty Lounge on Booksy says "3º andar, Letra C". This is exactly Veronica's problem (first floor office, easy to miss).
5. **Clear, short cancellation and lateness rules.** Shoreditch Nails (no deposit, card on file, 100% for late cancel or no-show, treatment shortened after 5 min late, cancelled after 10 min), Paintbox (cancel by 6 PM the evening before, 50% fee; 20 min late cancelled), Nailcore (12 h notice, no-show pays the service). Stating the rule up front protects a solo artist's day.
6. **Hygiene stated as a standard, not an adjective.** Townhouse ("industry-leading hygiene standards", repeated on landlord listings such as One New Change), Margaret Dabbs (treatments named by practitioner qualification: Foot Health Practitioner, Podiatrist, Senior and Principal Podiatrist). Most others talk only about product ingredients (sundays: non-toxic, 10-free; Nailcore: vegan, cruelty-free). Veronica can own this gap locally.
7. **Choose your artist or "any available".** HACO Nails lets you pick a named nailist or any available one; Fresha and Booksy default to "any". For a solo artist this step should disappear entirely (there is only Veronica), which is itself a speed advantage.
8. **Set expectations for custom work.** Dez Studio asks clients to send a photo of the nail art in advance so the right time is reserved; Nailcore prices custom art "from 45 EUR, about 2 h". This prevents under-booked slots.
9. **Practical payment and logistics notes.** Nailcore says plainly that there is no Multibanco or MB WAY; Paintbox says arriving with extensions or acrylics leads to cancellation; Dez Studio and Nailcore add a removal fee for gel applied elsewhere (Nailcore: +5 EUR). Short notes like these answer questions before they are asked.
10. **Bilingual by URL, not by guesswork.** Dez Studio (/en), The Manipedi (/en with PT section), Margaret Dabbs (.co.uk and .eu). Clients are Portuguese, but Linda-a-Velha and Oeiras have many expats; a simple PT/EN switch costs little.

---

## 5. Five things to avoid

1. **Forcing an app download to book.** Hello Nails Algés tells visitors to "download the Hello Nails app and book" (https://hellonails.com/pt-pt/centers/alges/hello-nails-alges/). That breaks the 60-second goal immediately on a phone.
2. **Mixed signals about walk-ins vs appointments.** NACO's Fresha page for Naco I says "atendimento sem marcação" while the official site pushes "Agende Agora" (https://www.naconails.com/). sundays says walk-ins are welcome when space allows but recommends booking (https://dearsundays.com/). Veronica is appointment-only: say it once, clearly.
3. **Inconsistent addresses, phones and hours across pages.** sundays lists the Upper East Side studio at two different addresses; Manikya's Paris 16 address appears as both 16 and 48 rue Copernic, with different phone numbers (https://manikyabeaute.fr/); Dez Studio hours differ between its site, Time Out and Fresha. One source of truth (the site plus Google Business Profile) is essential when the main FAQ is "how do I get there".
4. **Hiding prices or showing only a teaser.** The Manipedi has no price list that could be found (https://themanipedi.pt/en/); NACO shows only a struck-through promo price (19.99 to 16.99 EUR) with no service list on the site; Townhouse shows the total only inside the booking flow. Price is one of Veronica's top three questions.
5. **Splitting price and duration across different surfaces.** Paintbox shows list prices on paint-box.com but different (discounted) prices and the durations only inside Zenoti (https://paint-box.com/pages/services); HACO shows prices and durations only on Fresha. Users bounce between tabs; on a phone that is lost time.

---

## 6. Booking platform UX notes

All three were studied through indexed salon pages and the platforms' own help or terms pages (live pages could not be loaded, see Method).

### Fresha (Dez Studio, Lisbon)
URL: https://www.fresha.com/a/dona-filipa-de-vilhena-dez-studio-hair-nail-bar-lisboa-rua-dona-filipa-de-vilhena-36d-ef2ww32o (all services: same URL + `/all-offer`)
Help sources: https://www.fresha.com/help-center/knowledge-base/online-profile/599-learn-how-clients-book-appointments-online and https://www.fresha.com/help-center/knowledge-base/calendar/101218-manage-online-bookings-settings

- **Steps:** open salon page, pick one or more services, pick professional (or "Any professional", auto-assigned), pick date and time, log in or create a Fresha account, add card if the salon requires it, review and confirm. Roughly 5 to 6 screens.
- **What it shows:** price per service (often "from"), duration per service, rating and review count (Dez Studio: 4.9, about 2,277 reviews), address, opening hours. Salons can show "guidelines" during the flow (parking, arrival time).
- **Deposit:** optional per salon ("appointment protection": card capture or upfront payment). Terms shown to the client are generated from the salon's payment policy.
- **Friction:** mandatory account creation/login; Fresha marketplace shows competing salons around the listing; "from" prices hide the real total; entry points from Instagram "Book Now" buttons work but still land in the Fresha account wall.

### Booksy (Lisbon Beauty Lounge, Lisbon)
URL: https://booksy.com/pt-pt/2780_lisbon-beauty-lounge_salao-de-manicures-pedicures_157422_lisboa
Help sources: https://help.booksy.com/hc/en-us/articles/21615958266770-How-can-I-book-an-appointment and https://biz.booksy.com/blog/how-to-book-an-appointment

- **Steps:** salon page, choose service ("Reservar"), staff defaults to "Any staff member" (can change), pick date and time slot (salons may set fixed intervals, e.g. every 30 min), answer optional salon questions, log in or enter email and phone, confirm. Also bookable from Google's side panel.
- **What it shows:** exact price and duration per service in PT (examples on this page: "Pedicure tradicional 30,40 EUR, 1h 15min"; "Remoção do gelinho + pedicure com verniz gel bio 43,50 EUR, 1h 30min"; "Conserto de unha 2,50 EUR, 30min"), rating near 5.0 with roughly 600 to 740 reviews, portfolio photos, a "Política de cancelamentos" badge, full address including floor ("3º andar, Letra C").
- **Deposit:** optional per business (deposit or card on file); late cancel and no-show fees set per business.
- **Friction:** cancellation badge shows a cryptic value ("Grátis 20h 30min") without explanation; account/login required; app promotion; salon itself states bookings are "only by prior appointment" and also via Direct/SMS/WhatsApp, showing that even Booksy salons keep WhatsApp as a parallel channel.

### Treatwell (Atelier de Unhas, Chiado, Lisbon)
URL: https://www.treatwell.pt/estabelecimento/atelier-de-unhas-chiado/
Terms sources: https://www.treatwell.co.uk/info/booking-terms-and-conditions/ and https://partnercare.treatwell.com/s/article/Prepaid-or-Pay-at-venue-the-two-types-of-Treatwell-bookings?language=en_GB

- **Steps:** salon page, choose treatment, choose date and time (live slots shown on listing pages), staff usually first available (a Salonized integration note says staff choice is not available via Treatwell), choose payment: prepay online (card, Google Pay, PayPal) or "Pay at venue" if eligible, log in or create account, confirm.
- **What it shows:** price with strike-through discounts (e.g. premium manicure 16 EUR, down from 20 EUR; premium pedicure with gel 35 EUR, down from 55 EUR), duration (e.g. 40 mins), rating 4.8 to 4.9 with about 116 to 215 reviews, address and transit ("3 minutes from Baixa-Chiado metro"), hours.
- **Deposit:** prepaid by default; "Pay at venue" may still require card details if the venue uses cancellation protection (full charge if cancelled outside policy). Default policy is 3 hours if the venue sets none.
- **Friction:** discount-led framing (strike-through prices) trains clients to shop on price, which conflicts with a premium, unhurried positioning; prepay step; marketplace commission for the artist; staff choice not offered.

### Takeaways for Veronica
- All three show **price + duration per service** before the slot picker. Veronica's own site must do the same, before any third-party hand-off.
- All three require an **account or login**: that is the single biggest threat to the 60-second goal. If a platform is used, link deep into the specific service, and offer WhatsApp as the zero-login alternative.
- Booksy and Treatwell show the **floor/transit detail** on the listing: good, but it must also be on Veronica's site, above the fold on the location section.

---

## 7. Mapping: finding to action on Veronica's site

| # | Finding (source) | What we do on Veronica's site |
|---|------------------|-------------------------------|
| 1 | One clear booking verb (pattern 1; 14/15 sites) | A single primary button "Marcar" in a sticky bottom bar on mobile, always visible, same label everywhere. |
| 2 | WhatsApp beside the main CTA (Dez Studio; Booksy Lisbon Beauty Lounge) | Sticky bar has two actions: "Marcar" (online) and a WhatsApp icon button with a prefilled PT message ("Olá Veronica, gostava de marcar..."). |
| 3 | Price and duration on one line (Dez, Nailcore, Shoreditch Nails, Laque, Manikya) | Service list of 4 items (Manicure, Pedicure sem água, Verniz gel, Unhas de gel), each with "EUR price, duration" and a "Marcar" link straight to that service. |
| 4 | Floor-level address (Vanity Projects, Paintbox, NACO, Booksy) | Location block: full address, "1.º andar" in bold, door/entrance photo, one-line walking directions from a known landmark, "Abrir no Google Maps" and "Waze" buttons, parking and bus notes. Also in the booking confirmation text. |
| 5 | Inconsistent address/hours across sources (sundays, Manikya, Dez) | One canonical address/hours block reused in site, footer, schema.org LocalBusiness markup and Google Business Profile; checklist to keep Instagram bio identical. |
| 6 | Clear cancellation/late rules (Shoreditch Nails, Paintbox, Nailcore) | Short "Antes da marcação" box: cancellation notice window, what happens if late (e.g. after X min the service may be shortened), gel removal from elsewhere. Wording set by Veronica. |
| 7 | Hygiene as a standard, not an adjective (Townhouse, Margaret Dabbs; gap in most others) | "Higiene e segurança" section with concrete steps (sterilisation method, single-use files and buffers, disinfected surfaces, waterless pedicure explained). Concrete and verifiable, not slogans. |
| 8 | Natural nail preservation is rarely stated (only product claims at sundays, Nailcore) | Lead positioning line: preservation of the natural nail, careful removal, no aggressive drilling. Short "why waterless pedicure" note. |
| 9 | No staff picker needed (HACO, Fresha, Booksy default to "any") | Skip staff selection entirely; copy says "Atendimento individual com a Veronica". Fewer steps than any platform. |
| 10 | Account/login walls on Fresha, Booksy, Treatwell | If a platform is used, deep-link to the exact service; always keep WhatsApp as the no-login path. Measure taps to booking (target: 3 taps). |
| 11 | Hidden or teaser prices (The Manipedi, NACO, Townhouse) | All prices visible on the home page. Use "a partir de" only where truly variable (gel nails length) and explain why. |
| 12 | Price/duration split across site and booking tool (Paintbox, HACO) | Same prices and durations on site and in the booking tool; one source of truth updated together. |
| 13 | App-only booking (Hello Nails Algés) | Never require an app. Web booking or WhatsApp only. |
| 14 | Walk-in confusion (NACO, sundays) | State "Só com marcação" once near the CTA. |
| 15 | Custom work expectation (Dez Studio photo request, Nailcore art pricing) | For gel nails/nail art: "Envie uma foto de referência pelo WhatsApp" link so the right time is reserved. |
| 16 | Payment notes (Nailcore: no Multibanco/MB WAY) | One line with accepted payment methods (e.g. MB WAY, numerário), set by Veronica. |
| 17 | Bilingual URLs (Dez Studio, The Manipedi, Margaret Dabbs) | PT default, small "EN" toggle in the header; no auto-redirect by browser language. |
| 18 | Reviews shown mainly on platforms (Fresha 4.9 for Dez; Booksy ~5.0) | Show "Google 5,0" with review count and 2 to 3 short real quotes near the CTA, linking to the Google profile. |
| 19 | Instagram as the discovery channel (Nailcore, Laque "link in bio") | Instagram bio link goes to the site (not to a platform); site shows a small grid of real work photos (static, optimised, not a heavy embed) plus link to @veronicamiron_nails. |
| 20 | Mobile feel could not be verified on any competitor | Build lean: no heavy widgets above the fold, compressed images, target Lighthouse mobile performance 90+ and first tap on "Marcar" possible within 2 s on 4G. |

---

*All sources cited inline above. Every URL appeared as a search result on 2026-11-05; none could be opened directly in this session (network policy), so features were taken from indexed snippets. Sticky CTA, mobile performance and gallery authenticity should be re-checked manually on a phone.*
