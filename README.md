# Mayank Jain — Animated Portfolio ✨

A visually stunning, dark-mode portfolio featuring dynamic animations, particle effects, and smooth transitions. Built with **React + Vite + TailwindCSS** with comprehensive visual effects and interactive elements.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Then open the printed localhost URL in your browser (usually `http://localhost:5173`).

## ✨ Features

### Visual Effects

- **80+ Floating Particles** - Ambient background particles that drift across the entire page
- **Gradient Animations** - Smooth color transitions on headers and key elements
- **Glow Effects** - Pulsing glows on interactive elements and buttons
- **Hover Animations** - Scale, translate, and glow effects on all interactive components
- **Shimmer Effects** - Subtle shine overlays on cards
- **Staggered Entrance** - Sequential animations for list items and cards

### Animations

- **Floating Cards** - Smooth up/down motion with 12s cycles
- **Gradient Shifts** - 15s color gradient animations
- **Smooth Transitions** - All interactions use cubic-bezier easing
- **Scale on Hover** - Cards and buttons lift and scale
- **Arrow Animations** - Links have animated arrows that move on hover

### Sections

- **Hero** - Large animated name, floating snapshot card, particle effects
- **About** - Interactive paragraphs with hover effects, floating sidebar cards
- **Education** - Animated education cards with glow effects
- **Experience** - Interactive timeline with expandable details
- **Projects** - Filterable project grid with category buttons
- **Contact** - Animated contact card with glowing links

### Navigation

- **Sticky Navbar** - Smooth scroll navigation with animated logo
- **Glowing Social Buttons** - GitHub and LinkedIn buttons with pulsing glow effects
- **Responsive Design** - Mobile-friendly with adaptive layouts

## 🛠 Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast development and optimized builds
- **TailwindCSS** - Utility-first styling with custom animations
- **React Bits** - Ready to use (optional component library)

## 📁 Project Structure

```
src/
├── components/
│   ├── About.jsx       # About section with hover effects
│   ├── Contact.jsx     # Contact form with animations
│   ├── Education.jsx   # Education cards
│   ├── Experience.jsx  # Interactive timeline
│   ├── Footer.jsx      # Footer component
│   ├── Hero.jsx        # Hero section with gradient text
│   ├── Navbar.jsx      # Sticky nav with glowing buttons
│   └── Projects.jsx    # Filterable project grid
├── data/
│   ├── experience.js   # Experience timeline data
│   └── projects.js     # Project cards data
├── App.jsx             # Main app with global particles
├── index.css           # Global styles and animations
└── main.jsx            # React entry point
```

## 🎨 Customization

### Update Content

Edit the data files in `src/data/`:

- `experience.js` - Add your work experience
- `projects.js` - Add your projects

### Modify Components

Components are in `src/components/` - each section is self-contained.

### Adjust Animations

Animation speeds and effects are in `src/index.css`:

- `float-animation` - 12s floating motion
- `animate-gradient` - 15s gradient shift
- `glow-pulse` - 4s pulsing glow
- `shimmer` - 5s shimmer effect

### Change Colors

Primary colors use Tailwind's sky/cyan palette. Update in component classes or `tailwind.config.js`.

## 🎯 Performance

- Particle system uses CSS animations for 60fps performance
- Images lazy load automatically
- Vite optimizes bundle size
- All animations use GPU-accelerated transforms

## 📱 Responsive

Fully responsive design with breakpoints:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚢 Deployment

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Deploy the `dist/` folder to your hosting service (Vercel, Netlify, GitHub Pages, etc.)

## 📄 License

MIT - feel free to use this as a template for your own portfolio!
