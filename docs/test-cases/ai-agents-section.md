# Test Cases — AI Agents Section

## Test Environment
- **Language:** Tiếng Việt
- **Viewport:** Desktop (≥1024px) and Mobile (≤640px)
- **Browser:** Chrome / Firefox / Safari
- **Theme:** Dark mode

---

## Happy Path Test Cases

### TC-AG-01: Section renders with correct heading
- [ ] Section heading "Gặp gỡ AI team" (or implicit equivalent) is visible
- [ ] Heading uses theme-appropriate font and size

### TC-AG-02: Four agent cards are displayed
- [ ] PM card is present
- [ ] TL card is present
- [ ] Dev card is present
- [ ] TestLead card is present

### TC-AG-03: Each card shows correct role title
- [ ] PM card shows "PM" or "Quản lý dự án"
- [ ] TL card shows "TL" or "Kiến trúc sư"
- [ ] Dev card shows "Dev" or "Lập trình viên"
- [ ] TestLead card shows "TestLead" or "Kiểm thử"

### TC-AG-04: Each card displays role description
- [ ] PM description: "Lên kế hoạch, phân tích yêu cầu, phối hợp"
- [ ] TL description: "Thiết kế hệ thống, review code, merge PR"
- [ ] Dev description: "Code từng function theo plan"
- [ ] TestLead description: "Viết test case, đảm bảo chất lượng"

### TC-AG-05: Each card lists responsibilities as bullet points
- [ ] PM card has bullet-point responsibilities
- [ ] TL card has bullet-point responsibilities
- [ ] Dev card has bullet-point responsibilities
- [ ] TestLead card has bullet-point responsibilities

### TC-AG-06: Each card has an outline-style SVG icon
- [ ] PM card has an outline SVG icon
- [ ] TL card has an outline SVG icon
- [ ] Dev card has an outline SVG icon
- [ ] TestLead card has an outline SVG icon

### TC-AG-07: Visual styling per SRS
- [ ] Each card has dark background
- [ ] Each card has light border (#1e293b / #334155)
- [ ] Blue accent (#3B82F6) appears on role title or icon
- [ ] All text is readable at ≥16px font size

### TC-AG-08: Desktop layout — 2×2 grid
- [ ] Cards are arranged in a 2-column, 2-row grid
- [ ] No horizontal scroll at viewport ≥ 1024px

### TC-AG-09: Mobile layout — single column
- [ ] Cards stack vertically in a single column
- [ ] No horizontal scroll at viewport ≤ 640px
- [ ] Cards remain fully visible (no overlapping, no cutoff text)

### TC-AG-10: Section is reachable via nav
- [ ] Nav link scrolls smoothly to the AI Agents section
- [ ] Section has an id matching the nav href
