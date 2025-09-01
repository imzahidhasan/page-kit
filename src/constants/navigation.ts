type NavigationChild = {
  label: string;
  href: string;
};
type NavigationItem = {
  label: string;
  children: NavigationChild[];
};

export const navigation: NavigationItem[] = [
  {
    label: "Get Started",
    children: [
      { label: "Introduction", href: "/docs" },
      { label: "Installation", href: "/docs/installation" },
    ],
  },
  {
    label: "Forms",
    children: [
      { label: "Checkbox", href: "/docs/checkbox" },
      { label: "Input", href: "/docs/input" },
    ],
  },
];
