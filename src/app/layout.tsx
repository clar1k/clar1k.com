import "~/styles/globals.css";

import { type Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { PostHogProvider } from "~/providers";
import { Lora, Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "clar1k ⋅ building stuff for fun",
  description: "Software engineer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords: [
    "clar1k",
    "serhii khara",
    "software engineer",
    "personal webstite",
  ],
};

const geist = GeistSans.className;

const lora = Lora({
  subsets: ["cyrillic", "latin"],
  variable: "--font-lora",
});

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
});

const cn = `${geist} ${lora.variable} ${inter.variable}`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <PostHogProvider>
        <body className={cn}>{children}</body>
      </PostHogProvider>
    </html>
  );
}
