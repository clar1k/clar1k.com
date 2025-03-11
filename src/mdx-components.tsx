import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mb-4 mt-8 pb-2 text-4xl font-bold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-3 mt-6 text-3xl font-semibold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-2 mt-5 text-2xl font-medium">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mb-2 mt-4 text-xl font-medium">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="my-4 text-lg leading-relaxed">{children}</p>
    ),

    ul: ({ children }) => (
      <ul className="my-4 list-disc space-y-2 pl-8">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="my-4 list-decimal space-y-2 pl-8">{children}</ol>
    ),
    li: ({ children }) => <li className="text-lg">{children}</li>,

    blockquote: ({ children }) => (
      <blockquote className="my-4 border-l-4 py-1 pl-4 italic">
        {children}
      </blockquote>
    ),

    pre: ({ children }) => (
      <pre className="my-4 overflow-x-auto rounded-lg bg-gray-100 p-4 text-sm">
        {children}
      </pre>
    ),
    code: ({ children }) => (
      <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm">
        {children}
      </code>
    ),

    a: ({ href, children }) => (
      <a
        href={href}
        className="text-blue-600 underline transition-colors hover:text-blue-800"
      >
        {children}
      </a>
    ),

    hr: () => <hr className="my-8 border-t border-gray-300" />,
    ...components,
  };
}
