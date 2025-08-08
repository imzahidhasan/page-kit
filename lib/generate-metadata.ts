import { Metadata } from "next";

// Generate metadata for each component page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;

  // Capitalize first letter for title
  const title = slug.charAt(0).toUpperCase() + slug.slice(1);

  return {
    title: `${title} Component - Page Kit`,
    description: `Documentation and examples for the ${title} component in Page Kit UI library.`,
    openGraph: {
      title: `${title} Component - Page Kit`,
      description: `Learn how to use the ${title} component with examples and API reference.`,
    },
  };
}
