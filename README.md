# Deloc Landing Page

A modern, responsive landing page for Deloc - a smart cargo transportation platform that connects drivers across Europe and Asia using GNSS tracking and blockchain confirmation.

## Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 14 and Tailwind CSS
- **Interactive Components**: Engaging animations with Framer Motion
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Key Sections

1. **Hero Section**: Compelling value proposition with animated dashboard preview
2. **Features**: Highlighting GNSS tracking, blockchain verification, and auto driver matching
3. **How It Works**: 4-step process explanation
4. **Contact/Quote Form**: Lead generation form with company details
5. **Footer**: Company information and links

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
deloc-landing/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Features.tsx     # Features showcase
│   ├── HowItWorks.tsx   # Process explanation
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Customization

### Colors
Primary and secondary color schemes are defined in `tailwind.config.js`. Update the color palette to match your brand.

### Content
Update the content in each component file to reflect your specific value proposition and company details.

### Animations
Animations are powered by Framer Motion. Customize timing and effects in individual component files.

## Deployment

This project is ready to deploy on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any static hosting service

## License

MIT License - see LICENSE file for details.
