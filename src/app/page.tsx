"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, Github, ArrowRight, Notebook } from "lucide-react";
import { SocialLink } from "~/components/social-link";
import Link from "next/link";
import { cn } from "~/lib/utils";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={cn(
        "bg-cream-50 text-charcoal-800 min-h-screen transition-opacity duration-1000",
        isLoaded ? "opacity-100" : "opacity-0",
      )}
    >
      <section className="px-6 pb-16 pt-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-lora mb-6 text-5xl font-light leading-tight md:text-7xl">
            clar1k
          </h1>
          <p className="text-charcoal-800/80 max-w-prose-narrow font-inter mx-auto mb-8 text-xl font-light leading-relaxed md:text-2xl">
            Passionate about building software that solves real problems
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="https://cal.com/clar1k"
              target="_blank"
              className="bg-charcoal-800 hover:bg-charcoal-900 text-cream-50 inline-flex items-center gap-2 rounded-lg px-6 py-2 font-medium transition-all duration-200"
            >
              <Phone size={20} />
              Book a call
            </Link>
            <Link
              href="https://cv.clar1k.xyz"
              target="_blank"
              className="bg-cream-100 hover:bg-cream-50 text-charcoal-800 border-charcoal-800/20 hover:border-charcoal-800/40 inline-flex items-center gap-2 rounded-lg border px-6 py-2 font-medium transition-all duration-200"
            >
              <Notebook size={20} /> See my experience
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-16">
        <div className="mx-auto max-w-prose">
          <h2 className="font-lora mb-8 text-center text-3xl font-light md:text-4xl">
            About
          </h2>
          <div className="font-inter space-y-6 text-lg leading-relaxed">
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

      {/* Articles Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-lora mb-8 text-3xl font-light md:text-4xl">
            Articles & Insights
          </h2>
          <p className="text-charcoal-800/80 font-inter mx-auto mb-12 max-w-prose text-lg leading-relaxed">
            I share my thoughts and experiences about software development,
            technology trends, and lessons learned from building products.
          </p>
          <Link
            href="/articles"
            className="text-charcoal-800 hover:text-charcoal-900 bg-cream-100 hover:bg-cream-50 group inline-flex items-center gap-2 rounded-lg px-6 py-3 transition-all duration-200"
          >
            Read my articles
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-cream-100 border-t-2 px-6 py-16">
        <div className="mx-auto max-w-prose text-center">
          <h2 className="font-lora mb-8 text-3xl font-light md:text-4xl">
            Let's Work Together
          </h2>
          <p className="text-charcoal-800/80 font-inter mb-12 text-lg leading-relaxed">
            I'm always interested in new projects and collaborations. Whether
            you have a specific project in mind or just want to chat about tech,
            I'd love to hear from you.
          </p>

          <div className="space-y-6">
            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              <Link
                href="https://cal.com/clar1k"
                target="_blank"
                className="text-charcoal-800 hover:text-charcoal-900 inline-flex items-center justify-center gap-3 transition-colors duration-200 sm:justify-start"
              >
                <Phone size={20} />
                Book a call
              </Link>
              <Link
                href="mailto:serhii@clar1k.xyz"
                className="text-charcoal-800 hover:text-charcoal-900 inline-flex items-center justify-center gap-3 transition-colors duration-200 sm:justify-start"
              >
                <Mail size={20} />
                serhii@clar1k.xyz
              </Link>
            </div>

            <div className="flex justify-center gap-6 pt-8">
              <SocialLink
                href="https://github.com/clar1k"
                iconSrc="/github.svg"
                className="bg-cream-100 hover:bg-cream-50 rounded-full px-6 py-2 transition-colors duration-200"
              >
                GitHub
              </SocialLink>
              <SocialLink
                href="https://x.com/clar1k"
                iconSrc="/x.svg"
                iconAlt="Twitter Icon"
                className="bg-cream-100 hover:bg-cream-50 rounded-full px-6 py-2 transition-colors duration-200"
              >
                Twitter/X
              </SocialLink>
              <SocialLink
                href="https://t.me/clar1k"
                iconSrc="/telegram.svg"
                iconAlt="Telegram Icon"
                className="bg-cream-100 hover:bg-cream-50 rounded-full px-6 py-2 transition-colors duration-200"
              >
                Telegram
              </SocialLink>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-cream-100 border-t-2 px-6 py-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-charcoal-800/60 text-sm">© 2025 clar1k</p>
        </div>
      </footer>
    </div>
  );
}
