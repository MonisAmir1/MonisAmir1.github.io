import { Section } from "./Section";
import excelAsset from "@/assets/skill-excel.webp";
import sqlAsset from "@/assets/skill-sql.webp";
import powerbiAsset from "@/assets/skill-powerbi.webp";
import tableauAsset from "@/assets/skill-tableau.webp";
import fabricAsset from "@/assets/skill-fabric.webp";
import databricksAsset from "@/assets/skill-databricks.webp";
import aiAsset from "@/assets/skill-ai.webp";
import awsAsset from "@/assets/skill-aws.webp";

const tools = [
  { name: "Excel", src: excelAsset },
  { name: "SQL", src: sqlAsset },
  { name: "Power BI", src: powerbiAsset },
  { name: "Tableau", src: tableauAsset },
  { name: "Fabric", src: fabricAsset },
  { name: "Databricks", src: databricksAsset },
  { name: "AWS", src: awsAsset },
  { name: "AI", src: aiAsset },
];

const groups = [
  {
    title: "Analytics",
    items: ["SQL", "Excel", "Power BI", "AI Automation"],
  },
  {
    title: "Business",
    items: [
      "Business Analysis",
      "Stakeholder Communication",
      "KPI Design",
      "Reporting",
    ],
  },
  {
    title: "Technical",
    items: ["Data Modeling", "DAX", "Power Query", "Data Visualization"],
  },
];

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="mb-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {tools.map((t) => (
          <img loading="lazy"
            key={t.name}
            src={t.src}
            alt={t.name}
            title={t.name}
            className="h-14 w-auto object-contain md:h-16"
          />
        ))}
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {groups.map((g) => (
          <div key={g.title} className="card-surface card-hover">
            <h3 className="text-xl font-semibold text-foreground">{g.title}</h3>
            <ul className="mt-6 space-y-3">
              {g.items.map((s) => (
                <li
                  key={s}
                  className="text-base text-muted-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
