# 📁 Project Structure

## Complete Directory Layout

```
portfolio-nextjs/
│
├── 📄 Configuration Files
│   ├── package.json              # Dependencies and scripts
│   ├── tsconfig.json             # TypeScript configuration
│   ├── next.config.js            # Next.js configuration
│   ├── tailwind.config.js        # Tailwind CSS configuration
│   ├── postcss.config.js         # PostCSS configuration
│   ├── .gitignore                # Git ignore rules
│   ├── .env.example              # Environment variables template
│   └── setup.bat                 # Windows setup script
│
├── 📚 Documentation
│   ├── README.md                 # Main documentation
│   ├── MIGRATION_GUIDE.md        # Conversion guide
│   ├── QUICKSTART.md             # Quick start guide
│   └── PROJECT_STRUCTURE.md      # This file
│
├── 📂 src/
│   │
│   ├── 📂 app/                   # Next.js App Router
│   │   ├── layout.tsx            # Root layout with metadata
│   │   ├── page.tsx              # Main page (home)
│   │   └── globals.css           # Global styles + Tailwind
│   │
│   └── 📂 components/            # React Components
│       ├── About.tsx             # About section
│       ├── Contact.tsx           # Contact section
│       ├── Hero.tsx              # Hero/landing section
│       ├── Navigation.tsx        # Navbar with mobile menu
│       ├── ParticleBackground.tsx # Three.js particles
│       ├── Projects.tsx          # Projects gallery + modal
│       ├── ScrollToTop.tsx       # Scroll to top button
│       └── Skills.tsx            # Skills section
│
└── 📂 public/                    # Static Assets
    ├── 📂 images/
    │   ├── cea.jpg               # Profile photo
    │   └── 📂 projects/          # Project screenshots
    │       ├── lms-dashboard1.png
    │       ├── aksyon-public1.png
    │       ├── 4ph-dashboard4.png
    │       ├── servicedesk-dashboard.png
    │       ├── task-manager.png
    │       └── document-verifier.png
    │
    └── 📂 storage/
        └── CV - CEA, JOHN ELISEO.pdf
```

## 📋 File Descriptions

### Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Project dependencies, scripts, and metadata |
| `tsconfig.json` | TypeScript compiler options and paths |
| `next.config.js` | Next.js framework configuration |
| `tailwind.config.js` | Tailwind CSS theme and plugins |
| `postcss.config.js` | PostCSS plugins configuration |
| `.gitignore` | Files to exclude from version control |
| `.env.example` | Template for environment variables |
| `setup.bat` | Automated setup script for Windows |

### Source Code (`src/`)

#### App Directory (`src/app/`)
- **layout.tsx**: Root layout component, wraps all pages
- **page.tsx**: Main homepage, imports all sections
- **globals.css**: Global styles, Tailwind directives, custom CSS

#### Components (`src/components/`)

| Component | Description | Key Features |
|-----------|-------------|--------------|
| `Navigation.tsx` | Top navigation bar | Responsive, mobile menu, smooth scroll |
| `ParticleBackground.tsx` | 3D particle effect | Three.js, animated particles |
| `Hero.tsx` | Landing section | Profile image, CTA buttons, social links |
| `About.tsx` | About section | Parchment card, animated text |
| `Skills.tsx` | Skills showcase | Categorized, hover effects |
| `Projects.tsx` | Project gallery | Grid layout, modal, image viewer |
| `Contact.tsx` | Contact information | Medieval scroll design |
| `ScrollToTop.tsx` | Scroll button | Appears on scroll, smooth animation |

### Public Assets (`public/`)

- **images/**: All images (profile, projects)
- **storage/**: Downloadable files (CV, documents)

## 🎨 Component Architecture

```
App (page.tsx)
│
├── ParticleBackground (Three.js layer)
│
├── Navigation
│   ├── Desktop Menu
│   └── Mobile Menu (hamburger)
│
├── Hero
│   ├── Profile Image
│   ├── Title & Description
│   ├── CTA Buttons
│   └── Social Links
│
├── About
│   └── Parchment Card
│       ├── Bio Text
│       └── Education/Location
│
├── Skills
│   └── Skill Categories
│       ├── Frontend Arsenal
│       ├── Backend Sorcery
│       ├── Database Vaults
│       ├── DevOps & Tools
│       └── Design & Testing
│
├── Projects
│   ├── Project Grid
│   │   └── Project Cards (6)
│   └── Modal
│       ├── Full Image
│       └── Project Details
│
├── Contact
│   └── Contact Cards
│       ├── Email
│       ├── Phone
│       └── Location
│
└── ScrollToTop Button
```

## 🔄 Data Flow

```
User Interaction
      ↓
Component State (useState)
      ↓
Framer Motion Animations
      ↓
DOM Update
      ↓
Visual Feedback
```

## 🎯 Key Technologies per Component

| Component | Technologies |
|-----------|-------------|
| ParticleBackground | Three.js, React Three Fiber, @react-three/drei |
| Navigation | Framer Motion, React hooks (useState, useEffect) |
| Hero | Framer Motion, Next.js Image |
| About | Framer Motion, useInView hook |
| Skills | Framer Motion, Tailwind CSS |
| Projects | Framer Motion, Next.js Image, Modal state |
| Contact | Framer Motion, useInView hook |
| ScrollToTop | Framer Motion, AnimatePresence |

## 📦 Dependencies

### Core
- `next` - React framework
- `react` - UI library
- `react-dom` - React DOM renderer

### Animation & 3D
- `framer-motion` - Animation library
- `three` - 3D graphics
- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Three.js helpers

### Styling
- `tailwindcss` - Utility CSS framework
- `autoprefixer` - CSS vendor prefixes
- `postcss` - CSS transformations

### Development
- `typescript` - Type safety
- `@types/*` - TypeScript definitions

## 🚀 Build Output

```
.next/
├── cache/              # Build cache
├── server/             # Server-side code
├── static/             # Static assets
└── types/              # Generated types
```

## 📊 File Sizes (Approximate)

| Category | Size |
|----------|------|
| Components | ~15 KB total |
| Styles | ~5 KB |
| Config | ~2 KB |
| Dependencies | ~200 MB (node_modules) |
| Build Output | ~5-10 MB |

## 🔧 Customization Points

### Easy to Modify
- ✅ Colors: `tailwind.config.js`
- ✅ Content: Individual component files
- ✅ Fonts: `globals.css`
- ✅ Images: `public/images/`

### Moderate Complexity
- 🔶 Animations: Framer Motion configs in components
- 🔶 Layout: Component structure in `page.tsx`
- 🔶 Particle effects: `ParticleBackground.tsx`

### Advanced
- 🔴 Three.js customization
- 🔴 Custom hooks
- 🔴 Performance optimization

## 📝 Notes

- All components use `'use client'` directive (client-side rendering)
- Images optimized with Next.js Image component
- Responsive design with Tailwind breakpoints
- Animations triggered by scroll with useInView
- TypeScript for type safety throughout

---

**Last Updated:** 2024
**Version:** 1.0.0
