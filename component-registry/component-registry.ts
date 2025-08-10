export type DocItem = {
  slug: string;
  title: string;
  description?: string;
  category: string;
};

const docs: DocItem[] = [
  {
    slug: "get-started",
    title: "Get Started",
    description: "Overview & quick start guide.",
    category: "Getting Started",
  },
  {
    slug: "installation",
    title: "Installation",
    description: "How to install and configure Page Kit.",
    category: "Getting Started",
  },
  {
    slug: "button",
    title: "Button",
    description: "Buttons for actions and CTAs.",
    category: "Components",
  },
];

export default docs;
