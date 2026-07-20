import { Award } from "lucide-react";
import { Section } from "./Section";
import msBadge from "@/assets/microsoft-certified-associate-badge.png.asset.json";

export function Certifications() {
  const items = ["badge", "placeholder"];
  return (
    <Section
      id="certifications"
      title="Professional Certifications"
      description="List of proprietary, exam-based certifications."
    >
      <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto">
        {items.map((type, i) => (
          <div
            key={i}
            className="card-surface card-hover flex items-center gap-6"
          >
            <div
              className={`grid h-20 w-20 shrink-0 place-items-center rounded-xl bg-surface ${
                type === "badge" ? "" : "border border-border"
              }`}
            >
              {type === "badge" ? (
                <img
                  src={msBadge.url}
                  alt="Microsoft Certified Associate badge"
                  className="h-16 w-16 object-contain"
                />
              ) : (
                <Award className="h-8 w-8 text-primary" />
              )}
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
