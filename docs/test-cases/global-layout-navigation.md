# Test Cases — Global Layout & Navigation (FR8)

## Happy Path Test Cases

- [ ] **TC1 — Root layout renders with dark mode**: Body has `dark` class, background is dark, text is legible.
- [ ] **TC2 — Header is sticky/fixed**: Header has `fixed` positioning at the top and is always visible when scrolling.
- [ ] **TC3 — Logo is displayed**: Logo text "aiteam" is visible in the header.
- [ ] **TC4 — Navigation links are present**: All 6 nav links render: Giới Thiệu, Quy Trình, Đội Ngũ, Tính Năng, Stack, Liên Hệ.
- [ ] **TC5 — Nav links scroll smoothly to sections**: Clicking each nav link scrolls smoothly to the corresponding section ID (`#hero`, `#pipeline`, `#agents`, `#features`, `#stack`, `#contact`).
- [ ] **TC6 — Section IDs match nav hrefs**: Each section on the page has an `id` matching its corresponding nav link target.
- [ ] **TC7 — Mobile hamburger menu visible**: On viewports < 1024px, a hamburger/menu button is shown instead of inline nav links.
- [ ] **TC8 — Mobile menu opens slide-in drawer**: Tapping the hamburger button opens a slide-in panel from the right with all nav items.
- [ ] **TC9 — Mobile menu closes on link click**: Tapping a nav link in the mobile menu closes the drawer.
- [ ] **TC10 — Framer Motion animations on scroll**: Sections animate in (fade-up) when scrolled into view. Animations use `whileInView` with `viewport={{ once: true }}`.
- [ ] **TC11 — No layout shift on load**: Page loads without visible layout shift (CLS ~ 0). Content is stable.
- [ ] **TC12 — Header changes style on scroll**: After scrolling past 20px, header gains background blur/backdrop and a bottom border.
- [ ] **TC13 — Header scroll offset is correct**: Smooth scroll to sections accounts for ~80px header offset so section titles are not hidden behind the sticky header.
- [ ] **TC14 — Inter font is applied globally**: The body uses the Inter font via `next/font` with CSS variable.
