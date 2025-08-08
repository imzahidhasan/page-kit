import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  // Headings
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold mb-6 mt-8 text-gray-900 dark:text-gray-100">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-3xl font-semibold mb-4 mt-6 text-gray-800 dark:text-gray-200">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-2xl font-medium mb-3 mt-4 text-gray-700 dark:text-gray-300">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-xl font-medium mb-2 mt-3 text-gray-700 dark:text-gray-300">
      {children}
    </h4>
  ),

  // Paragraphs
  p: ({ children }) => (
    <p className="mb-4 text-gray-600 dark:text-gray-400 leading-relaxed">
      {children}
    </p>
  ),

  // Lists
  ul: ({ children }) => (
    <ul className="mb-4 ml-6 list-disc text-gray-600 dark:text-gray-400">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 ml-6 list-decimal text-gray-600 dark:text-gray-400">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="mb-1">{children}</li>,

  // Links
  a: ({ children, href }) => (
    <a
      href={href}
      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline"
    >
      {children}
    </a>
  ),

  // Code blocks
  pre: ({ children }) => (
    <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4 overflow-x-auto">
      {children}
    </pre>
  ),
  code: ({ children }) => (
    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">
      {children}
    </code>
  ),

  // Blockquotes
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 italic mb-4 text-gray-600 dark:text-gray-400">
      {children}
    </blockquote>
  ),

  // Strong and emphasis
  strong: ({ children }) => (
    <strong className="font-bold text-gray-900 dark:text-gray-100">
      {children}
    </strong>
  ),
  em: ({ children }) => (
    <em className="italic text-gray-800 dark:text-gray-200">{children}</em>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
