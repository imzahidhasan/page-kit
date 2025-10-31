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
│   └── site/              # Site-specific components
├── registry/              # Component registry
│   ├── blocks/            # Block components
│   └── ui/                # UI components (e.g., button)
├── assets/                # Icons and other assets
│   ├── fonts/             # Font files
│   └── icons/             # Icon components
├── lib/                   # Utility functions
├── meta/                  # Metadata configuration
├── navigation/            # Navigation configuration
├── types/                 # TypeScript type definitions
└── mdx-components.tsx     # MDX component configuration
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

Place your component in the appropriate directory based on its type:

- **UI components**: `src/registry/ui/` - For reusable UI components like buttons, inputs, cards, etc.
- **Block components**: `src/registry/blocks/` - For larger, composed sections like hero sections, feature grids, etc.

**Choosing between UI and Blocks:**

- Use `ui/` for atomic, reusable components that serve as building blocks
- Use `blocks/` for pre-built sections that combine multiple UI components

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
2. **Add component preview**: `src/app/docs/your-component/your-component-preview.tsx` (create as many preview files as needed)
3. **Update navigation**: Add your component to `src/navigation/navigation.ts`

### 4. Register Your Component

Add your component to `registry.json` at the root level. This is essential for making your component available through the CLI.

> **💡 Quick Tip:** Most contributors will use `registry:ui` for simple components and `registry:block` for complex sections. If unsure, start with `registry:ui`.

#### Understanding Registry Types

Choose the correct type for your component:

| Type                 | When to Use                                | Location                      | Example                        |
| -------------------- | ------------------------------------------ | ----------------------------- | ------------------------------ |
| `registry:ui`        | Single-file UI components and primitives   | `src/registry/ui/`            | Button, Input, Card, Badge     |
| `registry:block`     | Complex components with multiple files     | `src/registry/blocks/`        | Hero Section, Feature Grid     |
| `registry:component` | Simple standalone components               | `src/registry/ui/`            | Avatar, Tooltip, Alert         |
| `registry:hook`      | Custom React hooks                         | `src/registry/ui/`            | useLocalStorage, useMediaQuery |
| `registry:lib`       | Utility functions and libraries            | `src/registry/ui/`            | utils, cn, formatters          |
| `registry:page`      | Page components or file-based routes       | Dashboard page, Settings page |
| `registry:file`      | Miscellaneous files (configs, etc.)        | .env templates, config files  |
| `registry:style`     | Registry styles (theme variations)         | new-york, default             |
| `registry:theme`     | Theme configurations                       | dark, light, custom themes    |
| `registry:item`      | Universal registry items (use when unsure) | Generic components            |

#### Basic Registry Entry

Here's a minimal example for a UI component:

```json
{
  "name": "your-component",
  "type": "registry:ui",
  "title": "Your Component",
  "description": "A brief description of what your component does.",
  "files": [
    {
      "path": "src/registry/ui/your-component.tsx",
      "type": "registry:ui"
    }
  ]
}
```

#### Complete Registry Entry

For more complex components, include all relevant properties:

```json
{
  "name": "advanced-button",
  "type": "registry:ui",
  "title": "Advanced Button",
  "description": "A customizable button component with various styles and sizes.",
  "dependencies": ["motion", "class-variance-authority"],
  "registryDependencies": ["button"],
  "files": [
    {
      "path": "src/registry/ui/advanced-button.tsx",
      "type": "registry:ui"
    }
  ],
  "cssVars": {
    "light": {
      "button-primary": "220 100% 50%"
    },
    "dark": {
      "button-primary": "220 100% 60%"
    }
  }
}
```

#### Registry Property Guide

**Required Properties:**

- **name**: Unique identifier (use kebab-case) - e.g., `"hero-section"`, `"custom-button"`
- **type**: Component type (see table above) - e.g., `"registry:ui"`, `"registry:block"`
- **files**: Array of component files with their paths and types

**Recommended Properties:**

- **title**: Human-readable display name - e.g., `"Hero Section"`
- **description**: Clear explanation of what the component does

**Optional Properties:**

- **author**: Component author - e.g., `"John Doe <john@doe.com>"` (can be same as registry author)
- **dependencies**: NPM packages needed - e.g., `["motion", "zod@3.0.0", "class-variance-authority"]`
- **registryDependencies**: Other Page Kit components this depends on - e.g., `["button", "card"]`
  - Use component names for Page Kit components: `["button", "input"]`
  - Use namespaced names: `["@acme/input-form"]`
  - Use URLs for external registries: `["https://example.com/r/component.json"]`
- **cssVars**: CSS variables for theming
  - `theme`: Theme-level variables (e.g., fonts)
  - `light`: Light mode color values
  - `dark`: Dark mode color values
- **css**: Add custom CSS rules, keyframes, plugins
- **envVars**: Environment variables needed (development only, not production!)
- **docs**: Additional installation instructions or notes
- **categories**: Organize components - e.g., `["sidebar", "dashboard"]`
- **meta**: Additional custom metadata - any key/value pairs you need

#### Property Examples

**Author:**

```json
{
  "author": "Jane Smith <jane@example.com>"
}
```

**Dependencies (NPM packages):**

```json
{
  "dependencies": ["motion", "zod@3.0.0", "lucide-react"]
}
```

**Registry Dependencies (other components):**

```json
{
  "registryDependencies": ["button", "input", "@acme/form"]
}
```

**CSS Variables:**

```json
{
  "cssVars": {
    "theme": {
      "font-heading": "Poppins, sans-serif"
    },
    "light": {
      "brand": "220 100% 50%",
      "radius": "0.5rem"
    },
    "dark": {
      "brand": "220 100% 60%"
    }
  }
}
```

**Environment Variables:**

```json
{
  "envVars": {
    "NEXT_PUBLIC_APP_URL": "http://localhost:3000",
    "OPENAI_API_KEY": ""
  }
}
```

**Documentation Notes:**

```json
{
  "docs": "To get an API key, sign up at https://example.com. Add the key to your .env.local file."
}
```

**Categories:**

```json
{
  "categories": ["authentication", "forms", "dashboard"]
}
```

#### For Block Components

Blocks often have multiple files (component + hook):

```json
{
  "name": "hero-section",
  "type": "registry:block",
  "title": "Hero Section",
  "description": "A hero section with title, description, and CTA buttons.",
  "author": "Your Name <your@email.com>",
  "registryDependencies": ["button"],
  "files": [
    {
      "path": "src/registry/blocks/hero-section.tsx",
      "type": "registry:block"
    }
  ],
  "categories": ["landing", "hero"]
}
```

#### For Page or File Types

When using `registry:page` or `registry:file`, you must specify a `target`:

```json
{
  "name": "dashboard-page",
  "type": "registry:page",
  "title": "Dashboard Page",
  "description": "Main dashboard page layout.",
  "files": [
    {
      "path": "src/registry/pages/dashboard.tsx",
      "type": "registry:page",
      "target": "app/dashboard/page.tsx"
    }
  ]
}
```

Use `~` for root-level files:

```json
{
  "files": [
    {
      "path": "src/registry/files/env-example",
      "type": "registry:file",
      "target": "~/.env.example"
    }
  ]
}
```

### 5. Component Guidelines

- Use TypeScript for all components
- Support light and dark themes
- Make components responsive
- Include proper accessibility attributes
- Use Tailwind CSS for styling
- Follow the existing naming conventions

## Quick Reference: Adding Components

Not sure where to start? Use this quick guide:

### Step-by-Step Checklist

- [ ] **Step 1**: Decide component type (UI vs Block)
  - Simple, reusable? → `src/registry/ui/`
  - Complex section? → `src/registry/blocks/`
- [ ] **Step 2**: Create your component file
  - Use TypeScript
  - Export as default
  - Follow naming conventions (kebab-case for files)
- [ ] **Step 3**: Add to `registry.json`
  - Set correct `type` (`registry:ui` or `registry:block`)
  - List any `dependencies` (npm packages)
  - List any `registryDependencies` (other components)
- [ ] **Step 4**: Create documentation
  - Add `src/app/docs/your-component/page.mdx`
  - Add preview files if needed
- [ ] **Step 5**: Update navigation
  - Add to `src/navigation/navigation.ts`
- [ ] **Step 6**: Test
  - Run `npm run dev` and verify
  - Check light/dark themes
  - Test responsiveness

### Common Scenarios

**Scenario 1: Simple UI Component (Button Variant)**

```json
{
  "name": "my-button",
  "type": "registry:ui",
  "title": "My Button",
  "description": "A custom button variant.",
  "author": "Your Name <your@email.com>",
  "dependencies": ["motion", "class-variance-authority"],
  "registryDependencies": ["button"],
  "files": [
    {
      "path": "src/registry/ui/my-button.tsx",
      "type": "registry:ui"
    }
  ]
}
```

**Scenario 2: Block Component (Hero Section)**

```json
{
  "name": "hero-section",
  "type": "registry:block",
  "title": "Hero Section",
  "description": "A hero section with title, description, and CTA buttons.",
  "author": "Your Name <your@email.com>",
  "registryDependencies": ["button"],
  "files": [
    {
      "path": "src/registry/blocks/hero-section.tsx",
      "type": "registry:block"
    }
  ],
  "categories": ["landing", "hero"]
}
```

**Scenario 3: Custom Hook**

```json
{
  "name": "use-local-storage",
  "type": "registry:hook",
  "title": "useLocalStorage",
  "description": "A hook for managing localStorage with React state.",
  "author": "Your Name <your@email.com>",
  "files": [
    {
      "path": "src/registry/ui/use-local-storage.ts",
      "type": "registry:hook"
    }
  ],
  "categories": ["hooks", "storage"]
}
```

**Scenario 4: Utility Library**

```json
{
  "name": "date-utils",
  "type": "registry:lib",
  "title": "Date Utilities",
  "description": "Utility functions for date formatting and manipulation.",
  "author": "Your Name <your@email.com>",
  "dependencies": ["date-fns@3.0.0"],
  "files": [
    {
      "path": "src/registry/ui/date-utils.ts",
      "type": "registry:lib"
    }
  ]
}
```

**Scenario 5: Page Component**

```json
{
  "name": "dashboard-page",
  "type": "registry:page",
  "title": "Dashboard Page",
  "description": "Complete dashboard page layout.",
  "author": "Your Name <your@email.com>",
  "registryDependencies": ["card", "button"],
  "files": [
    {
      "path": "src/registry/pages/dashboard.tsx",
      "type": "registry:page",
      "target": "app/dashboard/page.tsx"
    }
  ]
}
```

**Scenario 6: Config File**

```json
{
  "name": "env-example",
  "type": "registry:file",
  "title": "Environment Variables Example",
  "description": "Example environment variables file.",
  "files": [
    {
      "path": "src/registry/files/.env.example",
      "type": "registry:file",
      "target": "~/.env.example"
    }
  ],
  "docs": "Copy this file to .env.local and fill in your values."
}
```

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
