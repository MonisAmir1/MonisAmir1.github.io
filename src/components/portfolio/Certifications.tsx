import { Award } from "lucide-react";
import { Section } from "./Section";

export function Certifications() {
  const items = Array.from({ length: 2 });
  return (
    <Section
      id="certifications"
      title="Professional Certifications"
      description="List of proprietary, exam-based certifications."
    >
      <div className="flex flex-col gap-6 max-w-xl mx-auto">
        {items.map((_, i) => (
          <div
            key={i}
            className="card-surface card-hover flex items-center gap-6"
          >
            <div className="grid h-20 w-20 shrink-0 place-items-center rounded-xl border border-border bg-surface">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Certification Name
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Issuing Organization · Year
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
