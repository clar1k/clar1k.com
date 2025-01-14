import { Button } from "~/components/ui/button";

export function Projects() {
  return (
    <section id="projects" className="my-16">
      <h2 className="text-theme-primary mb-4 font-mono text-2xl">Projects</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {[1, 2, 3, 4].map((project) => (
          <div
            key={project}
            className="border-theme-secondary rounded border p-4"
          >
            <pre className="mb-4 whitespace-pre-wrap font-mono text-xs sm:text-sm md:text-base">
              {`
+-------------------+
|                   |
|    Project ${project}      |
|                   |
|  [Description]    |
|                   |
+-------------------+
`}
            </pre>
            <Button
              variant="outline"
              className="border-theme-primary text-theme-primary hover:bg-theme-primary hover:text-theme-light"
            >
              View Project
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
