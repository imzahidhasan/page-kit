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
          <article
            className="prose prose-lg prose-slate dark:prose-invert max-w-full
            prose-headings:scroll-mt-20
            prose-h1:text-4xl prose-h1:font-bold prose-h1:tracking-tight prose-h1:mb-4
            prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-zinc-200 prose-h2:pb-2 dark:prose-h2:border-zinc-800
            prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3
            prose-h4:text-lg prose-h4:font-medium prose-h4:mt-6
            prose-p:text-zinc-700 dark:prose-p:text-zinc-300 prose-p:leading-7
            prose-a:text-blue-600 prose-a:no-underline prose-a:font-medium hover:prose-a:text-blue-700 hover:prose-a:underline dark:prose-a:text-blue-400 dark:hover:prose-a:text-blue-300
            prose-strong:text-zinc-900 dark:prose-strong:text-zinc-100 prose-strong:font-semibold
            prose-code:text-pink-600 dark:prose-code:text-pink-400 prose-code:font-medium prose-code:before:content-[''] prose-code:after:content-['']
            prose-pre:bg-zinc-900 dark:prose-pre:bg-zinc-950 prose-pre:border prose-pre:border-zinc-800 prose-pre:rounded-lg
            prose-ul:my-6 prose-li:my-2
            prose-ol:my-6 prose-ol:list-decimal
            prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-blue-950/30 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r
            prose-img:rounded-lg prose-img:shadow-lg
            prose-hr:border-zinc-200 dark:prose-hr:border-zinc-800 prose-hr:my-12
            prose-table:text-sm prose-thead:border-b-2 prose-thead:border-zinc-300 dark:prose-thead:border-zinc-700
            prose-th:text-left prose-th:font-semibold prose-th:p-3
            prose-td:p-3 prose-tr:border-b prose-tr:border-zinc-200 dark:prose-tr:border-zinc-800"
          >
            {children}
          </article>
        </main>
        <aside className="hidden md:block w-[200px] h-[calc(100dvh-57px)] sticky top-[57px]">
          {/* <ScrollArea className="w-full h-full"></ScrollArea> */}
        </aside>
      </div>
    </div>
  );
}
