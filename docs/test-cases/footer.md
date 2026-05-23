# Footer — Happy Path Test Cases

## Test Case 1: Footer renders with all expected elements
- [ ] Footer section is present at the bottom of the page
- [ ] "aiteam" logo/text is displayed
- [ ] Telegram link is present
- [ ] GitHub link is present
- [ ] Copyright line is displayed

## Test Case 2: All external links open in new tab
- [ ] Telegram link has `target="_blank"` and `rel="noopener noreferrer"`
- [ ] GitHub link has `target="_blank"` and `rel="noopener noreferrer"`
- [ ] Telegram link points to `https://t.me/aiteam_bot`
- [ ] GitHub link points to the aiteam GitHub profile

## Test Case 3: Copyright shows dynamic current year
- [ ] Copyright text includes the current year (dynamically generated, e.g. "2025")
- [ ] Copyright text follows format: © [year] aiteam

## Test Case 4: Visual style — clean minimal dark
- [ ] Footer background is dark (matching the dark theme)
- [ ] Links are rendered in muted gray
- [ ] Links turn white or blue on hover

## Test Case 5: Responsive — stacks on mobile
- [ ] On desktop, footer content is laid out in a row
- [ ] On mobile (≤ 768px), footer content stacks vertically
- [ ] No horizontal scroll at any viewport width ≥ 320px
