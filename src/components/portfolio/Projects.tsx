import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import dashboardThumb from "@/assets/project-cost-dashboard.png.asset.json";
import luxmoraThumb from "@/assets/dashboard-luxmora-fit.png.asset.json";
import flowAdoptionThumb from "@/assets/dashboard-flow-adoption.png.asset.json";
import slaDashboardThumb from "@/assets/project-sla-dashboard.png.asset.json";
import transportDashboardThumb from "@/assets/project-transport-dashboard.png.asset.json";
import outagesDashboardThumb from "@/assets/project-outages-dashboard.png.asset.json";



const projects = [
  {
    title: "Cost-to-Income Ratio Optimisation",
    industry: "BANKING | FINANCIAL SERVICES",
    description: "Analysed the operational drivers behind an escalating Cost-to-Income Ratio and developed data-driven recommendations to improve banking efficiency.",
    tools: ["SQL", "Power BI"],
    thumbnail: dashboardThumb.url,
    aspect: "aspect-[1065/596]",
    to: "/projects/cost-to-income-ratio" as const,
  },

  {
    title: "Strategic Business Transformation",
    industry: "CONSULTING | BIG 4",
    description: "Analysed the portfolio performance and growth dynamics to identify strategic transformation priorities and develop an evidence-based investment portfolio.",
    tools: ["Excel", "Power BI"],
    thumbnail: luxmoraThumb.url,
    aspect: "aspect-[1065/596]",
    to: "/projects/strategic-business-transformation" as const,
  },

  {
    title: "Product Adoption & Customer Retention",
    industry: "FINTECH",
    description: "Analysed product adoption and customer behaviour to identify engagement barriers and develop evidence-based strategies to improve meaningful and sustained usage.",
    tools: ["Databricks"],
    thumbnail: flowAdoptionThumb.url,
    aspect: "aspect-[1065/596]",
    to: "/projects/product-adoption-customer-retention" as const,
  },
  {
    title: "Compliance Process Optimisation & Operational Risk Monitoring",
    industry: "COMPLIANCE | REGULATORY | RISK",
    description: "Analysed operational lifecycles and control check bottlenecks across investor onboarding workflows to eliminate regulatory SLA breach risks and optimize operational capacity.",
    tools: ["SQL", "Power BI"],
    thumbnail: slaDashboardThumb.url,
    aspect: "aspect-[1065/596]",
    to: "/projects/compliance-process-optimisation-operational-risk-monitoring" as const,
  },
  {
    title: "Transportation Network Volume Forecasting & Optimisation",
    industry: "SUPPLY CHAIN | LOGISTICS",
    description: "Analysed daily transportation volumes and capacity across a European e-commerce network, built a forecasting model, and developed data-driven recommendations to improve network planning and reduce operational risk.",
    tools: ["AWS", "Power BI"],
    thumbnail: transportDashboardThumb.url,
    aspect: "aspect-[1065/596]",
    to: "/projects/transportation-network-volume-forecasting-optimisation" as const,
  },
  {
    title: "Project Title",
    industry: "Industry",
    description: "Short description of the project, the business problem addressed, and the outcome delivered.",
    tools: ["Tool", "Tool", "Tool"],
    thumbnail: outagesDashboardThumb.url,
    aspect: "aspect-[1065/596]",
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
            <div className={`${project.aspect} w-full overflow-hidden rounded-md border border-border bg-surface`}>
              {project.thumbnail && (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-contain"
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
                asChild={!!project.to}
                variant="outline"
                disabled={!project.to}
                className="rounded-xl border-border bg-transparent text-foreground hover:bg-surface hover:text-primary"
              >
                {project.to ? (
                  <Link to={project.to}>
                    View Case Study
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                ) : (
                  <span>
                    View Case Study
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </span>
                )}
              </Button>
            </div>

          </article>
        ))}
      </div>
    </Section>
  );
}
