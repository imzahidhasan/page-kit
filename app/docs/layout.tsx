"use client";

import {
  Header,
  Sidebar,
  OnThisPage,
  Footer,
  MobileNav,
  Breadcrumb,
} from "@/components/site-component";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />
      <MobileNav />

      {/* Main container with improved spacing */}
      <div className="relative">
        {/* Enhanced background with gradient mesh */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-900/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-100/20 via-transparent to-transparent dark:from-indigo-900/10"></div>
          {/* Subtle grid pattern - much more subtle */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)] bg-[size:24px_36px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"></div>
        </div>

        <div className="relative z-10">
          <div className="max-w-8xl mx-auto">
            <div className="flex">
              {/* Sidebar with improved styling */}
              <aside className="hidden lg:block w-72 flex-shrink-0">
                <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto scrollbar-thin">
                  <div className="py-8 px-6">
                    <Sidebar />
                  </div>
                </div>
              </aside>

              {/* Main content area with better proportions */}
              <main className="flex-1 min-w-0">
                <div className="py-8 px-4 sm:px-6 lg:px-8 xl:px-12">
                  {/* Enhanced breadcrumb styling */}
                  <div className="mb-8">
                    <Breadcrumb />
                  </div>

                  {/* Content wrapper with modern card design */}
                  <div className="relative">
                    <article className="prose prose-slate prose-lg max-w-none dark:prose-invert bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/60 rounded-3xl shadow-2xl shadow-slate-900/[0.03] dark:shadow-black/20">
                      {/* Content header with gradient border */}
                      <div className="relative overflow-hidden rounded-t-3xl">
                        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700"></div>
                        <div className="px-8 pt-12 lg:px-12 lg:pt-16">
                          {children}
                        </div>
                      </div>

                      {/* Content footer spacing */}
                      <div className="pb-12 lg:pb-16"></div>
                    </article>
                  </div>
                </div>
              </main>

              {/* Enhanced table of contents */}
              <aside className="hidden xl:block w-64 flex-shrink-0">
                <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto scrollbar-thin">
                  <div className="py-8 px-6">
                    <OnThisPage />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
