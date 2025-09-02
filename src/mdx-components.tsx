import type { MDXComponents } from "mdx/types";
import { createSlug } from "./lib/utils";
import { CodeBlock } from "./components/site/code-block";
import { ComponentRenderer } from "@/components/site/component-renderer";
import { Cli } from "@/components/site/cli";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/site/tabs";
import { PropsTable } from "@/components/site/props-table";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    h1: ({ children, ...props }: React.ComponentProps<"h1">) => {
      const id = createSlug(children?.toString() || "");
      return (
        <h1 id={id} {...props}>
          {children}
        </h1>
      );
    },

    h2: ({ children, ...props }: React.ComponentProps<"h2">) => {
      const id = createSlug(children?.toString() || "");
      return (
        <h2 id={id} {...props}>
          {children}
        </h2>
      );
    },

    h3: ({ children, ...props }: React.ComponentProps<"h3">) => {
      const id = createSlug(children?.toString() || "");
      return (
        <h3 id={id} {...props}>
          {children}
        </h3>
      );
    },
    CodeBlock,
    ComponentRenderer,
    Cli,
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
    PropsTable,
  };
}
