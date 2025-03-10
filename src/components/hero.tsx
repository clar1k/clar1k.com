import { Button } from "~/components/ui/button";
import { CodeDisplay } from "./code-display";

function Hero() {
  return (
    <section className="flex w-full justify-center py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-black sm:text-5xl xl:text-6xl/none">
                Hello, I&apos;m Serhii Khara
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                A software engineer.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button variant="outline">Contact Me</Button>
            </div>
          </div>
          <CodeDisplay />
        </div>
      </div>
    </section>
  );
}

export { Hero };
