# Test Cases: Global Layout & Navigation

## Root Layout
- [ ] Dark mode (`bg-gray-950` or equivalent) applied to body/root element
- [ ] Inter font loaded and applied globally via `next/font`
- [ ] Consistent spacing system (Tailwind theme tokens: `container`, `padding`, `gap`)
- [ ] No horizontal scroll at any viewport width ≥ 320px
- [ ] Semantic HTML landmarks: `<header>`, `<main>`, `<footer>` present on page

## Sticky Header
- [ ] Header is sticky / fixed at top of viewport at all scroll positions
- [ ] Logo "aiteam" visible on the left side of the header
- [ ] Nav links present: Giới Thiệu, Quy Trình, Đội Ngũ, Tính Năng, Stack, Liên Hệ
- [ ] Nav links are horizontally laid out on desktop
- [ ] Header is visible across all sections (hero, pipeline, agents, features, tech stack, cta, footer)

## Smooth Scroll Navigation
- [ ] Clicking "Giới Thiệu" scrolls smoothly to the hero section
- [ ] Clicking "Quy Trình" scrolls smoothly to the pipeline section
- [ ] Clicking "Đội Ngũ" scrolls smoothly to the AI agents section
- [ ] Clicking "Tính Năng" scrolls smoothly to the features section
- [ ] Clicking "Stack" scrolls smoothly to the tech stack section
- [ ] Clicking "Liên Hệ" scrolls smoothly to the CTA/footer section
- [ ] Each target section has a matching `id` attribute that corresponds to the nav href

## Framer Motion Animations
- [ ] Sections animate into view (fade-up effect) on scroll — once per section
- [ ] Animations do not block content visibility (content is readable before/during animation)
- [ ] Animations respect `prefers-reduced-motion` (no animation when user prefers reduced motion)

## Mobile Navigation
- [ ] Hamburger menu icon appears on mobile / small viewport sizes
- [ ] Tapping hamburger opens a slide-in drawer or full-screen overlay with nav links
- [ ] Nav links in the mobile menu are tappable (min 44×44px touch target)
- [ ] Tapping a nav link in the mobile menu closes the menu and scrolls to the section
- [ ] Overlay/drawer has a close mechanism (close button or tap outside)

## Layout Shift
- [ ] No visible layout shift on initial page load (no FOUT/CLS from fonts or animations)
