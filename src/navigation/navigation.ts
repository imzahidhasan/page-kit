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
    ],
  },
  {
    label: "UI Components",
    children: [
      { label: "Button", href: "/docs/button" },
    ]
  },
  {
    label: "Login & Signup",
    children: [
      { label: "Login Page 1", href: "/docs/login-page-1" },
      { label: "Login Page 2", href: "/docs/login-page-2" },
    ]
  }
  
];



