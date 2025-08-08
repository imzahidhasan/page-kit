import {
  Header,
  Sidebar,
  OnThisPage,
  Footer,
  MobileNav,
  Breadcrumb,
  MDXContentWrapper,
} from "@/components/site-component";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <MobileNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {/* Main Sidebar */}
          <Sidebar className="hidden lg:block" />

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="py-8 px-6">
              <Breadcrumb className="mb-8" />
              <article className="max-w-none">
                <MDXContentWrapper>{children}</MDXContentWrapper>
              </article>
            </div>
          </main>

          {/* On This Page Sidebar */}
          <OnThisPage className="hidden xl:block" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
