# Creative Agency Website - Ochi Design Clone

A modern, responsive website built with React and Tailwind CSS featuring a sleek landing page and navigation. This project is a UI clone of [ochi.design](https://ochi.design/) showcasing a creative agency's portfolio with eye-catching typography, smooth animations, and interactive components.

## 🚀 Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth transitions
- **Locomotive Scroll** - Smooth scrolling and parallax effects
- **React Icons** - Popular icon library
- **ESLint** - Code linting and formatting

## 📦 Features

- **Landing Page** - Hero section with animated typography and call-to-action
- **Animated Marquee** - Horizontal scrolling text with Framer Motion
- **Interactive Eyes** - Eye-tracking animation component with background image
- **About Section** - Company information with overlapping design
- **Featured Projects** - Hover-animated project cards with text reveals
- **Cards Section** - Additional portfolio showcase
- **Footer** - Complete website footer
- **Fixed Navigation** - Transparent navbar with company logo
- **Dark Theme** - Consistent zinc/green color palette throughout
- **Custom Fonts** - Founders Grotesk and Neue Montreal typography
- **Smooth Animations** - Framer Motion powered interactions

## 🛠️ Installation & Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Fixed navigation with logo and menu links
│   ├── Landingpage.jsx # Hero section with large typography
│   ├── Marquee.jsx     # Animated scrolling text component
│   ├── About.jsx       # Company information section with overlap
│   ├── Eyes.jsx        # Interactive eye-tracking animation
│   ├── Featured.jsx    # Project showcase with hover animations
│   ├── Cards.jsx       # Additional portfolio cards
│   └── Footer.jsx      # Website footer component
├── App.jsx             # Main app component with all sections
├── main.jsx           # React app entry point
└── index.css          # Global styles and font imports
```

## 🎨 Design Features

- **Typography**: Large-scale headings with Founders Grotesk font
- **Smooth Scrolling**: Locomotive Scroll for parallax effects
- **Hover Animations**: Interactive text reveals on project cards
- **Eye Tracking**: Dynamic eye movement following mouse cursor
- **Layout**: Full-screen sections with overlapping design elements
- **Colors**: Dark theme with zinc-800 background and green accents (#004D43, #CDEA68)
- **Interactive Elements**: Hover effects and animated components
- **Visual Effects**: Background images, rounded corners, and layered sections

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Customization

The project uses Tailwind CSS for styling and Framer Motion for animations. You can customize:

- **Colors**: Update the color palette in Tailwind classes
- **Typography**: Modify font families and sizes (Founders Grotesk, Neue Montreal)
- **Animations**: Adjust Framer Motion transition properties
- **Layout**: Change component spacing and responsive breakpoints
- **Content**: Update text content in each component
- **Images**: Replace background images in the Eyes component

## 🚀 Animation Features

- **Marquee Text**: Infinite horizontal scrolling with customizable speed
- **Typography Animation**: Smooth text reveals and transitions
- **Hover Effects**: Project card text animations on mouse interaction
- **Eye Tracking**: Dynamic eye movement effects following cursor
- **Scroll Parallax**: Locomotive Scroll integration for smooth scrolling
- **Layered Animations**: Staggered character animations in project titles

## 🎯 Components Overview

- **Navbar**: Fixed transparent navigation with company logo
- **Landingpage**: Hero section with "We Create Eye-Opening Presentations"
- **Marquee**: Animated "WE ARE OCHI" scrolling text with parallax
- **About**: Company description with overlapping green section design
- **Eyes**: Interactive dual-eye animation with background imagery
- **Featured**: Project showcase with "Branding" and "Double" hover reveals
- **Cards**: Additional portfolio section
- **Footer**: Complete website footer

## 🔮 Future Features

- **Full Responsiveness**: Currently optimized for desktop, mobile responsiveness needs implementation
- **Performance Optimization**: Optimize animations for better performance on lower-end devices
- **Accessibility**: Add ARIA labels and keyboard navigation support
- **Loading States**: Implement loading animations and skeleton screens
- **SEO Enhancement**: Add meta tags and structured data
