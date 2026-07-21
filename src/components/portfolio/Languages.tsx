import { Section } from "./Section";

const langs = [
  { name: "English", level: "C1" },
  { name: "French", level: "B1" },
];

export function Languages() {
  return (
    <Section id="languages" title="Languages">
      <div className="mx-auto grid w-full max-w-2xl grid-cols-2 gap-4 sm:gap-6">
        {langs.map((l) => (
          <div
            key={l.name}
            className="card-surface card-hover flex items-center justify-between"
          >
            <h3 className="text-lg font-semibold text-foreground">{l.name}</h3>
            <span className="text-sm font-medium text-primary">{l.level}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
