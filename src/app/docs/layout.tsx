import { ReactNode } from "react";
import Header from "@/components/site/header";
import Sidebar from "@/components/site/sidebar";
// import { ScrollArea } from "@/components/site/scroll-area";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex-col bg-white dark:bg-neutral-950 text-neutral-800 dark:text-white relative">
      <Header />
      <div className="mx-auto max-w-[1536px] text-white flex flex-1 md:space-x-16">
        <Sidebar />
        <main className="flex-1 py-6 pb-16 pt-8 min-w-0 max-w-4xl px-4">
          <div className="prose prose-zinc dark:prose-invert prose-h1:text-3xl prose-h1:font-semibold prose-h2:text-xl prose-h2:font-semibold prose-h2:mt-14 prose-h3:text-lg prose-h3:font-medium prose-h3:scroll-m-20 max-w-full">
            {children}
          </div>
        </main>
        <aside className="hidden md:block w-[200px] h-[calc(100dvh-57px)] sticky top-[57px]">
          {/* <ScrollArea className="w-full h-full"></ScrollArea> */}
        </aside>
      </div>
    </div>
  );
}
