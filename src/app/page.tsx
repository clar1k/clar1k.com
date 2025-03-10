import { Hero } from "~/components/hero";
import { Contact } from "~/components/contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        <Hero />
        <Contact />
      </main>
    </div>
  );
}
