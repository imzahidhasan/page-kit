import Button from "@/components/mdx-documentation/button.mdx";

export default function Page() {
  return (
    <div className="max-w-none">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Getting Started with Page Kit
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          Welcome to Page Kit, a comprehensive toolkit for building beautiful
          and accessible web components. This documentation will help you get up
          and running quickly.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Installation
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Get started by installing Page Kit in your project:
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
            <code className="text-sm">npm install @page-kit/components</code>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Quick Start
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Once installed, you can start using components right away:
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
            <pre className="text-sm overflow-x-auto">
              <code>{`import { Button } from '@page-kit/components';

function MyApp() {
  return <Button variant="primary">Click me</Button>;
}`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Button Component Example
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Here&apos;s an interactive example of our Button component:
          </p>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <Button />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Features
          </h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Fully accessible components following WCAG guidelines
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Dark mode support out of the box
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Customizable themes and styling
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              TypeScript support
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Tree-shakable and lightweight
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Next Steps
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Ready to dive deeper? Here are some recommended next steps:
          </p>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>
              • Explore the complete{" "}
              <a
                href="/docs/components"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Component Library
              </a>
            </li>
            <li>
              • Learn about{" "}
              <a
                href="/docs/theming"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Theming and Customization
              </a>
            </li>
            <li>
              • Check out{" "}
              <a
                href="/docs/examples"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Examples and Templates
              </a>
            </li>
            <li>
              • Read about{" "}
              <a
                href="/docs/advanced/accessibility"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Accessibility Best Practices
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
