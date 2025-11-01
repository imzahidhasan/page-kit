# Page Kit

<div align="center">
  <img src="public/logo.svg" alt="Page Kit Logo" width="120" height="120">
  
  **From Concept to Production in Minutes**
  
  Professional React components with smooth animations. Copy, paste, ship.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-12-38B2A)](https://motion.dev/)

</div>

## ✨ What is Page Kit?

Page Kit is a comprehensive component registry and UI toolkit that accelerates your web development workflow. Copy production-ready components directly into your project via CLI, customize them to match your brand, and ship faster than ever before.

**Perfect for:**

- 🚀 Startups building MVPs quickly
- 💼 Agencies delivering client projects on tight deadlines
- 👨‍💻 Developers who want to focus on logic, not UI boilerplate
- 🎓 Learners exploring modern React patterns and animations

## 🚀 Key Features

### Component Registry System

- **� CLI-Powered Installation** - Add components to your project with a single command
- **📦 Modular Architecture** - Install only what you need, keep your bundle size small
- **🔄 Automatic Dependency Resolution** - Component dependencies are handled automatically

### Production-Ready Components

- **🎨 UI Components** - Buttons, inputs, cards, badges, and more
- **🧱 Block Components** - Pre-built sections like heroes, features, footers, CTAs
- **🪝 Custom Hooks** - Reusable React hooks for common patterns
- **🛠️ Utilities** - Helper functions and libraries

### Developer Experience

- **⚡ Smooth Animations** - Every component powered by Motion for fluid interactions
- **🌓 Theme System** - Built-in dark mode with customizable CSS variables
- **📱 Responsive by Default** - Mobile-first design that adapts to any screen
- **🔧 Fully Customizable** - Own the code - modify anything to fit your needs
- **🎯 TypeScript First** - Full type safety and IntelliSense support
- **📖 Interactive Docs** - Live component previews with code examples

### Modern Tech Stack

- **⚡ Next.js 15** - Latest App Router with Turbopack for lightning-fast builds
- **⚛️ React 19** - Cutting-edge React features and performance
- **🎨 Tailwind CSS 4** - Utility-first styling with CSS-in-JS syntax
- **✨ Motion** - Powerful animations with a simple API

## 🎯 Use Cases

### � Rapid Prototyping

Build and validate ideas in hours, not days. Perfect for:

- **MVPs & Product Demos** - Ship working prototypes to test market fit
- **Hackathons** - Stand out with polished UI while focusing on innovation
- **Client Presentations** - Impress stakeholders with professional interfaces

### 💼 Production Applications

Battle-tested components ready for real-world use:

- **SaaS Dashboards** - Admin panels, analytics views, data tables
- **Marketing Sites** - Landing pages, product pages, documentation sites
- **E-commerce** - Product listings, checkout flows, customer portals
- **Portfolios** - Personal sites, agency showcases, case studies

### 🎓 Learning & Development

Master modern web development patterns:

- **Best Practices** - Learn from production-grade code structure
- **Animation Techniques** - Explore Motion patterns and animations
- **TypeScript Patterns** - Study type-safe component architecture
- **Accessibility** - Understand WCAG-compliant component design


## 💡 How It Works

### 1. Browse Components

Explore the interactive documentation at `/docs` to see all available components with live previews, code examples, and customization options.

### 2. Install via CLI

Add components to your project instantly:

```bash
npx page-kit add @pagekit/button
npx page-kit add @pagekit/hero-section
```

The CLI automatically:

- ✅ Downloads component files to your project
- ✅ Installs required npm dependencies
- ✅ Resolves component dependencies
- ✅ Adds necessary CSS variables
- ✅ Updates configuration files

### 3. Customize & Ship

Components are added directly to your codebase - you own them completely:

```tsx
// src/components/ui/button.tsx - It's yours to modify!
export function Button({ variant = "primary", ...props }) {
  return (
    <button
      className={cn(
        "custom-styles", // Change anything you want
        variantStyles[variant]
      )}
      {...props}
    />
  );
}
```


## 🚦 Getting Started

### For New Projects

**Option 2: Use as Component Library**
Add Page Kit components to your existing Next.js project:

```bash
npx page-kit init
npx page-kit add @pagekit/button
```

### For Existing Projects

1. **Ensure Compatibility**

   - Next.js 13+ (App Router)
   - React 18+
   - Tailwind CSS 4

2. **Initialize Page Kit**

   ```bash
   npx page-kit init
   ```

3. **Add Components**

   ```bash
   npx page-kit add @pagekit/[component-name]
   ```

4. **Import and Use**

   ```tsx
   import { Button } from "@/components/ui/button";

   export default function Page() {
     return <Button>Click me</Button>;
   }
   ```

## ⚙️ Customization

### Theme Variables

Customize colors, fonts, and spacing via CSS variables:

```css
:root {
  --color-primary: 220 100% 50%;
  --color-secondary: 280 100% 60%;
  --font-heading: "Inter", sans-serif;
  --radius: 0.5rem;
}
```

### Component Variants

Extend components with new variants:

```tsx
// Add your custom variant
const buttonVariants = {
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-white",
  custom: "bg-gradient-to-r from-pink-500 to-purple-500", // Your variant
};
```

### Animation Timing

Fine-tune animations to match your brand:

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.3, ease: "easeOut" }} // Adjust timing
>
```

## 🎯 Quick Start

### Using Components Directly

Browse components in `/docs` and copy the code:

```tsx
import { Button } from "@/registry/ui/button";

export default function MyPage() {
  return (
    <div className="flex gap-4">
      <Button variant="primary" size="lg">
        Get Started
      </Button>
      <Button variant="secondary" size="lg">
        Learn More
      </Button>
    </div>
  );
}
```

### Building a Landing Page

Combine block components for instant results:

```tsx
import HeroSection from "@/registry/blocks/hero-section";
import FeatureGrid from "@/registry/blocks/feature-grid";
import CallToAction from "@/registry/blocks/call-to-action";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <FeatureGrid />
      <CallToAction />
    </>
  );
}
```

## 📚 Documentation

Explore comprehensive documentation with interactive examples:

- **[Installation Guide](/docs/installation)** - Detailed setup instructions
- **[Components](/docs/components)** - Browse all available components
- **[CLI Guide](/docs/cli-guide)** - Command-line tool documentation


### Documentation Features

- 📖 **Live Previews** - See components in action
- 💻 **Code Examples** - Copy-paste ready snippets
- 🎨 **Variant Showcase** - Explore all component variations
- 📊 **Props Tables** - Complete API reference
- 🎯 **Usage Patterns** - Real-world implementation examples


## 🎨 Design Philosophy

Page Kit is built on these core principles:

### 🎯 Accessibility First

- WCAG 2.1 AA compliant components
- Keyboard navigation support
- Screen reader friendly
- Focus management and ARIA attributes

### ⚡ Performance Optimized

- Minimal bundle size with tree-shaking
- Lazy loading for optimal loading times
- Efficient animations with Motion
- Server-side rendering ready

### 🎨 Design System Thinking

- Consistent spacing and typography
- Unified color palette with semantic tokens
- Reusable patterns and variants
- Design tokens via CSS variables

### 🔧 Developer Friendly

- Intuitive component APIs
- Comprehensive TypeScript types
- Clear documentation and examples
- Extensible and customizable

## 🌟 Why Page Kit?

### vs Building from Scratch

- ⏱️ **Save 100+ hours** - Components are already built and tested
- 🎨 **Professional design** - No need for design skills
- ♿ **Accessibility included** - WCAG compliance out of the box
- 🎬 **Smooth animations** - Motion integration ready to go

### vs Other UI Libraries

- 🎯 **You own the code** - Components live in your project, not node_modules
- 🔧 **Full customization** - Modify anything without fighting the framework
- 📦 **No vendor lock-in** - No runtime dependency on Page Kit
- 🚀 **Modern stack** - Latest Next.js, React, and Tailwind

### vs Template/Theme Marketplaces

- 🆓 **100% Free & Open Source** - MIT licensed
- 🔄 **Modular approach** - Use only what you need
- 📚 **Learn as you build** - Understand how components work
- 🤝 **Community driven** - Contribute and improve together

## 🤝 Contributing

We welcome contributions! Page Kit is community-driven and your input helps make it better.

**Ways to contribute:**

- 🐛 Report bugs and issues
- 💡 Suggest new components or features
- 📖 Improve documentation
- 🎨 Submit component designs
- 💻 Add new components to the registry

See our [Contributing Guide](CONTRIBUTING.md) for detailed guidelines on adding components, code standards, and the submission process.

## � Support & Community

### Get Help

- 📖 **[Documentation](/docs)** - Comprehensive guides and examples
- 🐛 **[Report Issues](https://github.com/imzahidhasan/page-kit/issues)** - Bug reports and feature requests
- 💬 **[Discussions](https://github.com/imzahidhasan/page-kit/discussions)** - Questions, ideas, and community chat

### Stay Updated

- ⭐ **Star this repo** to get notified of new releases
- 👀 **Watch releases** for component updates and new features
- 🐦 **Follow on Twitter** for tips and announcements


## 🏆 Showcase

Built something awesome with Page Kit? We'd love to feature it! Share your project in [Discussions](https://github.com/imzahidhasan/page-kit/discussions) or tag us on social media.

## 📄 License

Page Kit is open source software licensed under the [MIT License](LICENSE).

**What this means:**

- ✅ Free for personal and commercial use
- ✅ Modify and distribute as you wish
- ✅ Private use allowed
- ✅ No attribution required (but appreciated!)

## 🌟 Acknowledgments

Page Kit is built with amazing open-source tools:

- **[Next.js](https://nextjs.org/)** - The React Framework
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[Motion](https://motion.dev/)** - Production-ready animations
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
- **[Lucide](https://lucide.dev/)** - Beautiful icon library
- **[MDX](https://mdxjs.com/)** - Markdown for components

Special thanks to all contributors who help make Page Kit better! 🙏

---

<div align="center">
  ⭐ Star this repo if you find it helpful!
</div>
