# 🏗️ Visual Architecture Diagram

## Complete System Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                         MEDIEVAL PORTFOLIO                          │
│                     Next.js 14 + TypeScript                         │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                          ROOT LAYOUT                                │
│                        (src/app/layout.tsx)                         │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │ • HTML Structure                                              │ │
│  │ • Metadata (SEO)                                              │ │
│  │ • Global Styles (Tailwind + Medieval Fonts)                   │ │
│  └───────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                          MAIN PAGE                                  │
│                        (src/app/page.tsx)                           │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │ Orchestrates all components                                   │ │
│  └───────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                    ┌─────────────┴─────────────┐
                    ▼                           ▼
        ┌───────────────────┐       ┌───────────────────┐
        │  BACKGROUND LAYER │       │   UI LAYER        │
        └───────────────────┘       └───────────────────┘
                 │                           │
                 ▼                           ▼
    ┌────────────────────┐      ┌────────────────────────┐
    │ ParticleBackground │      │     Navigation         │
    │   (Three.js)       │      │   (Sticky Header)      │
    │                    │      └────────────────────────┘
    │ • 2000 particles   │                 │
    │ • Gold color       │                 ▼
    │ • Slow rotation    │      ┌────────────────────────┐
    │ • Fixed position   │      │        Hero            │
    └────────────────────┘      │   (Landing Section)    │
                                │                        │
                                │ • Profile Image        │
                                │ • Name & Title         │
                                │ • CTA Buttons          │
                                │ • Social Links         │
                                └────────────────────────┘
                                           │
                                           ▼
                                ┌────────────────────────┐
                                │        About           │
                                │   (Bio Section)        │
                                │                        │
                                │ • Parchment Card       │
                                │ • Medieval Narrative   │
                                │ • Education Info       │
                                └────────────────────────┘
                                           │
                                           ▼
                                ┌────────────────────────┐
                                │        Skills          │
                                │  (Abilities Section)   │
                                │                        │
                                │ • 5 Categories         │
                                │ • Fantasy Icons        │
                                │ • Hover Effects        │
                                └────────────────────────┘
                                           │
                                           ▼
                                ┌────────────────────────┐
                                │       Projects         │
                                │   (Gallery Section)    │
                                │                        │
                                │ • 6 Project Cards      │
                                │ • Click → Modal        │
                                │ • Image Viewer         │
                                └────────────────────────┘
                                           │
                                           ▼
                                ┌────────────────────────┐
                                │       Contact          │
                                │   (Contact Section)    │
                                │                        │
                                │ • Email, Phone, Loc    │
                                │ • Interactive Cards    │
                                │ • CTA Button           │
                                └────────────────────────┘
                                           │
                                           ▼
                                ┌────────────────────────┐
                                │     ScrollToTop        │
                                │   (Utility Button)     │
                                │                        │
                                │ • Appears on scroll    │
                                │ • Smooth animation     │
                                └────────────────────────┘
```

---

## Component Interaction Flow

```
User Action                Component Response              Visual Effect
───────────────────────────────────────────────────────────────────────

Page Load
    │
    ├──> ParticleBackground    Initializes Three.js      Particles appear
    ├──> Navigation            Slides down               Navbar visible
    ├──> Hero                  Staggered animations      Content reveals
    └──> All Sections          Prepare for scroll        Ready state

Scroll Down
    │
    ├──> About                 useInView triggers        Fade in + slide up
    ├──> Skills                useInView triggers        Cards animate in
    ├──> Projects              useInView triggers        Gallery appears
    └──> Contact               useInView triggers        Contact reveals

Hover on Element
    │
    ├──> Nav Link              Scale + color change      Visual feedback
    ├──> Skill Card            Scale + rotate            Interactive feel
    ├──> Project Card          Scale + translate         Depth effect
    └──> Button                Scale + glow              Call to action

Click Project Card
    │
    └──> Projects              Modal state changes       Modal opens
         │
         ├──> Backdrop         Fade in                   Dark overlay
         ├──> Modal            Scale up                  Content appears
         └──> Image            Load full size            Display project

Click Close/Backdrop
    │
    └──> Projects              Modal state changes       Modal closes
         │
         ├──> Modal            Scale down                Content hides
         └──> Backdrop         Fade out                  Overlay removes

Scroll Past 50vh
    │
    └──> ScrollToTop           Visibility changes        Button appears

Click ScrollToTop
    │
    └──> Window                Smooth scroll             Back to top

Mobile Menu Toggle
    │
    └──> Navigation            State changes             Menu slides in/out
         │
         ├──> Overlay          Fade in/out               Dark background
         └──> Menu             Slide animation           Nav items visible
```

---

## Data Flow Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         STATIC DATA                                 │
│  (Defined in component files)                                       │
│                                                                     │
│  • Navigation items (navItems)                                      │
│  • Skill categories (skillCategories)                               │
│  • Projects list (projects)                                         │
│  • Contact info (contactInfo)                                       │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         COMPONENT STATE                             │
│  (React useState hooks)                                             │
│                                                                     │
│  Navigation:                                                        │
│  • isOpen (boolean) - Mobile menu state                             │
│  • scrolled (boolean) - Navbar background state                     │
│                                                                     │
│  Projects:                                                          │
│  • selectedProject (number | null) - Modal state                    │
│                                                                     │
│  ScrollToTop:                                                       │
│  • isVisible (boolean) - Button visibility                          │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         SIDE EFFECTS                                │
│  (React useEffect hooks)                                            │
│                                                                     │
│  Navigation:                                                        │
│  • Listen to scroll events → Update scrolled state                  │
│                                                                     │
│  ScrollToTop:                                                       │
│  • Listen to scroll events → Update isVisible state                 │
│                                                                     │
│  About/Skills/Projects/Contact:                                     │
│  • useInView hook → Trigger animations when in viewport             │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         ANIMATIONS                                  │
│  (Framer Motion)                                                    │
│                                                                     │
│  • initial: Starting state                                          │
│  • animate: Target state                                            │
│  • exit: Leaving state                                              │
│  • transition: Animation config                                     │
│  • whileHover: Hover state                                          │
│  • whileTap: Click state                                            │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         RENDERING                                   │
│  (React DOM)                                                        │
│                                                                     │
│  • Virtual DOM updates                                              │
│  • Reconciliation                                                   │
│  • Browser paint                                                    │
│  • 60 FPS animations                                                │
└─────────────────────────────────────────────────────────────────────┘
```

---

## File Dependency Graph

```
page.tsx (Main Entry)
│
├─── Navigation.tsx
│    ├─── framer-motion
│    ├─── useState
│    └─── useEffect
│
├─── ParticleBackground.tsx
│    ├─── three
│    ├─── @react-three/fiber
│    ├─── @react-three/drei
│    └─── useFrame
│
├─── Hero.tsx
│    ├─── framer-motion
│    └─── next/image
│
├─── About.tsx
│    ├─── framer-motion
│    ├─── useInView
│    └─── useRef
│
├─── Skills.tsx
│    ├─── framer-motion
│    ├─── useInView
│    └─── useRef
│
├─── Projects.tsx
│    ├─── framer-motion
│    ├─── useInView
│    ├─── useState
│    ├─── useRef
│    └─── next/image
│
├─── Contact.tsx
│    ├─── framer-motion
│    ├─── useInView
│    └─── useRef
│
└─── ScrollToTop.tsx
     ├─── framer-motion
     ├─── useState
     └─── useEffect
```

---

## Styling Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                      TAILWIND CSS BASE                              │
│                   (tailwind.config.js)                              │
│                                                                     │
│  • Custom medieval color palette                                    │
│  • Custom font families                                             │
│  • Extended theme configuration                                     │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                      GLOBAL STYLES                                  │
│                   (src/app/globals.css)                             │
│                                                                     │
│  @layer base:                                                       │
│  • Body styles                                                      │
│  • Heading styles                                                   │
│                                                                     │
│  @layer components:                                                 │
│  • .parchment-card                                                  │
│  • .ornate-border                                                   │
│  • .medieval-btn                                                    │
│  • .scroll-reveal                                                   │
│                                                                     │
│  @layer utilities:                                                  │
│  • .text-shadow-gold                                                │
│  • .glow-gold                                                       │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                      COMPONENT STYLES                               │
│                   (Inline Tailwind classes)                         │
│                                                                     │
│  • Utility classes applied directly                                 │
│  • Responsive modifiers (md:, lg:)                                  │
│  • State modifiers (hover:, focus:)                                 │
│  • Custom classes from globals.css                                  │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Build Process Flow

```
Development Mode (npm run dev)
│
├─── Next.js Dev Server starts
├─── TypeScript compilation (watch mode)
├─── Tailwind CSS processing (JIT mode)
├─── Hot Module Replacement (HMR) enabled
└─── Browser opens at localhost:3000

Production Build (npm run build)
│
├─── TypeScript compilation
├─── Tailwind CSS purging (remove unused)
├─── Next.js optimization
│    ├─── Code splitting
│    ├─── Tree shaking
│    ├─── Minification
│    └─── Image optimization
├─── Static generation
└─── Build output in .next/

Production Start (npm start)
│
├─── Serve optimized build
├─── Server-side rendering
└─── Production mode enabled
```

---

## Responsive Breakpoints

```
Mobile First Approach:

Default (< 768px)
┌─────────────┐
│   Mobile    │
│   Layout    │
│             │
│  • Stack    │
│  • Burger   │
│  • Full W   │
└─────────────┘

md: (≥ 768px)
┌─────────────────────────┐
│      Tablet Layout      │
│                         │
│  • 2 columns            │
│  • Desktop nav          │
│  • Adjusted spacing     │
└─────────────────────────┘

lg: (≥ 1024px)
┌───────────────────────────────────┐
│        Desktop Layout             │
│                                   │
│  • 3 columns                      │
│  • Full navigation                │
│  • Max width: 1280px              │
│  • Optimal spacing                │
└───────────────────────────────────┘
```

---

## Performance Optimization

```
┌─────────────────────────────────────────────────────────────────────┐
│                      OPTIMIZATION LAYERS                            │
└─────────────────────────────────────────────────────────────────────┘

Layer 1: Next.js Built-in
├─── Automatic code splitting
├─── Image optimization (next/image)
├─── Font optimization
└─── Static generation where possible

Layer 2: Component Level
├─── Lazy loading with dynamic imports
├─── useInView for scroll animations
├─── Memoization where needed
└─── Efficient re-renders

Layer 3: Asset Level
├─── Optimized images (WebP, AVIF)
├─── Compressed fonts
├─── Minified CSS/JS
└─── Tree-shaken dependencies

Layer 4: Delivery
├─── CDN distribution (Vercel)
├─── Gzip/Brotli compression
├─── HTTP/2 multiplexing
└─── Edge caching
```

---

**This architecture provides a scalable, maintainable, and performant portfolio! 🚀**
