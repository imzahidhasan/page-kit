import Link from "next/link";
import { navigation } from "@/constants/navigation";

const page = () => {
  const allComponents = navigation.flatMap((section) =>
    section.children.filter(
      (child) =>
        child.href.startsWith("/docs/") &&
        child.href !== "/docs" &&
        child.href !== "/docs/installation" &&
        child.href !== "/docs/components"
    )
  );

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
          Components
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
          Discover our collection of beautifully crafted components designed to
          accelerate your development workflow.
        </p>
      </div>

      {/* Component List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allComponents.map((component) => (
          <Link
            key={component.href}
            href={component.href}
            className="block py-4 px-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors text-center no-underline"
          >
            <span className="text-zinc-900 dark:text-zinc-100 font-medium">
              {component.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
