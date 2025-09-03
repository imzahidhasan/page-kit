# Contributing to Page Kit

Thank you for your interest in contributing to Page Kit! We welcome contributions from developers of all skill levels. This guide will help you get started with contributing to the project.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Setup](#development-setup)
4. [Project Structure](#project-structure)
5. [Making Changes](#making-changes)
6. [Adding New Components](#adding-new-components)
7. [Documentation](#documentation)
8. [Testing](#testing)
9. [Submitting Changes](#submitting-changes)
10. [Code Style](#code-style)
11. [Getting Help](#getting-help)

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please be respectful and constructive in all interactions.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Fork and Clone

1. **Fork the repository** on GitHub by clicking the "Fork" button
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/page-kit.git
   cd page-kit
   ```
3. **Add the upstream repository**:
   ```bash
   git remote add upstream https://github.com/imzahidhasan/page-kit.git
   ```

## Development Setup

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start the development server**:

   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000` to see the project running

## Project Structure

Understanding the project structure will help you navigate and contribute effectively:

```
src/
├── app/                    # Next.js app directory
│   ├── (landing)/         # Home Landing page components
│   └── docs/              # Documentation pages
├── components/
│   ├── core/              # Core reusable components
│   └── site/              # Site-specific components
├── assets/                # Icons and other assets
├── constants/             # Application constants
├── data/                  # Static data files
├── lib/                   # Utility functions
├── scripts/               # Build and utility scripts
└── types/                 # TypeScript type definitions
```

## Making Changes

### Before You Start

1. **Check existing issues** to see if your contribution is already being worked on
2. **Create an issue** if you're planning a significant change
3. **Keep changes focused** - one feature or fix per pull request

### Development Workflow

1. **Create a new branch** for your feature or fix:

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-fix-name
   ```

2. **Make your changes** following the project conventions

3. **Test your changes** locally:

   ```bash
   npm run dev
   npm run build
   npm run lint
   ```

4. **Commit your changes** with a clear message:
   ```bash
   git add .
   git commit -m "feat: add new button variant"
   # or
   git commit -m "fix: resolve input focus issue"
   ```

## Adding New Components

When adding new components to Page Kit, follow these guidelines:

### 1. Create the Component

Place your component in the appropriate directory:

- **Core components**: `src/components/core/`

### 2. Component Structure

```tsx
import { cn } from "@/lib/utils";

interface YourComponentProps {
  // Define your props here
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

const YourComponent = ({
  variant = "primary",
  className = "",
  children,
  ...props
}: YourComponentProps) => {
  return (
    <div
      className={cn(
        "base-styles",
        variant === "primary" ? "primary-styles" : "secondary-styles",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default YourComponent;
```

### 3. Add Documentation

Create documentation for your component:

1. **Create a doc page**: `src/app/docs/your-component/page.mdx`
2. **Add component preview**: `src/app/docs/your-component/your-component-preview.tsx` (as many preview need make here)
3. **Update navigation**: Add your component to `src/constants/navigation.ts`

### 4. Component Guidelines

- Use TypeScript for all components
- Support light and dark themes
- Make components responsive
- Include proper accessibility attributes
- Use Tailwind CSS for styling
- Follow the existing naming conventions

## Documentation

### Writing Documentation

- Use clear and concise language
- Include code examples
- Add prop tables for components
- Provide usage examples
- Document any breaking changes

### MDX Files

Documentation is written in MDX format, which allows you to include React components in Markdown:

````mdx
# Component Name

Description of what the component does.

## Usage

```tsx
import YourComponent from "@/components/core/your-component";

<YourComponent variant="primary">Hello World</YourComponent>;
```
````

### Manual Testing

1. **Test your changes** in the development environment
2. **Check responsiveness** on different screen sizes
3. **Verify dark/light theme** compatibility
4. **Test accessibility** with keyboard navigation

### Build Testing

Before submitting, ensure your changes don't break the build:

```bash
npm run build
npm run lint
```

## Submitting Changes

### Pull Request Process

1. **Push your changes** to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create a Pull Request** on GitHub with:

   - Clear title describing the change
   - Detailed description of what was changed and why
   - Screenshots/GIFs for visual changes
   - Reference to related issues

3. **Wait for review** and address any feedback

### Pull Request Guidelines

- Keep PRs focused and atomic
- Write clear commit messages
- Include tests if applicable
- Update documentation as needed
- Ensure CI checks pass

## Code Style

### TypeScript

- Use TypeScript for all new code
- Define proper interfaces for props
- Use meaningful variable and function names
- Add proper type annotations

### React

- Use functional components with hooks
- Follow React best practices
- Use proper prop drilling or context when needed

### Styling

- Use Tailwind CSS for styling
- Use motion for any type of animation
- Follow the existing design system
- Support both light and dark themes
- Ensure responsive design

### Formatting

The project uses ESLint for code formatting. Run:

```bash
npm run lint
```

## Getting Help

### Communication Channels

- **GitHub Issues**: For bug reports and feature requests
- **GitHub Discussions**: For questions and general discussion
- **Pull Request Comments**: For code-specific discussions

### Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/)
- [Motion Documentation](https://motion.dev/)

## Recognition

Contributors will be recognized in the project's documentation and release notes. We appreciate every contribution, no matter how small!

## License

By contributing to Page Kit, you agree that your contributions will be licensed under the [MIT License](./LICENSE).

Thank you for contributing to Page Kit! 🚀
