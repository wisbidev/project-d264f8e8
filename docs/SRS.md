# Software Requirements Specification — aiteam Landing Page

## 1. Overview

A single-page landing site for **aiteam** — an AI-powered platform that automatically builds software via Telegram. The page introduces the concept, explains the pipeline, describes the four AI agents, lists key features, showcases the tech stack, and drives users to start via Telegram.

**Language:** Tiếng Việt (Vietnamese)  
**Theme:** Dark mode with blue (#3B82F6) accents  
**Tech stack:** Next.js (App Router), Tailwind CSS, Framer Motion  
**Responsive:** Mobile-first, all breakpoints supported  
**Deployment:** Static export via GitHub Pages / Vercel

---

## 2. Functional Requirements

### FR1 — Hero Section

| Item | Detail |
|---|---|
| **Title** | "AI Team. Không cần thuê dev." |
| **Subheadline** | One sentence describing the value proposition |
| **CTAs** | Two buttons: "Bắt đầu ngay" (primary, blue gradient) and "Xem cách hoạt động" (outline) |
| **Background** | Dark, with subtle blue gradient (#3B82F6) overlay |
| **Acceptance** | Responsive — stacks vertically on mobile, full-width on desktop. CTA buttons tappable (min 44×44 px touch target). |

### FR2 — Pipeline / How It Works

| Item | Detail |
|---|---|
| **Title** | "Từ ý tưởng đến deploy hoàn toàn tự động" |
| **Content** | 5-step flow displayed as horizontal timeline on desktop, vertical step cards on mobile: (1) Mô tả dự án → (2) PM phân tích → (3) User duyệt → (4) AI team build → (5) Deploy |
| **Style** | Dark cards with light border (#1e293b / #334155), blue glow (#3B82F6) on hover |
| **Acceptance** | Steps are visually connected (arrows/lines). Each step has icon + label + short description. Hover state works on desktop. |

### FR3 — AI Agents Section

| Item | Detail |
|---|---|
| **Title** | Implicit from context (e.g. "Gặp gỡ AI team") |
| **Content** | 4 agent cards: **PM**, **TL**, **Dev**, **TestLead** |
| **PM** | "Quản lý dự án — Lên kế hoạch, phân tích yêu cầu, phối hợp" |
| **TL** | "Kiến trúc sư — Thiết kế hệ thống, review code, merge PR" |
| **Dev** | "Lập trình viên — Code từng function theo plan" |
| **TestLead** | "Kiểm thử — Viết test case, đảm bảo chất lượng" |
| **Style** | Each card: dark bg, light border, blue accent (icon/role title). Role description + bullet-point responsibilities. Outline-style SVG icons. |
| **Acceptance** | 2×2 grid on desktop, single column on mobile. All text readable at 16px. |

### FR4 — Features Section

| Item | Detail |
|---|---|
| **Title** | "Tự động hóa toàn bộ quy trình phát triển phần mềm" |
| **Content** | 6 feature items with icon + label + short description: |
| | 1. **Telegram giao tiếp** — Toàn bộ quy trình qua Telegram, không cần app mới |
| | 2. **Không cần quản lý dev** — AI tự phân tích, code, test, deploy |
| | 3. **Auto GitHub repo** — Tự động tạo repo, commit, pull request |
| | 4. **Estimate trước build** — Báo giá và thời gian trước khi build |
| | 5. **Auto deploy** — Deploy sau mỗi function hoàn thành |
| | 6. **Realtime tracking** — Xem tiến độ từng agent qua Telegram |
| **Style** | 3×2 grid on desktop, 1 column on mobile. Each item: icon + title (bold) + description. |
| **Acceptance** | Icons are consistent style (outline). Grid reflows cleanly at breakpoints. |

### FR5 — Tech Stack Section

| Item | Detail |
|---|---|
| **Title** | "Stack hiện đại, sẵn sàng production" |
| **Content** | 6 tech items displayed as chips/pills: **Next.js**, **Go**, **PostgreSQL**, **Tailwind CSS**, **GitHub Actions**, **Docker** |
| **Style** | Dark pill with border, icon + label. Arrange in a flex-wrap row. |
| **Acceptance** | Each pill is clickable (links to official tech homepage). Wraps naturally on smaller screens. |

### FR6 — Final CTA Section

| Item | Detail |
|---|---|
| **Headline** | "Bắt đầu build sản phẩm với AI team" |
| **Subheadline** | Short encouraging line |
| **CTA** | "Chat qua Telegram" — links to `https://t.me/aiteam_bot` |
| **Background** | Dark, with blue accent glow effect |
| **Acceptance** | CTA button prominent (primary blue), opens Telegram in new tab. Section is full-viewport-height-ish on desktop. |

### FR7 — Footer

| Item | Detail |
|---|---|
| **Content** | Logo "aiteam", Telegram link, GitHub link, copyright line |
| **Style** | Clean minimal dark. Links in muted gray, hover → white/blue. Responsive: stacked on mobile. |
| **Acceptance** | All links open in new tab. Copyright year is dynamic (current year). |

### FR8 — Global Layout & Navigation

| Item | Detail |
|---|---|
| **Layout** | Root layout (app/layout.tsx) with dark mode body, consistent spacing system (Tailwind theme tokens), Inter font |
| **Navigation** | Sticky top header with logo + nav links: Giới Thiệu, Quy Trình, Đội Ngũ, Tính Năng, Stack, Liên Hệ |
| **Smooth scroll** | Clicking a nav link scrolls smoothly to the corresponding section |
| **Animations** | Subtle Framer Motion fade-up/stagger animations on scroll — sections animate into view once |
| **Mobile nav** | Hamburger menu on mobile, slide-in drawer or full-screen overlay |
| **Acceptance** | Header is always visible. All section IDs match nav hrefs. Animations do not block content visibility (graceful fallback). No layout shift on load. |

---

## 3. Design

Design: see attached spec (wireframes and visual mockups will be provided separately).

---

## 4. Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 14+ (App Router) |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **Icons** | Lucide React or Heroicons (outline style) |
| **Deployment** | Vercel or GitHub Pages (static export) |
| **Font** | Inter (via next/font) |

---

## 5. Constraints & Assumptions

- No backend required — fully static landing page
- All content is in Vietnamese
- Dark mode only (no light mode toggle)
- No authentication, no user input forms
- External links: Telegram, GitHub — open in new tab (`target="_blank" rel="noopener noreferrer"`)
- All images/assets are either inline SVG or publicly hosted

---

## 6. Acceptance Criteria (Global)

- [ ] Lighthouse score ≥ 90 on Performance, Accessibility, Best Practices
- [ ] No horizontal scroll at any viewport width ≥ 320px
- [ ] All interactive elements have hover/focus states
- [ ] Semantic HTML (landmarks: header, main, section, footer)
- [ ] Framer Motion animations respect `prefers-reduced-motion`
