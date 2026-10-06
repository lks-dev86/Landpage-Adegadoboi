---
name: Adega do Boi
description: Churrascaria de rodízio no Jóquei, Teresina; hand-painted price board on a limewashed wall.
colors:
  vinho: "#8B1030"
  vinho-escuro: "#5E0B20"
  noite: "#3A0614"
  parede: "#F5E7CF"
  parede-2: "#F0DFC4"
  parede-3: "#E9D3B4"
  creme: "#FFF9EE"
  creme-2: "#F5E7CF"
  creme-suave: "#F3D2B8"
  tinta-2: "#7A2A38"
  laranja: "#F28A2E"
  laranja-tinta: "#9A400C"
  ambar: "#FDBA6B"
  verde-aberto: "#7BDB95"
typography:
  display:
    fontFamily: "Alfa Slab One, Alfa Fallback, Rockwell, Georgia, serif"
    fontSize: "clamp(2.05rem, 1.25rem + 3.9vw, 4.25rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "0.004em"
  headline:
    fontFamily: "Alfa Slab One, Alfa Fallback, Rockwell, Georgia, serif"
    fontSize: "clamp(1.9rem, 1.35rem + 2.4vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "0.005em"
  title:
    fontFamily: "Alfa Slab One, Alfa Fallback, Rockwell, Georgia, serif"
    fontSize: "1.45rem"
    fontWeight: 400
    lineHeight: 1
  brush:
    fontFamily: "Kaushan Script, Segoe Script, Brush Script MT, cursive"
    fontSize: "1.14em"
    fontWeight: 400
    lineHeight: 0.9
  price:
    fontFamily: "Alfa Slab One, Alfa Fallback, Rockwell, Georgia, serif"
    fontSize: "clamp(2.6rem, 1.4rem + 1.9vw, 3.3rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Nunito, Nunito Fallback, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  lead:
    fontFamily: "Nunito, Nunito Fallback, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.55
  label:
    fontFamily: "Nunito, Nunito Fallback, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.1em"
rounded:
  tag: "8px"
  btn: "14px"
  map: "14px"
  gallery: "16px"
  chip-today: "16px"
  consent: "18px"
  board: "20px"
  placa: "22px"
  frame: "24px"
  pill: "999px"
spacing:
  gutter: "16px"
  gutter-narrow: "12px"
  section-y: "clamp(56px, 6vw + 32px, 112px)"
  header-h: "64px"
  header-h-desktop: "72px"
  dock-h: "68px"
  container: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.laranja}"
    textColor: "{colors.noite}"
    borderColor: "{colors.laranja-tinta}"
    rounded: "{rounded.btn}"
    padding: "0.7em 1.25em"
    height: "48px"
  button-primary-hover:
    backgroundColor: "#FF9B45"
    textColor: "{colors.noite}"
  button-ghost:
    backgroundColor: "rgba(139, 16, 48, 0.05)"
    textColor: "{colors.vinho}"
    borderColor: "rgba(139, 16, 48, 0.45)"
    rounded: "{rounded.btn}"
    padding: "0.7em 1.25em"
    height: "48px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.vinho}"
    borderColor: "currentColor"
    rounded: "{rounded.btn}"
    padding: "0.7em 1.25em"
    height: "48px"
  placa:
    backgroundColor: "{colors.creme}"
    textColor: "{colors.noite}"
    borderColor: "{colors.laranja-tinta}"
    rounded: "{rounded.placa}"
    padding: "26px 24px"
    paddingNarrow: "26px 16px"
  feature-card:
    backgroundColor: "{colors.creme}"
    textColor: "{colors.noite}"
    borderColor: "{colors.laranja-tinta}"
    rounded: "{rounded.board}"
    padding: "8px 14px 8px 8px"
  price-card:
    backgroundColor: "{colors.vinho}"
    textColor: "{colors.creme}"
    borderColor: "{colors.laranja}"
    rounded: "{rounded.board}"
    padding: "26px 38px"
    paddingNarrow: "24px 20px"
    paddingWide: "30px 46px"
  infantil-board:
    backgroundColor: "{colors.creme}"
    textColor: "{colors.noite}"
    borderColor: "{colors.laranja-tinta}"
    rounded: "{rounded.board}"
    padding: "28px 38px 18px"
    paddingNarrow: "26px 20px 16px"
    paddingWide: "30px 46px 20px"
  dish-card:
    backgroundColor: "linear-gradient(160deg, {colors.vinho} 0%, {colors.vinho-escuro} 75%)"
    textColor: "{colors.creme}"
    borderColor: "{colors.laranja}"
    rounded: "{rounded.board}"
    padding: "20px"
  hoje-chip:
    backgroundColor: "{colors.vinho}"
    textColor: "{colors.creme}"
    borderColor: "{colors.laranja}"
    rounded: "{rounded.chip-today}"
    padding: "10px 14px 10px 10px"
  hoje-tag:
    backgroundColor: "{colors.laranja}"
    textColor: "{colors.noite}"
    rounded: "{rounded.tag}"
    padding: "5px 9px 4px"
  selo-mais-pedido:
    backgroundColor: "{colors.ambar}"
    textColor: "{colors.noite}"
    rounded: "{rounded.pill}"
    size: "80px"
  chip-on-placa:
    backgroundColor: "{colors.creme-2}"
    textColor: "{colors.noite}"
    borderColor: "rgba(139, 16, 48, 0.3)"
    rounded: "{rounded.pill}"
    padding: "9px 14px 8px"
  status-strip:
    backgroundColor: "{colors.noite}"
    textColor: "{colors.creme}"
    height: "36px"
  header-glass:
    backgroundColor: "rgba(94, 11, 32, 0.92)"
    textColor: "{colors.creme}"
    borderColor: "{colors.laranja}"
    height: "{spacing.header-h}"
  dock-glass:
    backgroundColor: "rgba(58, 6, 20, 0.94)"
    textColor: "{colors.creme}"
    borderColor: "{colors.laranja}"
    height: "{spacing.dock-h}"
  footer-band:
    backgroundColor: "linear-gradient(180deg, {colors.vinho-escuro} 0%, {colors.noite} 100%)"
    textColor: "{colors.creme-suave}"
    borderColor: "{colors.laranja}"
---

# Design System: Adega do Boi

## Overview

**Creative North Star: "O Quadro de Preços Pintado"**

The site is the restaurant's hand-painted price board, in the tradition of the Northeastern sign painter (abridor de letras), hung on a limewashed wall. The wall is cal: every section ground is a step of warm cream, from `parede` through `parede-2` to `parede-3`, or a short gradient between two of them. Vinho holds three jobs. It is ink (slab headings in vinho, body in noite, secondary copy in tinta-2); it is object (the price cards, the dish cards, the hero HOJE chip, the hero photo mat); and it is frame — the page hangs as a picture between two vinho rails, the status strip and header at the top and the dock and footer at the bottom. Dense reading sits on a `creme` placa, lighter than any wall step, raised off the cal by the filete and a short sepia shadow. The thread that ties cream, wine and limewash together is the orange filete: the same line closes a creme placa, a vinho object and the header.

Density is mobile-first and generous: one column at 390px, large slab caps, big painted numerals, 48px+ touch targets, and a fixed bottom dock. Ornament is borrowed only from the painter's own kit: drop-shaded slab letters, a brush-script word, corner arabesques, a round stamped seal, dashed rules between rows. The board also knows what time it is. One "now" marker runs through the status strip, the hero HOJE chip, the price card for today and the hours row.

**Key Characteristics:**
- Limewashed grounds in three cream steps, hung between two vinho rails; vinho is ink, object and frame, never a section ground.
- Alfa Slab One caps with a painted offset shade (letra sombreada); one Kaushan brush word per moment, unshaded, at most three moments per page.
- Orange fills are reserved for the primary action and the HOJE marker. Orange as a 1.5px filete line frames every board — and changes tint with its ground.
- Prices painted like a quadro: small R$, big integer, raised underlined cents.
- Rounded boards (20–24px), short sepia shadows, no hard box shadows.
- Ease-out motion, one authored moment (the brush word paints in), everything visible by default.

## Colors

A limewash palette: three steps of cream for grounds, a lighter cream for boards, vinho in three depths for ink, objects and the chrome rails, one orange for action, one for ink-weight accents, one amber for the painter's work on wine.

### Primary
- **Vinho de Parede** (vinho): ink and object, and the hue the header rail is mixed from. All slab headings on cal (7.77:1 on parede, 6.52:1 on the deepest wall step), price cards, the hero HOJE chip, the review-theme icon discs, service dots, chip and dash rules at 16–35% alpha. Creme text on it is 9.05:1.
- **Vinho Escuro** (vinho-escuro): the frame. The header glass at 92% (`rgba(94, 11, 32, 0.92)`), its opaque reduced-transparency fallback, the mobile menu board, and the top of the footer gradient — plus the hero photo mat, gallery tile backing and the end of the dish-card gradient. Creme on it is 12.97:1, creme-suave 9.53:1, ambar 8.04:1, verde-aberto 8.03:1, the laranja filete 5.47:1.
- **Noite** (noite): body ink on cal (14.16:1 on parede, 16.48:1 on a placa), the hard shade inside vinho objects, the text on every orange fill — and the darkest point of both rails: the status strip, the dock glass at 94% (`rgba(58, 6, 20, 0.94)`) with its opaque fallback, the foot of the footer gradient, and the theme-color on both pages. On noite, creme reads 16.48:1, creme-suave 12.11:1, ambar 10.21:1, verde-aberto 10.20:1, laranja 6.95:1.

### Wall
- **Parede** (parede): the default limewash. Body ground, `.section--cal`, the legal page ground, and the pale end of the hero and CTA gradients.
- **Parede 2** (parede-2): the second wall step. `.section--cal-2`, the html ground and scrollbar track, the foot of the hero gradient.
- **Parede 3** (parede-3): the deepest wall step. The bottom of the price-section gradient, so the main board sits against the most saturated cal, and the bottom of the CTA gradient, so the limewash darkens before it meets the footer rail.

### Secondary
- **Laranja de Ação** (laranja): primary buttons, the HOJE tag on hero chip, price card and hours row, the orange dot on the current meal, the 16% tint on today's hours row, the skip link, text selection, the letra sombreada shade on cal, and the filete wherever the ground is wine — inside vinho objects and along the whole chrome (header inset, dock top border, footer top border). Noite text on it is 6.95:1. It is never text: 2.04:1 on parede, 3.82:1 on vinho.
- **Laranja Tinta** (laranja-tinta): the orange that can be ink. The default filete on cal, the brush word, filled Google stars, the arabesques on the infantil placa, and the lower lip of the primary button. 6.44:1 on a placa, 5.53:1 on parede, 4.64:1 on the deepest wall step.

### Tertiary
- **Âmbar de Pincel** (ambar): the painter's accent, used wherever the ground is wine — inside vinho objects and along the rails. Price-card day titles, R$ and the cents underline, the dashed rule between price columns, the "Mais pedido" seal, the HOJE chip arrow, the closed-state status dot and word, the dashed menu dividers (at 22%), footer column titles, the inner filete hairline (at 38%), the bull silhouettes (13%), and the focus ring on every wine surface. 5.60:1 on vinho, 8.04:1 on vinho-escuro, 10.21:1 on noite.
- **Verde Aberto** (verde-aberto): the "open now" state only. The status dot (with a 22% halo) and the word "Aberto agora" on the noite strip. 10.20:1 on noite, 8.03:1 on vinho-escuro.

### Neutral
- **Creme de Placa** (creme): the board surface for dense reading (menu board, Google score, hours, map, infantil prices, consent) the text colour on every vinho object, and the ink of the whole chrome — status strip, header links and toggle, mobile menu links, dock buttons, footer links and wordmark. At #FFF9EE it is lighter than any wall step — that difference is what makes a placa read as a board rather than a panel of wall.
- **Creme 2** (creme-2): recessed fills inside a placa — menu chips, service pills, the map well. Its value is `parede`, so a recess reads as the wall showing through the board.
- **Creme Suave** (creme-suave): secondary text on wine. The HOJE chip label, price-row meal names, footer copy, and the status strip’s default dot. 6.65:1 on vinho, 9.53:1 on vinho-escuro, 12.11:1 on noite.
- **Tinta 2** (tinta-2): secondary text on cal and on placas. Hero subtitle, section leads, card copy, table heads, meta lines. 7.77:1 on parede, 9.04:1 on a placa.

### Named Rules
**The Parede de Cal Rule.** The wall is limewash, and it hangs between two rails of wine. Every section ground is a step of cream — `parede`, `parede-2`, `parede-3`, or a short gradient between two of them — and that holds for the landing page, the hero, the CTA and the legal page alike. Vinho never grounds a section. It has exactly three jobs: **ink** (slab headings, body, secondary copy), **object** (price cards, dish cards, the HOJE chip, the hero photo mat) and **frame** — the chrome. The frame is two rails: status strip plus header at the top, dock plus footer at the bottom, each closed by the laranja filete. The wall is never vinho and the chrome is never cal; a placa is the lighter cream (`creme`) laid over the wall, never a wall step and never chrome.

**The Contextual Filete Rule.** The filete is one line with two tints, and it is what makes cream, wine and limewash read as one object. `--filete-cor` resolves to `laranja-tinta` at `:root` — the default over cal — and is redeclared locally to `laranja` by every wine surface: the vinho objects (hero HOJE chip, hero photo mat, price card, dish card) and the whole chrome (header, dock, footer). The reason is the border's own legibility: it must clear 3:1 against whatever it sits on. Measured: laranja-tinta over parede 5.53:1, over parede-3 4.64:1, over a placa 6.44:1; laranja over vinho 3.82:1, over vinho-escuro 5.47:1, over noite 6.95:1, over today's warmed card 3.41:1. In the header the filete is an **inset shadow**, not a border — `inset 0 -1.5px 0 var(--laranja)` — on purpose: it closes the rail without adding to the header's height, so `--header-h` and the `scroll-padding-top` built on it stay true. Elsewhere it is a real 1.5px border. Never hard-code the filete colour at the point of use; set `--filete-cor` on the surface and let `--filete` carry it.

**The One Orange Rule.** Orange fills mark exactly two things: the primary action and the HOJE marker. Only one orange action is lit at a time. While the hero "Reservar mesa" is on screen, the header Reservar and the dock's main button drop to outlines; when it scrolls away they fill.

**The Orange-Is-Not-Ink Rule.** `laranja` is never text, on any ground: 2.04:1 on cal, 3.82:1 on vinho. Its jobs are fills, the letra sombreada shade, and the filete inside vinho. The orange that can carry text is `laranja-tinta` on cal and on placas; inside vinho objects the accent that reads as text is `ambar`.

## Typography

**Display Font:** Alfa Slab One (with a metric-matched Georgia fallback, then Rockwell)
**Brush Font:** Kaushan Script (with Segoe Script, Brush Script MT)
**Body Font:** Nunito 400/600/700/800 (with a metric-matched Segoe UI/Roboto fallback)

**Character:** A heavy sign-painter slab, always in caps, carries every heading and every number. A single brush-script word, rotated -4° and overlapping the slab line, is the painter's flourish. Nunito keeps everything else round, warm and readable in sun.

### Hierarchy
- **Display** (Alfa Slab One, clamp 2.05–4.25rem, 1.02, caps, max 15ch): the hero headline only. Vinho with a 0.05em laranja shade.
- **Headline** (Alfa Slab One, clamp 1.9–3.25rem, 1.02, caps): every section title, on cal and inside a placa alike — vinho with a 0.055em laranja shade. One rule, no board variant.
- **Final CTA** (Alfa Slab One, clamp 2.4–4.75rem, 1, caps, centered): the closing call to book; vinho with a 0.045em/0.05em laranja shade.
- **Title** (Alfa Slab One, 1.15–1.7rem, 1–1.05, caps): board titles, feature titles, review themes and infantil prices in vinho on cream; dish names in creme and price-card day names in ambar inside vinho objects.
- **Brush** (Kaushan Script, 1.12–1.3em of the parent slab, 0.9, rotate -4°): one word inside a slab line, in `laranja-tinta`, with `text-shadow: none`.
- **Price** (Alfa Slab One, integer clamp 2.6–3.3rem; R$ 0.95rem ambar; cents 1.15rem raised 0.25em with a 2px ambar underline): every rodízio price.
- **Lead** (Nunito 700, 1.125–1.25rem, tinta-2, 34–46ch): subtitles under headlines; creme-suave when the lead sits inside a vinho object.
- **Body** (Nunito 400, 1.0625rem, 1.55, noite): running text; 0.95rem / 1.45 inside cards, in tinta-2. Notes cap at 62ch, legal text at 68ch.
- **Label** (Nunito 800, 0.68–0.85rem, 0.08–0.12em, caps): tags (HOJE, Mais pedido), meal names on price rows, table column heads, menu-group and footer column headings. Always the name of the data group it sits on — never a kicker above a heading.

### Named Rules
**The Three Brush Strokes Rule.** The brush word appears in at most three moments per page (in the build: hero "família toda", "Infantil", final CTA "mesa"). It is always one word or short phrase inside a slab line, never a whole heading and never body text.

**The Letra Sombreada Rule.** Slab caps carry a hard painted shade offset down-right by 0.045–0.055em. The shade colour follows the ground: `laranja` for vinho letters on cal (headline, hero, CTA, the legal h1), `noite` for creme letters inside vinho objects (price integers, dish names). The brush word is the exception on purpose: it is a single-loaded brush, tinta única, and takes no shade. The shade is a lettering technique — it goes on slab letters and price integers only, never on boxes.

**The Painted Price Rule.** A price is always three pieces: small ambar R$, big slab integer, raised underlined cents. Use a `data` element with a numeric value so scripts read the price from the board itself.

## Layout

Mobile-first from 390px. Content sits in a centered container of `min(100% - 32px, 1200px)` (16px gutter; 12px below 340px). Sections breathe with fluid vertical padding (56px at phone width to 112px). The final CTA gets more (64–128px). 390px is the design target, not the floor: two `max-width` steps carry the page down to 320px with no horizontal overflow — measured at 320, 360, 390 and 414px device widths, `scrollWidth` equals `clientWidth` exactly and nothing breaks its bounds. The price board comes out 296 / 328 / 358 / 382px wide across those four.

Order of reading is the story: status strip, sticky header, hero, features, price board, menu, gallery, Google score, hours and route, final CTA, footer. Below 960px a fixed bottom dock (Reservar 1.35fr, plus two equal actions) stays on screen. The footer pads for it and the consent card sits above it.

Breakpoints are mobile-first `min-width` except for the two narrow steps, which are the only `max-width` queries in the file.

Narrow steps (`max-width`): **479** — the boards tighten their own margins: price card 26px 38px → 24px 20px, infantil 28px 38px 18px → 26px 20px 16px, placa/board 26px 24px → 26px 16px, price-row gutters 12px/14px → 8px/10px, hours cells 12px 6px → 12px 4px (first child 8px → 4px) and the hours figures 0.98rem → 0.88rem. **339** — the page gutter drops 16px → 12px and `.hours td` gains `white-space: normal`, the last line of defence: below that width the opening hours wrap instead of pushing the board.

Widening steps (`min-width`): 600 (hero photo to 4:3), 640 (features to 2 columns, stacked image over text), 720 (dishes to 3 columns; menu board to 2 columns), 760 (footer to 4 columns), 860 (price board widens arabesques and padding; infantil + CTA side by side; gallery to 3 columns with a 2×2 lead tile), 900 (Google board to 2 columns), 960 (desktop nav replaces menu and dock; hero to 1.15fr / 0.85fr with a 4:5 photo rotated 1.2°; hours and map side by side), 1100 (features to 4 columns; price cards to 3 columns only once the big numerals fit).

On mobile, features read as a compact row (image 0.8fr beside text 1.2fr). Grids use `minmax(0, 1fr)` tracks so the large numerals never overflow.

### Named Rules
**The Padding Yields Rule.** When a board will not fit, the padding gives way — never the painted numeral. The price integer holds the same `clamp(2.6rem, 1.4rem + 1.9vw, 3.3rem)` at every width; both narrow steps are made entirely of padding, cell spacing, the gutter and one 0.88rem drop on the hours figures, with no change to the display ramp. This is deliberate: the price is the most-wanted content on the page, and a board that shrinks its own margins still reads as a board, while a shrunken numeral stops reading as a painted sign. The order of yielding is padding, then cell spacing, then the gutter, then wrapping — the type ramp is not in the list.

## Elevation & Depth

Depth is mostly tonal: the wall steps from `parede` to `parede-3`, placas sit a shade lighter than any of them, vinho objects sit darker than all of them, and the filete draws the edge. Shadows are sepia, soft, short and pulled in with a negative spread — the shadow of a board under sun, never a grey smudge on a warm ground and never a coloured halo. Glass appears only on fixed chrome (header at 92% vinho-escuro, dock at 94% noite) and falls back to opaque `vinho-escuro` and `noite` respectively when reduced transparency is requested.

### Shadow Vocabulary
- **Sombra placa** (`--sombra-placa: 0 10px 18px -14px rgba(84, 42, 24, 0.45)`): placas and the infantil board.
- **Sombra placa 2** (`--sombra-placa-2: 0 8px 14px -12px rgba(84, 42, 24, 0.38)`): the lighter lift — feature cards and the hero HOJE chip.
- **Object hang** (`0 12px 20px -14px rgba(84, 42, 24, 0.55)` price cards; `0 10px 18px -13px rgba(84, 42, 24, 0.6)` dish cards; `0 14px 22px -16px rgba(84, 42, 24, 0.6)` hero photo mat): vinho objects hang a little deeper than placas.
- **Button lift** (`0 6px 12px -9px rgba(84, 42, 24, 0.5), inset 0 -2px 0 rgba(154, 64, 12, 0.32)`): primary button only; the inset gives a painted lower lip in laranja-tinta.
- **Chrome filete** (`inset 0 -1.5px 0 var(--laranja)`): the header’s own filete, carried as an inset so the rail closes without changing the header’s height.
- **Header scrolled** (`inset 0 -1.5px 0 var(--laranja), 0 14px 26px -18px rgba(42, 4, 14, 0.8)`): the filete stays and a deep wine shadow is added once the status strip leaves the viewport.
- **Menu drop** (`0 14px 18px -14px rgba(42, 4, 14, 0.7)`): the mobile menu board hanging below the header rail.
- **Inner filete** (`inset 0 0 0 1px rgba(253, 186, 107, 0.38)`, inset 5–6px): the amber hairline inside framed vinho objects.

### Named Rules
**The Hanging Board Rule.** Box shadows are sepia `rgba(84, 42, 24, …)`, soft, and drop straight down with a negative spread. Hard offset box shadows are not part of this world; the only hard offset is the letra sombreada on slab letters.

## Shapes

Every board has rounded corners: buttons 14px, the map well 14px, gallery tiles 16px, the HOJE chip 16px, the consent card 18px, cards 20px, placas 22px, the framed hero photo 24px (inner image 18px). Tags are 8px; HOJE on the price card, chips and service pills are full pills. The "Mais pedido" seal and status dots are true circles.

The **filete** is the signature line: a 1.5px solid border in `--filete-cor` (2px on today's price card), with a 1px amber hairline 5–6px inside the price cards and the hero photo mat. Corner arabesques (vinhetas), drawn as scroll-and-dot SVGs at 30px (38px from 860px), appear on the price cards (ambar) and the infantil board (laranja-tinta) only.

Dividers are painted rules: 1px dashed lines between list rows, price columns and menu links, never solid grey hairlines.

## Components

### Buttons
Tactile and painted: heavy Nunito 800 on a rounded block that presses in.
- **Shape:** gently rounded block (14px), 1.5px border, min-height 48px (44px small, 54px large).
- **Primary:** laranja fill, noite text, laranja-tinta border, button lift. Hover (fine pointers only) brightens to #FF9B45.
- **Ghost (on cal):** vinho text, 45% vinho border, 5% vinho fill; hover firms the border to full vinho and the wash to 10%.
- **Outline:** transparent with a `currentColor` border; inside placas and the consent card it resolves to vinho, with an 8% vinho wash on hover.
- **Press:** `scale(0.97)` over 140ms ease-out; removed under reduced motion.
- **Focus:** 3px vinho outline at 3px offset by default (`--focus: var(--vinho)`); vinho objects redeclare `--focus` to ambar.

### Chips
- **Menu chips (in a placa):** creme-2 pill, 1.5px 30% vinho border, Nunito 700. Static lists, not filters.
- **Service pills:** creme-2 pill with a 6px vinho dot.

### Cards / Containers
- **Placa:** creme board, laranja-tinta filete, noite text, vinho titles, sombra-placa; used for the menu list, Google score, hours, map and consent. 22px radius, 26px 24px padding (26px 16px below 480px).
- **Price card:** vinho object with a laranja filete plus the inner amber hairline, ambar arabesques at four corners, day name in ambar slab, two meal columns split by a dashed amber rule. Padding 26px 38px, opening to 30px 46px from 860px and closing to 24px 20px below 480px. Today's card thickens the filete to 2px, warms the ground to `#97143A`, and carries a floating orange HOJE pill on its top edge.
- **Feature card:** cream placa with a laranja-tinta filete, a 13px-rounded photo, vinho slab title and tinta-2 copy. It is a board, not a wine card.
- **Dish card:** vinho-to-vinho-escuro gradient object (160deg), laranja filete, slab name in creme with a noite letra sombreada, an ambar bull silhouette at 13% bleeding off the bottom-right corner.
- **Infantil board:** cream placa with laranja-tinta filete and laranja-tinta arabesques, brush word in laranja-tinta. Padding 28px 38px 18px, 30px 46px 20px from 860px, 26px 20px 16px below 480px.
- **Hero photo mat:** vinho-escuro passe-partout with a laranja filete and inner amber hairline, rotated 1.2° on desktop.

### Navigation
- **Status strip:** noite band, 36px, creme text, one line in a fixed window; state changes slide a whole new line up (420ms). Verde-aberto dot (with a 22% halo) and verde-aberto word for open, hollow ambar ring and ambar word for closed, creme-suave dot when the state is unknown. It carries no bottom border — the header below it carries the rail’s filete.
- **Header:** sticky wine glass (`rgba(94, 11, 32, 0.92)`, blur 14px, saturate 140%) closed by the laranja filete as an inset; ink is creme, focus ring ambar. Desktop: Nunito 800 links with a 10% creme hover wash. Mobile: 46px creme toggle that cross-fades menu/close icons, opening a `vinho-escuro` board under the header — laranja filete along its bottom edge, creme slab caps links, dashed ambar dividers at 22%.
- **Dock (below 960px):** wine glass bar (`rgba(58, 6, 20, 0.94)`, blur 16px, saturate 140%) with the laranja filete as its top border and an ambar focus ring; three 52px buttons in 8% creme with a 16% creme inset ring and creme ink. The main one fills laranja with no ring; while the hero CTA is on screen it drops back to the 8% creme fill with a 1.5px laranja ring.
- **Footer:** the closing rail — a `vinho-escuro → noite` gradient under a laranja filete top border, creme-suave copy, creme links, ambar column titles, a 16% ambar inner rule above the base line, and the cream wordmark. It closes the page on the same note the status strip opens it.

### Hoje Chip (signature)
The hero's live price: a vinho chip with a laranja filete, an orange HOJE tag, the meal-and-day label in creme-suave, the price in slab creme, and an ambar arrow that nudges 3px on hover. It is filled by script from the price cards, never typed twice, and reserves its space so it fades in without shifting the buttons.

### Selo "Mais pedido" (signature)
A round ambar stamp (80px, 92px from 720px), rotated -12°, with a double ring made of inset shadows (ambar, then vinho-escuro), noite label text in two lines.

### Caiação (signature)
The hero and the final CTA are not flat cream. Each lays low-opacity radial gradients over a linear wall gradient: in the hero, a 60% white bloom at 12%/6% and a 5.5% vinho warmth at 88%/82% over `#FFFCF5 → parede → parede-2`; in the CTA, a 7% vinho pool rising from the bottom centre over `parede → parede-3`, so the limewash deepens just before the footer rail. This is the mottle of limewash and it is the only texture the wall gets.

### Motion
All motion uses `cubic-bezier(0.23, 1, 0.32, 1)`. The single authored moment is the hero brush word painting in left to right (clip-path, 900ms, 280ms delay). Scroll reveals start from visible content (only applied when JS adds `js-motion`): headings and board groups fade-rise 18px with a 60ms stagger per sibling (max 6); gallery tiles clip up from the bottom while the image settles from 1.08 scale. Under reduced motion there are no reveals and no transforms; only opacity changes remain.

## Brand Assets

- **logo-placeholder.svg** (419×81): the one wordmark, cream-on-wine — a bull drawn in ambar `#FDBA6B` and laranja `#F28A2E` over a `vinho-escuro #5E0B20` shape, with the lettering in creme `#FFF9EE`. With the chrome in wine it serves every placement: the header on both pages and the footer band. It is a provisional placeholder awaiting the real mark.

## Do's and Don'ts

### Do:
- **Do** keep every section ground on the cal scale (parede, parede-2, parede-3) and put dense reading on a `creme` placa with a 1.5px laranja-tinta filete.
- **Do** set `--filete-cor` on the surface: laranja-tinta over cal, laranja on every wine surface — object or chrome — so the line always clears 3:1 against its ground.
- **Do** put noite text on every orange fill (6.95:1); use laranja-tinta for accent text on cal and ambar for accent text on any wine surface.
- **Do** light only one orange action at a time and hand it off as the hero CTA scrolls away.
- **Do** shade slab caps in laranja when the letters are vinho on cal, and in noite when they are creme on vinho.
- **Do** paint prices as small ambar R$, big slab integer, raised cents underlined in ambar.
- **Do** drive every "now" marker (status strip, hero HOJE chip, price card, hours row) from the same price and hours data in the HTML.
- **Do** keep the brush word to one word inside a slab line, unshaded, at most three per page.
- **Do** let padding, cell spacing and the gutter yield on narrow screens — and check a new board at 320px, where `scrollWidth` must still equal `clientWidth`.
- **Do** keep box shadows on cal sepia `rgba(84, 42, 24, …)` and shadows cast by the rails deep wine `rgba(42, 4, 14, …)`, short and negative-spread, and use dashed rules between rows with 44px minimum touch targets.

### Don't:
- **Don't** ground a section in vinho, and don't ground the chrome in cal. The wall is limewash between two wine rails; those are the only wine grounds the page has.
- **Don't** set `laranja` as text anywhere: 2.04:1 on cal, 3.82:1 on vinho.
- **Don't** use orange as a decorative fill. Its fills mean "act" or "today"; its line is the filete.
- **Don't** hard-code a filete colour at the point of use, and don't carry laranja-tinta onto a wine surface or laranja onto cal as a border.
- **Don't** give a placa a cream darker than `--creme`; if it is not lighter than the wall it is not a board.
- **Don't** put grey or black shadows on a warm ground, and don't put hard offset shadows on boxes — the only hard offset is the shade on slab letters. The header's filete is an inset, not a shadow for depth; don't convert it to a border and change the rail's height.
- **Don't** shade the brush word; it is tinta única.
- **Don't** add arabesque corners beyond the price cards and the infantil board.
- **Don't** set a whole heading or a paragraph in Kaushan Script, and don't put a small-caps kicker above a heading — labels name data groups only.
- **Don't** shrink the painted price integer to make something fit; it holds its clamp at every width, and the padding is what gives way.
- **Don't** hide content behind animation; reveals start from visible-by-default and fall back to opacity only.
