# Design QA — Joshua Oroge personal brand site

## Comparison target

- Source visual truth:
  - `C:\Users\Lenovo\AppData\Local\Temp\codex-clipboard-d705758f-610e-42de-9116-99782451dadd.png` — 2048 × 1536 px, cinematic biography reference.
  - `C:\Users\Lenovo\AppData\Local\Temp\codex-clipboard-091b9ffa-602b-4f78-8a28-92a7320a893b.png` — 2048 × 1536 px, warm conversion-focused personal-brand reference.
  - `C:\Users\Lenovo\AppData\Local\Temp\codex-clipboard-ef6d42ab-38a4-40cb-9028-6bb6e438dd06.png` — 736 × 1307 px, editorial portfolio reference.
- Implementation: `http://localhost:4173/`
- Focused implementation state: `http://localhost:4173/#booking`
- Desktop capture: 1440 × 1000 CSS px, DPR 1.
- Mobile capture: 390 × 844 CSS px, DPR 1.
- The source material is an inspiration set rather than a pixel-exact mock. Fidelity was judged against the agreed synthesis: warm editorial presentation, large display typography, strong portraiture, cinematic dark sections, structured biography, and an obvious booking path.

## Full-view comparison evidence

The three source boards and the browser-rendered implementation were displayed together in a two-panel comparison at 1440 × 1000. The implementation carries over the intended hierarchy and art direction without reproducing a source layout: warm peach hero from the coaching reference, oversized editorial name treatment from the portfolio reference, restrained dark biography/venture sections from the cinematic reference, and a conversion-focused two-option booking section.

The desktop hero was also inspected directly at 1440 × 1000. Joshua's name, positioning statement, two calls to action, and portrait all remain above the fold with a clear left/right hierarchy.

## Focused-region comparison evidence

- Booking section at 1440 × 1000: the free 15-minute call is visually primary, the paid strategy consultation is secondary, durations/status are explicit, and both actions are reachable.
- Booking modal at desktop and mobile: centered, legible, focus enters at the close control, Escape closes it, and background scroll is locked.
- Mobile hero at 390 × 844: display type, summary, primary action, story link, and portrait stack cleanly with no horizontal overflow.
- Mobile navigation at 390 × 844: the full-screen editorial menu exposes four numbered destinations, a brand statement, and a free-call CTA; it closes after navigation and restores page scrolling.
- Life facets gallery at 1440 × 1000: the centre Entrepreneur panel opens by default, then Scholar, Educator, Speaker, or Faith expands on selection while the previous panel contracts. The composition was compared beside both supplied accordion references.
- Life facets gallery at 390 × 844: the same interaction becomes a vertical accordion with 104 px collapsed panels and a 440 px expanded panel. Labels, title, and supporting copy remain visible with no horizontal overflow.

## Required fidelity surfaces

- Fonts and typography: passed. The condensed system display stack provides the bold editorial voice; Georgia provides a warmer human counterpoint; labels and small UI copy retain clear weight and tracking.
- Spacing and layout rhythm: passed. Desktop uses generous section spacing and strong two-column composition; mobile collapses into a consistent single-column rhythm. Cards, rules, and headings remain aligned at tested breakpoints.
- Colors and visual tokens: passed. Warm ivory, apricot, deep ink, and burnt orange are consistently tokenized and keep sufficient foreground/background contrast.
- Image quality and asset fidelity: passed. Only Joshua's supplied professional photographs are used. Crops preserve facial clarity and do not stretch or substitute the images.
- Copy and content: passed. Content is grounded in the supplied biography. Missing Calendly, company, contact, social, duration, and fee details are explicitly represented as placeholders rather than invented facts.

## Findings

- No remaining P0, P1, or P2 visual or interaction issues.
- P3: final external URLs, consultation duration/fee, email, and social profiles still need owner-provided values. These are intentional content placeholders and do not block the layout or interaction model.

## Comparison history

1. Initial mobile capture found a P2 horizontal overflow: the automatic minimum width of the hero grid item allowed the oversized name and summary to extend past the 390 px viewport.
2. Fix: added `min-width: 0` to `.hero-copy` and reduced the mobile display-size clamp.
3. Post-fix evidence: DOM audit at 390 × 844 returned no overflowing elements; the rendered name, copy, actions, and portrait fit within the viewport.
4. Initial modal review found a P2 accessibility/state issue: opening the dialog did not explicitly move focus or lock background scroll.
5. Fix: added autofocus to the close control and body scroll locking tied to dialog state.
6. Post-fix evidence: the dialog receives focus at its close control, `body.style.overflow` reports `hidden`, and the modal closes normally.
7. Mobile navigation refinement: replaced the compact dropdown with a full-screen ink-and-orange editorial panel. Verified its reveal animation, Escape/close behavior, destination scrolling, body scroll lock, and direct booking CTA. A timing issue between releasing scroll lock and anchor navigation was found and fixed with a delayed `scrollIntoView`; the booking section now settles 96 px below the viewport top.
8. Initial desktop gallery review found a P2 title-wrap issue in narrow inactive panels. Fix: reduced inactive title sizing, prevented line wrapping, and gave the active panel more flex space.
9. Initial mobile gallery review found a P2 clipping issue in the expanded Entrepreneur panel. Fix: increased the active mobile height, tightened the title clamp, and bounded the supporting-copy reveal.
10. Post-fix evidence: default Entrepreneur state plus Scholar, Speaker, and Faith selections were inspected at desktop and mobile sizes. Every state transitions cleanly, inactive labels remain readable, and the browser console stays clear.

## Functional verification

- Primary navigation links tested.
- Mobile menu open and destination navigation tested.
- Free-call booking action tested.
- Booking placeholder modal open/close tested on desktop and mobile.
- Background scroll lock tested.
- Responsive desktop and mobile layouts tested.
- Expanding life-facets gallery default state and click states tested.
- Two-row photo marquee tested at desktop and 390 × 844 mobile sizes: rows travel in opposite directions, loop continuously, and both pause on hover. Reduced-motion preferences disable the continuous animation.
- Hero entrance sequence tested at desktop and 390 × 844 mobile sizes: ink curtain, orange sweep, staggered title/copy reveal, and portrait uncover settle cleanly without layout shift. Reduced-motion users receive the completed static hero immediately.
- Speaking enquiry and footer email actions resolve to `joshuaoroge13@gmail.com`; the speaking action includes a pre-filled enquiry subject.
- Production build passed.
- ESLint passed.
- Browser console checked: no warnings or errors.

## Follow-up polish

- Replace placeholder links and consultation details when Joshua provides them.
- Consider supplying a custom font file and favicon in a later brand-polish pass.

final result: passed
