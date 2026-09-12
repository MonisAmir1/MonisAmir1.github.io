import { Section } from "./Section";
import excelAsset from "@/assets/skill-excel.png.asset.json";
import sqlAsset from "@/assets/skill-sql.png.asset.json";
import powerbiAsset from "@/assets/skill-powerbi.png.asset.json";
import tableauAsset from "@/assets/skill-tableau.png.asset.json";
import fabricAsset from "@/assets/skill-fabric.png.asset.json";
import databricksAsset from "@/assets/skill-databricks.png.asset.json";
import aiAsset from "@/assets/skill-ai.png.asset.json";

const tools = [
  { name: "Excel", src: excelAsset.url },
  { name: "SQL", src: sqlAsset.url },
  { name: "Power BI", src: powerbiAsset.url },
  { name: "Tableau", src: tableauAsset.url },
  { name: "Fabric", src: fabricAsset.url },
  { name: "Databricks", src: databricksAsset.url },
  { name: "AI", src: aiAsset.url },
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
      <div className="mb-12 grid grid-cols-4 place-items-center gap-2 sm:grid-cols-7 md:gap-3">
        {tools.map((t) => (
          <div
            key={t.name}
            className="flex h-14 w-full items-center justify-center md:h-16"
          >
            <img
              src={t.src}
              alt={t.name}
              title={t.name}
              className="h-full w-auto max-w-full object-contain"
            />
          </div>
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
