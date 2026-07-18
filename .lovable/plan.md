## Goal

Build the foundational single-page portfolio site per the PRD's design system and section order. All copy/skills/projects/certs/languages remain placeholders — you'll supply real content next. Project cards are intentionally blank (structure only), and dedicated project pages are not built yet.

## Design system (in `src/styles.css`)

Replace default tokens with PRD values:
- Backgrounds: primary `#F1EFEB`, secondary `#FAF9F7`, cards `#FFFFFF`
- Text: primary `#1F1F1F`, secondary `#5F6368`
- Border: `#E3E0DA`, Accent: `#4B6C7B`
- Radius: 12px; soft shadow `0 6px 20px rgba(0,0,0,0.05)`
- Font: Inter (loaded via `<link>` in `__root.tsx` head)
- 8px spacing scale, max width 1200px, reading width 850px

Update `__root.tsx` head with proper title/description/OG for "Muhammad Monis — Data Analyst Portfolio" and Inter font `<link>`.

## Page structure

Single page at `/` (`src/routes/index.tsx`) with anchor sections, plus a sticky nav with smooth scroll and active-section highlighting.

Components in `src/components/portfolio/`:
1. `Navbar.tsx` — sticky; left: small avatar placeholder + "Muhammad Monis"; center: About / Skills / Projects / Certifications / Languages / Contact; mobile hamburger (shadcn Sheet).
2. `Hero.tsx` — two-column. Left: "Hi there, My name is Monis" greeting, name, title "Data Analyst | Business Intelligence Analyst", social icons row (LinkedIn, GitHub, Kaggle, Email — Lucide), primary "View Resume" button (opens `#` placeholder in new tab). Right: portrait placeholder (rounded rectangle, soft shadow). Stacks on mobile (text first).
3. `About.tsx` — centered reading-width paragraph with lorem placeholder (~120 words).
4. `Skills.tsx` — three grouped cards: Analytics / Business / Technical, each a bullet list of placeholder tags. No bars/percentages.
5. `Projects.tsx` — grid of 6 blank project cards. Each card: Industry label, Title, short description, tools row, "View Case Study" secondary button. All text placeholder; button is inert for now.
6. `Certifications.tsx` — uniform card grid with placeholder cert name, org, year, badge square.
7. `Languages.tsx` — card row with placeholders (e.g., "Language — Level").
8. `ThankYou.tsx` — short closing message placeholder.
9. `Contact.tsx` — form (Name, Email, Message) using shadcn Input/Textarea/Button + react-hook-form + zod for validation. Submit currently shows a toast (no backend).
10. `Footer.tsx` — LinkedIn / GitHub / Kaggle / Email icons + "© 2026 Muhammad Monis".

Use `useActiveSection` hook with IntersectionObserver to highlight the current nav link.

## Interactions & motion

- Smooth scroll via CSS `scroll-behavior: smooth` and offset for sticky nav.
- Card hover: 2px lift + subtle shadow, 200–300ms.
- Fade-in on section enter (light, no parallax).
- All icons from `lucide-react` only.

## Out of scope this turn

- Real content (about, skills, projects, certs, languages, resume link, avatar/portrait images).
- Individual project detail routes.
- Backend for contact form.

## Technical notes

- Keep everything in the existing TanStack Start structure; only `src/routes/index.tsx` is the page.
- `__root.tsx` head updated with Inter `<link>` and real title/description/OG text ("Muhammad Monis — Data Analyst & BI Portfolio").
- Set body font-family to Inter via `@theme` token + base layer.
- Portrait uses a neutral placeholder `<div>` (rounded rectangle) so no image asset is needed yet.
