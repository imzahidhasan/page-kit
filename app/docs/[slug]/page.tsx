import { notFound } from "next/navigation";
import { Suspense } from "react";
import getMDXComponent from "@/lib/get-mdx-component";
import DocumentationSkeleton from "@/components/site-component/documentation-skeleton";

export { generateMetadata } from "@/lib/generate-metadata";

// Component breadcrumb and navigation data
const getComponentInfo = (slug: string) => {
  const componentMap: Record<
    string,
    { title: string; category: string; description: string }
  > = {
    button: {
      title: "Button",
      category: "Form Controls",
      description:
        "A versatile button component with multiple variants, sizes, and states.",
    },
    input: {
      title: "Input",
      category: "Form Controls",
      description: "Text input component with validation and different states.",
    },
    card: {
      title: "Card",
      category: "Layout",
      description: "A flexible container component for displaying content.",
    },
    modal: {
      title: "Modal",
      category: "Overlays",
      description:
        "A dialog component for displaying content above the main interface.",
    },
    // Add more components as needed
  };

  return (
    componentMap[slug] || {
      title: slug.charAt(0).toUpperCase() + slug.slice(1),
      category: "Components",
      description: `Documentation for the ${slug} component.`,
    }
  );
};



// Main page component
export default async function ComponentDocPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const componentInfo = getComponentInfo(slug);

  // Try to load the MDX component
  const MDXComponent = await getMDXComponent(slug);

  // If no MDX file found, show 404
  if (!MDXComponent) {
    notFound();
  }

  return (
    <div className="max-w-none">
      {/* Component Header */}
      <div className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
            {componentInfo.category}
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {componentInfo.title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          {componentInfo.description}
        </p>
      </div>

      {/* MDX Content */}
      <Suspense fallback={<DocumentationSkeleton />}>
        <div className="prose prose-gray max-w-none dark:prose-invert">
          <MDXComponent />
        </div>
      </Suspense>

      {/* Navigation Footer */}
      <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Was this page helpful?
          </div>
          <div className="flex gap-4">
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              Edit on GitHub
            </button>
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              Report Issue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for known components (optional, for better performance)
export function generateStaticParams() {
  // List of components that have documentation
  const componentSlugs = [
    "button",
    "input",
    "card",
    "modal",
    // Add more component slugs as you create them
  ];

  return componentSlugs.map((slug) => ({
    slug: slug,
  }));
}
