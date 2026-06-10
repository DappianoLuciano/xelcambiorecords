# Component Inventory - Special Production Agency

## Navigation Components

### Header / Main Navigation
**Structure:**
- Logo/Brand identifier: "SPA"
- Primary navigation links
- Secondary navigation items
- Contact email link

**Navigation Items:**
1. **Primary Links:**
   - "WORK" → `/work`
   - "SPECIAL PROJECTS" → `/special-projects`

2. **Secondary Links:**
   - "ABOUT" → `/about`
   - Contact: `contact@specialproduction.agency`

**States:**
- Default
- Hover (likely minimal interaction)
- Active page indicator (TBD)

**Responsive Behavior:**
- Mobile navigation (hamburger menu or simplified layout)
- Desktop: likely horizontal layout

**Variants:**
- Desktop header
- Mobile header

---

## Hero Section / Main Content

### Three-Part Logo Display
**Structure:**
- Three separate SVG elements displaying agency name
- Likely arranged vertically or in a grid

**Components:**
1. **SPECIAL** text element (71×20px SVG)
2. **PRODUCTION** text element (111×20px SVG)
3. **AGENCY** text element (71×21px SVG)

**Possible Layouts:**
- Stacked vertically (one per line)
- Grid arrangement
- Centered composition
- Potentially animated entrance

**States:**
- Initial/entrance animation state
- Resting state
- Hover states (per element or collective)

**Interactions:**
- Scroll-triggered animation (TBD)
- Hover effects (TBD)
- Staggered reveals (TBD)

---

## Typography Components

### Brand Logo ("SPA")
**Purpose:** Site identifier / home link
**Style:** Minimal, likely sans-serif
**Placement:** Header area

### Navigation Text
**Style:** Uppercase, clean typography
**Items:** WORK, SPECIAL PROJECTS, ABOUT
**Weight:** Medium to bold (TBD)

### Contact Link
**Type:** Email mailto link
**Style:** Minimal, integrated with navigation
**Content:** `contact@specialproduction.agency`

---

## Layout Architecture

### Overall Structure
```
┌─────────────────────────────────────┐
│  Header                             │
│  ┌─────┐  ┌──────────────────────┐ │
│  │ SPA │  │ WORK | SPECIAL PROJECTS  ABOUT  contact@ │
│  └─────┘  └──────────────────────┘ │
├─────────────────────────────────────┤
│                                     │
│  Main Content Area                  │
│  ┌──────────────────┐              │
│  │    SPECIAL       │              │
│  ├──────────────────┤              │
│  │   PRODUCTION     │              │
│  ├──────────────────┤              │
│  │    AGENCY        │              │
│  └──────────────────┘              │
│                                     │
└─────────────────────────────────────┘
```

---

## Interactive Elements

### Links
**Types:**
- Internal navigation links
- Email contact link

**Hover States:**
- Subtle color transition (TBD)
- Underline effect (TBD)
- Opacity change (TBD)

---

## Animations & Transitions (Suspected)

### SVG Logo Elements
**Potential Animations:**
1. **Staggered Entrance**
   - Each word appears sequentially
   - Fade + slide combination
   - Delay: ~0.1-0.2s between elements

2. **Hover Effects**
   - Individual word interaction
   - Scale or transform on hover
   - Subtle movement

3. **Scroll Animations**
   - Parallax effects
   - Opacity changes
   - Transform transitions

---

## Component Naming Convention (for React)

### Suggested Component Names:
- `<Header />` - Main navigation header
- `<Navigation />` - Nav links component
- `<Logo />` - SPA brand logo
- `<HeroSection />` - Main content area with three SVGs
- `<AnimatedLogo />` - Three-part animated SVG logo
- `<ContactLink />` - Email contact component

---

## Missing Information (Requires Browser Inspection)

1. **Exact font families and sizes**
2. **Precise spacing values (padding/margin)**
3. **Actual animation implementations**
4. **Hover state specifics**
5. **Responsive breakpoints**
6. **Background colors/textures**
7. **Any additional sections below the fold**
8. **Footer content** (if present)
9. **Additional pages structure** (/work, /special-projects, /about)

---

## Next Steps for Complete Component Specs

1. Browser inspection for computed styles
2. Animation behavior observation
3. Scroll interaction documentation
4. Responsive behavior at different breakpoints
5. Additional page analysis
6. Footer and secondary content discovery
