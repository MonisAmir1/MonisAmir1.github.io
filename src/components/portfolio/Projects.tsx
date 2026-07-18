import { ArrowRight } from "lucide-react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";

export function Projects() {
  const cards = Array.from({ length: 6 });
  return (
    <Section
      id="projects"
      title="Featured Projects"
      description="Selected case studies demonstrating business impact and analytical thinking."
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((_, i) => (
          <article
            key={i}
            className="card-surface card-hover flex flex-col"
          >
            <div className="aspect-[16/10] w-full rounded-md border border-border bg-surface" />
            <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Industry
            </p>
            <h3 className="mt-2 text-xl font-semibold text-foreground">
              Project Title
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Short description of the project, the business problem addressed,
              and the outcome delivered.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Tool", "Tool", "Tool"].map((t, ix) => (
                <span
                  key={ix}
                  className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-8 pt-2">
              <Button
                variant="outline"
                className="rounded-xl border-border bg-transparent text-foreground hover:bg-surface hover:text-primary"
              >
                View Case Study
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
