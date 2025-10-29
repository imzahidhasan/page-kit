import type { MDXComponents } from "mdx/types";
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
      return <h1 {...props}>{children}</h1>;
    },

    h2: ({ children, ...props }: React.ComponentProps<"h2">) => {
      return <h2 {...props}>{children}</h2>;
    },

    h3: ({ children, ...props }: React.ComponentProps<"h3">) => {
      return <h3 {...props}>{children}</h3>;
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
