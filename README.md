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

Page Kit is an open-source toolkit designed to help you build beautiful, modern web pages quickly and easily. Whether you're a beginner or an experienced developer, Page Kit provides everything you need to create professional websites without starting from scratch.

## 🚀 Features

- **🎨 Ready-to-Use Components** - Professional React components that work out of the box
- **⚡ Smooth Animations** - Built with Motion (Framer Motion) for fluid user experiences
- **🌓 Dark Mode Support** - Built-in theme switching with next-themes
- **📱 Responsive Design** - Mobile-first approach that works on any device
- **🔧 Fully Customizable** - Easy to modify and adapt to your brand
- **📖 MDX Documentation** - Interactive documentation with live examples
- **🎯 TypeScript Ready** - Full TypeScript support for better developer experience
- **⚡ Modern Stack** - Built with Next.js 15, React 19, and Tailwind CSS 4

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with Turbopack
- **React**: [React 19](https://reactjs.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) (Framer Motion)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Documentation**: [MDX](https://mdxjs.com/)
- **UI Primitives**: [Radix UI](https://www.radix-ui.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/imzahidhasan/page-kit.git
cd page-kit
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Quick Start

Page Kit provides a collection of ready-to-use components that you can copy and paste into your project:

### Button Component

```tsx
import { Button } from "@/components/core/button";

export default function MyPage() {
  return (
    <Button variant="primary" size="lg">
      Get Started
    </Button>
  );
}
```

### Input Component

```tsx
import { Input } from "@/components/core/input";

export default function MyForm() {
  return <Input placeholder="Enter your email" type="email" />;
}
```

## 📚 Documentation

Visit the `/docs` route in your local development server to explore:

- **Installation Guide** - Step-by-step setup instructions
- **Component Library** - Interactive examples and usage guides
- **Button Components** - Various button styles and variants
- **Input Components** - Form input components with validation
- **Code Examples** - Copy-paste ready code snippets

## 🗂️ Project Structure

```
src/
├── app/
│   ├── (landing)/          # Landing page components
│   └── docs/               # Documentation pages
├── components/
│   ├── core/               # Core reusable components
│   └── site/               # Site-specific components
├── assets/
│   ├── fonts/              # Custom fonts
│   └── icons/              # Icon components
├── lib/                    # Utility functions
├── constants/              # App constants
├── data/                   # Static data
└── scripts/                # Build and utility scripts
```

## 🎨 Design Philosophy

Page Kit follows these design principles:

- **Simplicity First** - Clean, minimal designs that focus on usability
- **Accessibility** - Built with accessibility in mind using Radix UI primitives
- **Performance** - Optimized for speed with modern React patterns
- **Consistency** - Unified design system across all components
- **Flexibility** - Easy to customize and extend for your needs

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and add tests if applicable
4. **Commit your changes**: `git commit -m 'Add amazing feature'`
5. **Push to the branch**: `git push origin feature/amazing-feature`
6. **Open a Pull Request**

Please read our [Contributing Guide](CONTRIBUTING.md) for more details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Motion](https://motion.dev/)
- Icons by [Lucide](https://lucide.dev/)
- UI primitives by [Radix UI](https://www.radix-ui.com/)

## 📞 Support

If you have any questions or need help:

- 📖 Check the [Documentation](/docs)
- 🐛 [Report Issues](https://github.com/imzahidhasan/page-kit/issues)
- 💬 [Start Discussions](https://github.com/imzahidhasan/page-kit/discussions)

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/imzahidhasan">Zahid Hasan</a>
  
  ⭐ Star this repo if you find it helpful!
</div>
