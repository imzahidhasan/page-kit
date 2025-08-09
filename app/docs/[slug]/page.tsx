import { notFound } from "next/navigation";
import getMDXComponent from "@/lib/get-mdx-component";
import DocumentationSkeleton from "@/components/site-component/documentation-skeleton";
import React, { Suspense } from "react";

export default async function ComponentDocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const MDXComponent = await getMDXComponent(slug);
  if (!MDXComponent) notFound();

  return (
    <div className="max-w-none">
      <Suspense fallback={<DocumentationSkeleton />}>
        <div className="prose prose-gray max-w-none dark:prose-invert">
          <MDXComponent />
        </div>
      </Suspense>
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

export { generateComponentStaticParams as generateStaticParams } from "@/lib/registry-helpers";
export { generateMetadata } from "@/lib/generate-metadata";
