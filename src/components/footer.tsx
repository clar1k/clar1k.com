import { Mail, PhoneCall } from "lucide-react";
import { SocialLink } from "~/components/social-link";
import Link from "next/link";

function Footer() {
  return (
    <section
      id="contact"
      className="flex w-full justify-center border-t bg-gray-50 py-12 md:py-24 lg:py-32"
    >
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get In Touch
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind or want to discuss a potential
              collaboration? I&apos;d love to hear from you.
            </p>
          </div>
          <div className="flex w-full flex-col gap-1 px-4 sm:px-0 md:w-auto md:flex-row md:gap-4">
            <Link
              href="https://cal.com/clar1k"
              className="inline-flex items-center rounded-lg bg-black px-4 py-2 text-white hover:bg-black/80"
              target="_blank"
            >
              <PhoneCall className="mr-2 h-4 w-4" />
              Book a call
            </Link>
            <Link
              href="mailto:serhii@clar1k.xyz"
              className="inline-flex items-center rounded-lg bg-black px-4 py-2 text-white hover:bg-black/80"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email me
            </Link>
            <SocialLink href="https://github.com/clar1k" iconSrc="/github.svg">
              GitHub
            </SocialLink>
            <SocialLink
              href="https://x.com/clar1k"
              iconSrc="/x.svg"
              iconAlt="Twitter Icon"
            >
              Twitter/X
            </SocialLink>
            <SocialLink
              href="https://t.me/clar1k"
              iconSrc="/telegram.svg"
              iconAlt="Telegram Icon"
            >
              Telegram
            </SocialLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Footer };
