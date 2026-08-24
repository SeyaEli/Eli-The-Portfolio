# Medieval Portfolio - Next.js

A stunning portfolio website with a medieval/fantasy theme built with modern web technologies.

## 🏰 Tech Stack

- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Three.js** - 3D graphics and particle effects
- **TypeScript** - Type-safe development
- **Medieval Google Fonts** - MedievalSharp, Cinzel, UnifrakturMaguntia

## 🎨 Features

- ⚔️ Medieval/Fantasy themed UI with ornate borders and parchment textures
- ✨ Smooth scroll animations with Framer Motion
- 🌟 Three.js particle background effects
- 📱 Fully responsive design
- 🎭 Interactive project gallery with modal
- 🔮 Custom medieval color palette and typography
- 🏰 Fantasy UI elements (scrolls, shields, banners)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Copy your images to the public folder:
```bash
# Copy profile image
copy ..\image\cea.jpg public\images\cea.jpg

# Copy project images
mkdir public\images\projects
copy ..\image\Projects\*.png public\images\projects\
```

4. Copy your CV:
```bash
mkdir public\storage
copy ..\storage\*.pdf public\storage\
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
portfolio-nextjs/
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles with Tailwind
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Main page
│   └── components/
│       ├── About.tsx         # About section
│       ├── Contact.tsx       # Contact section
│       ├── Hero.tsx          # Hero section
│       ├── Navigation.tsx    # Navigation bar
│       ├── ParticleBackground.tsx  # Three.js particles
│       ├── Projects.tsx      # Projects gallery
│       ├── ScrollToTop.tsx   # Scroll to top button
│       └── Skills.tsx        # Skills section
├── public/
│   ├── images/              # Images and assets
│   └── storage/             # CV and documents
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies

```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the medieval color palette:

```js
colors: {
  medieval: {
    gold: '#D4AF37',
    darkGold: '#B8941E',
    bronze: '#CD7F32',
    parchment: '#F4E8D0',
    // ... more colors
  }
}
```

### Content

Update the content in each component file:
- `Hero.tsx` - Personal info and introduction
- `About.tsx` - About section text
- `Skills.tsx` - Skills and technologies
- `Projects.tsx` - Project details
- `Contact.tsx` - Contact information

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📦 Deployment

Deploy to Vercel (recommended):

```bash
npm install -g vercel
vercel
```

Or deploy to any hosting platform that supports Next.js.

## 🎯 Key Components

- **ParticleBackground**: Three.js animated particle system
- **Navigation**: Responsive navbar with mobile menu
- **Hero**: Animated hero section with profile image
- **Skills**: Categorized skills with hover effects
- **Projects**: Interactive project gallery with modal
- **Contact**: Contact information with medieval styling

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Credits

Developed by John Eliseo Cea
Original design converted to Next.js with medieval theme
