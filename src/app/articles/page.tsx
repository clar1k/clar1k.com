import Link from "next/link";
import { ArticleItem } from "~/components/article-item";
import { ArticleList } from "~/components/article-list";
import { Article } from "~/types/types";

export default function ArticlesPage() {
  return (
    <main
      className="p flex w-full justify-center py-12 md:py-24 lg:py-32 lg:pt-24"
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
        <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Articles
            </h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Thoughts, tutorials, and insights on web development, design, and
              technology.
            </p>
          </div>
        </div>
        <ArticleList articles={articles} />
      </div>
    </main>
  );
}

const articles: Article[] = [
  {
    id: 1,
    title: "Building Modern Web Applications with Next.js",
    excerpt:
      "Learn how to leverage the power of Next.js to create fast, SEO-friendly web applications.",
    tags: ["Next.js", "React", "Web Development"],
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS for Rapid UI Development",
    excerpt:
      "Discover how Tailwind CSS can dramatically speed up your UI development process.",
    tags: ["Tailwind CSS", "CSS", "UI Design"],
  },
  {
    id: 3,
    title: "The Future of Frontend Development in 2025",
    excerpt:
      "Explore the latest trends and technologies shaping the future of frontend development.",
    tags: ["Frontend", "Trends", "Web"],
  },
  {
    id: 4,
    title: "Creating Accessible Web Experiences",
    excerpt:
      "Why accessibility matters and how to implement best practices for web applications.",
    tags: ["Accessibility", "a11y", "UX"],
  },
  {
    id: 5,
    title: "Optimizing Performance in React Applications",
    excerpt:
      "Practical techniques and strategies to improve the performance of your React applications.",
    tags: ["React", "Performance", "JavaScript"],
  },
  {
    id: 6,
    title: "Getting Started with TypeScript",
    excerpt:
      "A beginner's guide to TypeScript and how it can improve your JavaScript development experience.",
    tags: ["TypeScript", "JavaScript", "Web Development"],
  },
];
