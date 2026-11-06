import { Section } from "./Section";
import flagUk from "@/assets/flag-uk.png";
import flagFr from "@/assets/flag-fr.png";
import flagLu from "@/assets/flag-lu.png";

const langs = [
  { name: "English", level: "C1", flags: [{ src: flagUk, alt: "UK flag" }] },
  {
    name: "French",
    level: "B1",
    flags: [
      { src: flagFr, alt: "France flag" },
      { src: flagLu, alt: "Luxembourg flag" },
    ],
  },
];

export function Languages() {
  return (
    <Section id="languages" title="Languages">
      <div className="mx-auto grid w-full max-w-4xl grid-cols-2 gap-4 sm:gap-6">
        {langs.map((l) => (
          <div
            key={l.name}
            className="card-surface card-hover flex items-center justify-between"
          >
            <h3 className="flex items-center gap-1.5 text-lg font-semibold text-foreground">
              <span>{l.name}</span>
              {l.flags.map((f) => (
                <img
                  key={f.alt}
                  src={f.src}
                  alt={f.alt}
                  className="inline-block h-[1.15em] w-auto align-[-0.1em]"
                />
              ))}
            </h3>
            <span className="text-sm font-medium text-primary">{l.level}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
