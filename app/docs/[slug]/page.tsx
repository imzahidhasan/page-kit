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
    </div>
  );
}

export { generateComponentStaticParams as generateStaticParams } from "@/lib/registry-helpers";
export { generateMetadata } from "@/lib/generate-metadata";
