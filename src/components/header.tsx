import Link from "next/link";
import { Button } from "~/components/ui/button";

function Header() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-center border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="font-lora text-xl font-bold">
          Serhii Khara
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link
            href="/projects"
            className="text-sm font-medium hover:underline"
          >
            Projects
          </Link>
          <Link
            href="/articles"
            className="text-sm font-medium hover:underline"
          >
            Articles
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium hover:underline"
          >
            Contact
          </Link>
        </nav>
        <Button variant="outline" size="sm" className="md:hidden">
          Menu
        </Button>
      </div>
    </header>
  );
}

export { Header };
