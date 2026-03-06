# Project Card Hover Interactions - TODO

## Task 1: Improve project card hover interactions to make them feel more interactive.

### Completed:
- [x] Update card container className to include `bg-white rounded-xl border border-gray-200`
- [x] Change `shadow-lg` to `hover:shadow-xl` for hover effect
- [x] Add image section with zoom effect for projects with images
- [x] Ensure hover effects work on desktop without breaking mobile
- [x] Buttons use `flex flex-wrap gap-3`
- [x] Grid layout is mobile responsive

---

## Task 2: Add subtle entrance animations to portfolio sections using framer-motion

### Completed:
- [x] Installed framer-motion (already in package.json)
- [x] Hero - Added motion animations with fade in and slide up
- [x] About - Added motion animations with fade in and slide up  
- [x] Skills - Added motion animations with fade in and slide up
- [x] Experience - Added motion animations with fade in and slide up
- [x] Projects - Added motion animations with fade in and slide up
- [x] Certifications - Added motion animations with fade in and slide up
- [x] GitHub Performance - Added motion animations with fade in and slide up
- [x] Contact - Added motion animations with fade in and slide up

### Animation Settings:
- Initial: `{ opacity: 0, y: 40 }`
- whileInView: `{ opacity: 1, y: 0 }`
- Transition duration: 0.5 seconds
- viewport: `{ once: true }`
- Staggered delays for items: `delay: i * 0.1`

---

# Add Framer Motion Entrance Animations - TODO

## Task
Add subtle entrance animations to portfolio sections when they appear in the viewport.

## Plan

### Step 1: Update Hero.jsx
- [ ] Add framer-motion for entrance animation

### Step 2: Update About.jsx
- [ ] Replace AOS with framer-motion

### Step 3: Update Skills.jsx
- [ ] Replace AOS with framer-motion

### Step 4: Update Experiences.jsx
- [ ] Replace AOS with framer-motion

### Step 5: Update Projects.jsx
- [ ] Replace AOS with framer-motion

### Step 6: Update Certifications.jsx
- [ ] Replace AOS with framer-motion

### Step 7: Update GitHubStats.jsx
- [ ] Add framer-motion animations

### Step 8: Update Contact.jsx
- [ ] Replace AOS with framer-motion

### Step 9: Clean up
- [ ] Remove AOS imports if no longer needed

