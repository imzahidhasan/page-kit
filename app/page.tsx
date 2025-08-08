import Link from "next/link";

export default function Page() {
  return (
    <main className="relative min-h-dvh grid place-items-center overflow-hidden px-4 py-14 text-slate-100 bg-[#0b0c10] bg-gradient-to-br from-indigo-950/30 via-cyan-900/20 to-slate-950">
      <div className="w-full max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-medium uppercase tracking-[0.14em] text-slate-300/90 border border-white/10 bg-white/5 backdrop-blur-md ring-1 ring-white/5 shadow-[0_0_0_1px_rgba(255,255,255,.06)_inset]">
          Introducing
        </div>

        <h1 className="mt-4 mb-3 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-none tracking-tight">
          Page&nbsp;
          <span className="bg-gradient-to-r from-purple-500 to-emerald-400 bg-clip-text text-transparent">
            Kit
          </span>
        </h1>

        <p className="mt-1 mx-auto max-w-3xl text-slate-400 text-base sm:text-lg lg:text-xl">
          A composable, accessible, and themeable UI component library for
          modern React apps.
        </p>

        <div className="mt-8 mb-12 flex gap-3 justify-center flex-wrap">
          <Link
            href="/docs/getting-started"
            className="inline-flex items-center justify-center px-4 py-3 rounded-xl bg-gradient-to-b from-purple-500 to-purple-600 border border-white/10 text-white font-semibold transition-all duration-150 hover:-translate-y-0.5 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/50"
            aria-label="Get started with Page Kit"
          >
            Get Started
          </Link>
          <a
            href="https://github.com/your-org/page-kit"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-4 py-3 rounded-xl bg-slate-800 border border-slate-600 text-white font-semibold transition-all duration-150 hover:-translate-y-0.5 hover:bg-slate-700 hover:border-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300/40"
            aria-label="Open Page Kit on GitHub"
          >
            GitHub
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl mx-auto mb-6">
          <section className="text-left bg-white/[0.03] border border-white/10 rounded-2xl p-5 backdrop-blur-sm ring-1 ring-white/5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)] transition-colors">
            <div className="text-xs text-slate-400 uppercase tracking-[0.18em] mb-2">
              Install
            </div>
            <pre
              className="m-0 p-4 bg-slate-950/95 border border-slate-700 rounded-xl overflow-auto leading-6 text-[13.5px] text-slate-200 font-mono"
              aria-label="Installation command"
            >
              <code>npm install page-kit</code>
            </pre>
          </section>

          <section className="text-left bg-white/[0.03] border border-white/10 rounded-2xl p-5 backdrop-blur-sm ring-1 ring-white/5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)] transition-colors">
            <div className="text-xs text-slate-400 uppercase tracking-[0.18em] mb-2">
              Usage
            </div>
            <pre
              className="m-0 p-4 bg-slate-950/95 border border-slate-700 rounded-xl overflow-auto leading-6 text-[13.5px] text-slate-200 font-mono"
              aria-label="Usage example"
            >
              <code>{`import { Button, Card, Text } from "page-kit";

export default function Demo() {
  return (
    <Card>
      <Text as="h3">Welcome to Page Kit</Text>
      <Text as="p" tone="muted">
        Build consistent, accessible UIs faster.
      </Text>
      <Button variant="primary" onClick={() => alert("Hello Page Kit!")}>
        Try it
      </Button>
    </Card>
  );
}`}</code>
            </pre>
          </section>
        </div>

        <ul
          className="mt-8 mx-auto p-0 list-none grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-4xl text-slate-300 text-[15px]"
          aria-label="Key features"
        >
          <li className="flex items-start gap-3 rounded-lg p-2 hover:bg-white/5 transition-colors">
            <svg
              className="mt-1 size-4 text-emerald-400"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 10l3 3 9-9"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Accessible by default (WAI-ARIA best practices)</span>
          </li>
          <li className="flex items-start gap-3 rounded-lg p-2 hover:bg-white/5 transition-colors">
            <svg
              className="mt-1 size-4 text-emerald-400"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 10l3 3 9-9"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Composable primitives and polished components</span>
          </li>
          <li className="flex items-start gap-3 rounded-lg p-2 hover:bg-white/5 transition-colors">
            <svg
              className="mt-1 size-4 text-emerald-400"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 10l3 3 9-9"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Framework-friendly and themeable</span>
          </li>
          <li className="flex items-start gap-3 rounded-lg p-2 hover:bg-white/5 transition-colors">
            <svg
              className="mt-1 size-4 text-emerald-400"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 10l3 3 9-9"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Tree-shakeable and TypeScript-first</span>
          </li>
        </ul>
      </div>

      {/* Background glows */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 -top-[12%] h-[700px] w-[900px] -translate-x-1/2 rounded-full blur-3xl bg-radial [--tw-gradient-position:50%_50%] from-purple-500/25 via-transparent to-transparent opacity-70 animate-pulse-slow" />
        <div className="absolute left-[8%] top-[8%] h-[520px] w-[620px] rounded-full blur-3xl bg-radial [--tw-gradient-position:70%_30%] from-emerald-400/20 via-transparent to-transparent opacity-60 animate-float" />
      </div>
    </main>
  );
}
