import { Section } from "./Section";

const groups = [
  {
    title: "Analytics",
    items: ["SQL", "Excel", "Power BI"],
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
