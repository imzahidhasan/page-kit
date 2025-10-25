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
      { label: "Components", href: "/docs/components" }
    ],
  },
  {
    label: "Basic",
    children: [
      { label: "Button", href: "/docs/button" },
      { label: "Demo", href: "/docs/demo" }
    ],
  },
];
