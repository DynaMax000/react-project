# Creative Agency Website

A modern, responsive website built with React and Tailwind CSS featuring a sleek landing page and navigation. This project showcases a creative agency's portfolio with eye-catching typography and smooth user interface.

## 🚀 Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth transitions
- **React Icons** - Popular icon library
- **ESLint** - Code linting and formatting

## 📦 Features

- **Landing Page** - Hero section with animated typography and call-to-action
- **Animated Marquee** - Horizontal scrolling text with Framer Motion
- **Interactive Eyes** - Eye-tracking animation component with background image
- **About Section** - Company information and presentation
- **Responsive Navigation** - Clean navbar with company logo
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
│   ├── Navbar.jsx      # Navigation with logo and menu links
│   ├── Landingpage.jsx # Hero section with large typography
│   ├── Marquee.jsx     # Animated scrolling text component
│   ├── About.jsx       # Company information section
│   └── Eyes.jsx        # Interactive eye-tracking animation
├── App.jsx             # Main app component with all sections
├── main.jsx           # React app entry point
└── index.css          # Global styles and font imports
```

## 🎨 Design Features

- **Typography**: Large-scale headings with Founders Grotesk font
- **Animations**: Smooth marquee text scroll and eye tracking
- **Layout**: Full-screen sections with proper spacing and flow
- **Colors**: Dark theme with zinc-800 background and green accents (#004D43)
- **Interactive Elements**: Hover effects and animated components
- **Visual Effects**: Background images and rounded corners

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
- **Interactive Elements**: Hover states and click animations
- **Eye Tracking**: Dynamic eye movement effects (Eyes component)

## 🎯 Components Overview

- **Navbar**: Company logo with navigation links
- **Landingpage**: Hero section with "We Create Eye-Opening Presentations"
- **Marquee**: Animated "WE ARE OCHI" scrolling text
- **About**: Company description and information
- **Eyes**: Interactive animation with background imagery
