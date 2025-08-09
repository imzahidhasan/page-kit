// Wrapper helper functions around the docs registry. Kept separate so that
// component-registry.ts focuses purely on data definitions.
import docs, { type DocItem } from "./component-registry"; // circular import safe: docs array already evaluated
import {
  getSidebarSections as baseGetSidebarSections,
  getSearchIndex as baseGetSearchIndex,
  getDocBySlug as baseGetDocBySlug,
  generateComponentStaticParams as baseGenerateStaticParams,
} from "./registry-api";

/** Return a shallow copy of all registered docs (immutable to callers). */
export function getDocs(): DocItem[] {
  return docs.slice();
}

/** Sidebar sections grouped and sorted by category. */
export function getSidebarSections(): Array<{
  title: string;
  items: DocItem[];
}> {
  return baseGetSidebarSections(docs);
}

/** Search index with computed path field. */
export function getSearchIndex(): Array<DocItem & { path: string }> {
  return baseGetSearchIndex(docs);
}

/** Lookup a single doc by slug. */
export function getDocBySlug(slug: string): DocItem | undefined {
  return baseGetDocBySlug(docs, slug);
}

/** Static params used by Next.js for SSG of dynamic [slug] routes. */
export function generateComponentStaticParams(): { slug: string }[] {
  return baseGenerateStaticParams(docs);
}

// Re-export DocItem type here for convenience when importing helpers only.
export type { DocItem };
