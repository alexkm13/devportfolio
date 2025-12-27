# Personal Website

A modern, playful personal website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- **Animated Hero Section** - Staggered text reveals, floating elements, and gradient backgrounds
- **Project Portfolio** - Filterable grid with 3D hover effects on cards
- **Blog** - MDX-powered blog with syntax highlighting
- **About Page** - Skills visualization with animated progress bars
- **Dark/Light Mode** - Smooth theme transitions with system preference support
- **Responsive Design** - Mobile-first approach with beautiful layouts on all devices
- **Accessibility** - Focus states, semantic HTML, and keyboard navigation

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Blog**: [MDX](https://mdxjs.com/) with syntax highlighting
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Fonts**: Space Grotesk + JetBrains Mono

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/personal-site.git
   cd personal-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
personal-site/
├── app/
│   ├── layout.tsx           # Root layout with nav, footer, theme
│   ├── page.tsx             # Home page
│   ├── projects/
│   │   ├── page.tsx         # Projects grid
│   │   └── [slug]/page.tsx  # Project detail
│   ├── blog/
│   │   ├── page.tsx         # Blog listing
│   │   └── [slug]/page.tsx  # Blog post
│   ├── about/page.tsx       # About page
│   └── not-found.tsx        # 404 page
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── magnetic-button.tsx
│   │   ├── project-card.tsx
│   │   ├── blog-card.tsx
│   │   └── loading.tsx
│   ├── animations/          # Animation wrappers
│   │   ├── motion-wrapper.tsx
│   │   ├── scroll-reveal.tsx
│   │   └── page-transition.tsx
│   └── layout/              # Layout components
│       ├── navigation.tsx
│       ├── footer.tsx
│       ├── theme-toggle.tsx
│       └── theme-provider.tsx
├── content/
│   ├── projects/index.ts    # Project data
│   └── blog/index.ts        # Blog posts data
├── lib/
│   └── utils.ts             # Helper functions
└── public/                  # Static assets
```

## Customization

### Updating Personal Information

1. **Name & Branding**: Update the name in `app/layout.tsx`, `components/layout/navigation.tsx`, and `components/layout/footer.tsx`

2. **Projects**: Edit `content/projects/index.ts` to add your own projects

3. **Blog Posts**: Edit `content/blog/index.ts` to add your blog posts

4. **About Page**: Customize `app/about/page.tsx` with your own bio, skills, and experience

5. **Social Links**: Update the social links in `components/layout/footer.tsx`

### Theming

Colors and design tokens are defined in `app/globals.css`. Modify the CSS custom properties to change the color scheme:

```css
:root {
  --primary: #ff6b6b;
  --secondary: #4ecdc4;
  --accent: #ffe66d;
  /* ... */
}
```

### Adding Images

Place project images in `public/images/projects/` and update the image paths in your project data.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy!

### Other Platforms

```bash
npm run build
npm run start
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT License - feel free to use this template for your own personal website!

## Credits

Built with love using Next.js, Tailwind CSS, and Framer Motion.
