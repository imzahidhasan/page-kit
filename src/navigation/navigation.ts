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
      { label: "CLI Guide", href: "/docs/cli-guide" },
      { label: "Components", href: "/docs/components" }
    ],
  },
  
];



