async function getMDXComponent(slug: string) {
  try {
  
    const mdx_module = await import(
      `@/components/mdx-documentation/${slug}.mdx`
    );
    return mdx_module.default;
  } catch (error) {
    console.error(`Could not load MDX file for slug: ${slug}`, error);
    return null;
  }
}

export default getMDXComponent;
