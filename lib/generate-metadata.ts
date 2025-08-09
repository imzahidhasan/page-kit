import { Metadata } from "next";
import { getDocBySlug } from "./registry-helpers";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDocBySlug(slug);
  const baseTitle =
    doc?.title ||
    slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const description =
    doc?.description ||
    `Documentation and examples for the ${baseTitle} component.`;
  return {
    title: `${baseTitle} – Page Kit`,
    description,
    openGraph: { title: `${baseTitle} – Page Kit`, description },
  };
}
