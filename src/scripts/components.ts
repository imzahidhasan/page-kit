import path from "path";
import { RegistryItemSchema, RegistryType } from "../types/types";

type ComponentType = Omit<
  RegistryItemSchema,
  "$schema" | "files" | "type" | "author"
> &
  Partial<Pick<RegistryItemSchema, "type" | "author">> & {
    path: string;
    files?: {
      path: string;
      name: string;
      content: string;
      type: RegistryType;
    }[];
  };

export const components: ComponentType[] = [
  {
    name: "checkbox",
    title: "Checkbox",
    description:
      "A smooth, animated checkbox component with customizable color, size, and duration.",
    path: path.join(__dirname, "../components/core/checkbox.tsx"),
    dependencies: ["motion"],
  },
  {
    name: "input",
    title: "Input",
    description:
      "A sleek, animated text input with a floating label that gracefully moves up on focus.",
    path: path.join(__dirname, "../components/core/input.tsx"),
    dependencies: ["motion"],
  },
];
