import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import dashboardThumb from "@/assets/project-cost-dashboard.png.asset.json";


const projects = [
  {
    title: "Cost-to-Income Ratio Optimisation",
    industry: "BANKING | FINANCIAL SERVICES",
    description: "Analysed the operational drivers behind an escalating Cost-to-Income Ratio and developed data-driven recommendations to improve banking efficiency.",
    tools: ["SQL", "Power BI"],
    thumbnail: dashboardThumb.url,
    to: "/projects/cost-to-income-ratio" as const,
  },

  {
    title: "Project Title",
    industry: "Industry",
    description: "Short description of the project, the business problem addressed, and the outcome delivered.",
    tools: ["Tool", "Tool", "Tool"],
  },
  {
    title: "Project Title",
    industry: "Industry",
    description: "Short description of the project, the business problem addressed, and the outcome delivered.",
    tools: ["Tool", "Tool", "Tool"],
  },
  {
    title: "Project Title",
    industry: "Industry",
    description: "Short description of the project, the business problem addressed, and the outcome delivered.",
    tools: ["Tool", "Tool", "Tool"],
  },
  {
    title: "Project Title",
    industry: "Industry",
    description: "Short description of the project, the business problem addressed, and the outcome delivered.",
    tools: ["Tool", "Tool", "Tool"],
  },
  {
    title: "Project Title",
    industry: "Industry",
    description: "Short description of the project, the business problem addressed, and the outcome delivered.",
    tools: ["Tool", "Tool", "Tool"],
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      title="Featured Projects"
      description="Selected case studies demonstrating analytical thinking and business impact."
    >
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <article
            key={i}
            className="card-surface card-hover flex flex-col"
          >
            <div className="aspect-[1065/596] w-full overflow-hidden rounded-md border border-border bg-surface">
              {project.thumbnail && (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-left"
                />
              )}
            </div>
            <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              {project.industry}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tools.map((t, ix) => (
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
