import type { RegistryItemSchema } from "../types/types";

type ComponentType = Omit<
  RegistryItemSchema,
  "$schema" | "files" | "type" | "author"
> &
  Partial<Pick<RegistryItemSchema, "type" | "author">> & {
    path: string;
  };

export const components = [
  {
    name: "button",
    title: "Button",
    description:
      "A smooth, animated button component with customizable color, size, and duration.",
    path: "src/components/core/button.tsx",
    dependencies: ["motion"],
  },
  {
    name: "demo",
    title: "Demo",
    description: "A demo component for page-kit.",
    path: "src/components/core/demo.tsx",
    dependencies: [],
  },
] as const satisfies readonly ComponentType[];
