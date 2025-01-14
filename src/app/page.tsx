import { About } from "~/components/About";
import { Header } from "~/components/Header";
import { Projects } from "~/components/Projects";
import { Skills } from "~/components/Skills";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex-grow py-2">
        <About />
        {/* <Skills />
        <Projects /> */}
      </main>
    </div>
  );
}
