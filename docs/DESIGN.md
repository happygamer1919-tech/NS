# DESIGN

Brief: natural nail care, hygiene and safety, calm premium, solo artist. Mobile first. Her real photos are the hero (placeholders until they arrive). No generic template look.

## Direction A: "Porcelana" (warm editorial)
- **Palette**: porcelain `#FAF6F1` (background), linen `#F1E8DF` (surfaces), ink `#2A2421` (text), clay `#8E4B3A` (primary action, 6.1:1 on porcelain, white on clay 6.5:1), sage `#5E6B5A` (secondary accent, hygiene notes), line `#E3D7CB`.
- **Type pairing**: Fraunces (soft optical serif, display and prices) + Inter (UI and body). Both self hosted through `next/font`, no runtime request to Google.
- **Layout idea**: an editorial "card of the house". Large serif headline, one tall portrait photo slot (her hands at work), then a compact "info strip" right under the hero with the 3 most asked answers: where (1.o andar, Gabinete 2), how long, how much. Services as a price list with dotted leaders like a printed menu. Sticky bottom bar on phones: "Marcar" plus WhatsApp.
- **Why it fits her**: warm neutrals read as skin and natural nail, the serif signals unhurried craft, and the printed menu feel makes prices and durations scannable in seconds.

## Direction B: "Clinica Botanica" (clean clinical)
- **Palette**: white `#FFFFFF`, mist `#F2F5F3`, deep green `#1F3A33` (text and primary), eucalyptus `#7FA595` (accent), steel `#8A9A96` (lines).
- **Type pairing**: Manrope for everything (geometric sans, 3 weights), tabular numerals for prices.
- **Layout idea**: grid of square tiles, each service a tile with an icon, step by step "Higiene" section with sterilisation steps illustrated by line icons, full width green Book band at the bottom of every section.
- **Why it fits her**: green and white say clean and safe at first glance, which supports the hygiene positioning.

## Choice: Direction A "Porcelana"
1. Her differentiator is preservation of the natural nail and detailed, unhurried care. Direction B communicates hygiene well but reads like a dental clinic or a franchise; the warmth of A matches a single artist with 10+ years and a 5.0 rating.
2. Research (see RESEARCH.md) shows the best studios lean on real photography with quiet neutral frames; a warm neutral frame flatters skin tones and nail colours in photos, while saturated green fights with nail colours.
3. Hygiene is still carried explicitly in A through the sage accent and a dedicated "Higiene e seguranca" block, so we keep B's main strength without its cold tone.
4. Price list with leaders answers the "how much / how long" question faster on a phone than a tile grid.

## System (as built)
- Spacing scale: Tailwind default, content max width 72rem, side gutter 1.25rem on phones.
- Radius: 1rem cards, full pill buttons. Tap targets at least 48px tall.
- Motion: none beyond hover colour; respects `prefers-reduced-motion`.
- Photo placeholders: linen block with a dashed border and the label "FOTO REAL: [PREENCHER]", so nobody mistakes them for portfolio work.
- Icons: inline SVG only, no icon font.
