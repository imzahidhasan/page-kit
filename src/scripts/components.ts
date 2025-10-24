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
    name: "button",
    title: "Button",
    description:
      "A smooth, animated button component with customizable color, size, and duration.",
    path: path.join(__dirname, "../components/core/button.tsx"),
    dependencies: ["motion"],
  },
];
