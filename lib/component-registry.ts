export type DocItem = {
  slug: string;
  title: string;
  description?: string;
  category: string;
  keywords?: string[];
};

const docs: DocItem[] = [
  {
    slug: "get-started",
    title: "Get Started",
    description: "Overview & quick start guide.",
    category: "Getting Started",
    keywords: ["intro", "overview", "quick start"],
  },
  {
    slug: "installation",
    title: "Installation",
    description: "How to install and configure Page Kit.",
    category: "Getting Started",
    keywords: ["install", "setup", "configuration"],
  },
  {
    slug: "button",
    title: "Button",
    description: "Buttons for actions and CTAs.",
    category: "Components",
    keywords: ["cta", "action", "primary", "secondary"],
  },
  {
    slug: "card",
    title: "Card",
    description: "Cards for grouping related content.",
    category: "UI",
    keywords: ["container", "panel", "surface"],
  },
  {
    slug: "input",
    title: "Input",
    description: "Text inputs and form fields.",
    category: "Components",
    keywords: ["form", "field", "text", "control"],
  },
];

export default docs;
