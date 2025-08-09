import type { DocItem } from "./component-registry";

// Core helper implementations that operate on a provided docs array.
export function getAllDocs(docs: DocItem[]): DocItem[] {
  return docs;
}

export function getDocsByCategory(docs: DocItem[]): Record<string, DocItem[]> {
  return docs.reduce<Record<string, DocItem[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});
}

export function getSidebarSections(docs: DocItem[]): Array<{
  title: string;
  items: DocItem[];
}> {
  const byCat = getDocsByCategory(docs);
  const priorityOrder = ["Getting Started"]; // precedence order
  return Object.keys(byCat)
    .sort((a, b) => {
      const ai = priorityOrder.indexOf(a);
      const bi = priorityOrder.indexOf(b);
      if (ai === -1 && bi === -1) return a.localeCompare(b);
      if (ai === -1) return 1;
      if (bi === -1) return -1;
      return ai - bi;
    })
    .map((cat) => ({
      title: cat,
      items: byCat[cat].sort((a, b) => a.title.localeCompare(b.title)),
    }));
}

export function getSearchIndex(
  docs: DocItem[]
): Array<DocItem & { path: string }> {
  return docs.map((d) => ({ ...d, path: `/docs/${d.slug}` }));
}

export function getDocBySlug(
  docs: DocItem[],
  slug: string
): DocItem | undefined {
  return docs.find((d) => d.slug === slug);
}

export function generateComponentStaticParams(
  docs: DocItem[]
): { slug: string }[] {
  return docs.map((d) => ({ slug: d.slug }));
}
