import { Section } from "./Section";

const langs = [
  { name: "English", level: "C1" },
  { name: "French", level: "B1" },
];

export function Languages() {
  return (
    <Section id="languages" title="Languages">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {langs.map((l) => (
          <div
            key={l.name}
            className="card-surface card-hover flex items-baseline justify-between"
          >
            <h3 className="text-lg font-semibold text-foreground">{l.name}</h3>
            <span className="text-sm font-medium text-primary">{l.level}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
