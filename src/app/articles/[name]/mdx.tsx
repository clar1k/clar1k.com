"use client";
import { MDXRemote } from "next-mdx-remote";
import { useMDXComponents } from "~/mdx-components";

export function MDX({ content }: { content: any }) {
  return <MDXRemote {...content.source} components={useMDXComponents({})} />;
}
