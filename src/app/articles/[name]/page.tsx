import Hello from "./hello.mdx";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = {
    title: "Building Modern Web Applications with Next.js",
    date: "March 5, 2025",
    tags: ["Next.js", "React", "Web Development"],
    content: `
    `,
  };

  return (
    <main
      className="flex w-full justify-center py-12 md:py-24 lg:py-32"
      style={{
        backgroundColor: "#f8f9fa",
        backgroundImage: `
          linear-gradient(to right, #e5e7eb 1px, transparent 1px),
          linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      <div className="container px-4 md:px-6">
        <article className="mx-auto max-w-3xl rounded-lg border bg-white p-6 shadow-sm md:p-8 lg:p-10">
          <div className="mb-8">
            <div className="mb-4">
              <time className="text-sm text-gray-500">{article.date}</time>
              <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                {article.title}
              </h1>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="prose prose-gray lg:prose-lg max-w-none">
            <Hello />
          </div>
        </article>
      </div>
    </main>
  );
}
