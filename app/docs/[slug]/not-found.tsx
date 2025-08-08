import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-none text-center py-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Component Not Found
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          The component documentation you&apos;re looking for doesn&apos;t exist
          yet.
        </p>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Available Components
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/docs/button"
            className="p-4 bg-white dark:bg-gray-700 rounded-md border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
          >
            <h3 className="font-medium text-gray-900 dark:text-white">
              Button
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Interactive button component
            </p>
          </Link>
          <Link
            href="/docs/input"
            className="p-4 bg-white dark:bg-gray-700 rounded-md border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
          >
            <h3 className="font-medium text-gray-900 dark:text-white">Input</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Text input field component
            </p>
          </Link>
          <Link
            href="/docs/card"
            className="p-4 bg-white dark:bg-gray-700 rounded-md border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
          >
            <h3 className="font-medium text-gray-900 dark:text-white">Card</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Flexible container component
            </p>
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-400">
          Want to contribute documentation for a component?
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/docs"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Docs
          </Link>
          <a
            href="https://github.com/yourusername/page-kit/issues/new"
            className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Request Component
          </a>
        </div>
      </div>
    </div>
  );
}
