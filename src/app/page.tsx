"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, Github, ArrowRight, Notebook } from "lucide-react";
import { SocialLink } from "~/components/social-link";
import Link from "next/link";
import { cn } from "~/lib/utils";
import ImageCarousel from "~/components/ui/image-carousel";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={cn(
        "min-h-screen bg-cream-50 text-charcoal-800 transition-opacity duration-1000",
        isLoaded ? "opacity-100" : "opacity-0",
      )}
    >
      <section className="px-6 pb-16 pt-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 font-lora text-5xl font-light leading-tight md:text-7xl">
            clar1k
          </h1>
          <p className="mx-auto mb-8 max-w-prose-narrow font-inter text-xl font-light leading-relaxed text-charcoal-800/80 md:text-2xl">
            Passionate about building software that solves real problems
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="https://cal.com/clar1k"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg bg-charcoal-800 px-6 py-2 font-medium text-cream-50 transition-all duration-200 hover:bg-charcoal-900"
            >
              <Phone size={20} />
              Book a call
            </Link>
            <Link
              href="https://cv.clar1k.xyz"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg border border-charcoal-800/20 bg-cream-100 px-6 py-2 font-medium text-charcoal-800 transition-all duration-200 hover:border-charcoal-800/40 hover:bg-cream-50"
            >
              <Notebook size={20} /> See my experience
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-16">
        <div className="mx-auto max-w-prose">
          <h2 className="mb-8 text-center font-lora text-3xl font-light md:text-4xl">
            About
          </h2>
          <div className="space-y-6 font-inter text-lg leading-relaxed">
            <p>
              Hey! I'm a software engineer who believes that the best solutions
              come from understanding real problems. Whether it's building
              scalable web applications or crafting intuitive user interfaces, I
              focus on creating software that i like.
            </p>
            <p>
              My approach combines technical expertise with careful attention to
              user needs. I work closely with teams to understand requirements
              deeply, then craft solutions that are not only technically sound
              but also solve meaningful problems for real people.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source projects, or sharing knowledge with
              the developer community.
            </p>
          </div>
        </div>
      </section>
      <ImageCarousel
        className="mx-auto mb-4 max-w-sm px-6 md:max-w-2xl md:px-0"
        showThumbnails={false}
        showZoom={false}
        images={[
          { src: "/eth-kyiv.webp", alt: "ETH Kyiv Event" },
          { src: "/eth-kyiv-1.webp", alt: "ETH Kyiv Event 1" },
          { src: "/eth-kyiv-2.webp", alt: "ETH Kyiv Event 2" },
          { src: "/eth-kyiv-3.webp", alt: "ETH Kyiv Event 3" },
          { src: "/eth-farcaster-1.webp", alt: "ETH Farcaster Event 1" },
          { src: "/eth-farcaster-2.webp", alt: "ETH Farcaster Event 2" },
          { src: "/eth-farcaster-3.webp", alt: "ETH Farcaster Event 3" },
          { src: "/eth-farcaster-4.webp", alt: "ETH Farcaster Event 4" },
          { src: "/eth-farcaster-5.webp", alt: "ETH Farcaster Event 5" },
        ]}
      />
      <section id="contact" className="border-t-2 border-cream-100 px-6 py-16">
        <div className="mx-auto max-w-prose text-center">
          <h2 className="mb-8 font-lora text-3xl font-light md:text-4xl">
            Let's Work Together
          </h2>
          <p className="mb-12 font-inter text-lg leading-relaxed text-charcoal-800/80">
            I'm always interested in new projects and collaborations. Whether
            you have a specific project in mind or just want to chat about tech,
            I'd love to hear from you.
          </p>

          <div className="space-y-6">
            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              <Link
                href="https://cal.com/clar1k"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-lg bg-charcoal-800 px-6 py-2 font-medium text-cream-50 transition-all duration-200 hover:bg-charcoal-900"
              >
                <Phone size={20} />
                Book a call
              </Link>
              <Link
                href="mailto:serhii@clar1k.xyz"
                className="inline-flex items-center justify-center gap-3 text-charcoal-800 transition-colors duration-200 hover:text-charcoal-900 sm:justify-start"
              >
                <Mail size={20} />
                serhii@clar1k.xyz
              </Link>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 pt-8 md:flex-row md:items-start">
              <SocialLink
                href="https://github.com/clar1k"
                iconSrc="/github.svg"
                className="rounded-full bg-cream-100 px-6 py-2 transition-colors duration-200 hover:bg-cream-50"
              >
                GitHub
              </SocialLink>
              <SocialLink
                href="https://x.com/clar1k"
                iconSrc="/x.svg"
                iconAlt="Twitter Icon"
                className="rounded-full bg-cream-100 px-6 py-2 transition-colors duration-200 hover:bg-cream-50"
              >
                Twitter/X
              </SocialLink>
              <SocialLink
                href="https://t.me/clar1k"
                iconSrc="/telegram.svg"
                iconAlt="Telegram Icon"
                className="rounded-full bg-cream-100 px-6 py-2 transition-colors duration-200 hover:bg-cream-50"
              >
                Telegram
              </SocialLink>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-cream-100 px-6 py-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm text-charcoal-800/60">© 2025 clar1k</p>
        </div>
      </footer>
    </div>
  );
}
