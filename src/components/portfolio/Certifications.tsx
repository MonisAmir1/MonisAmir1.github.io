import { Award } from "lucide-react";
import { Section } from "./Section";
import msBadge from "@/assets/microsoft-certified-associate-badge.png.asset.json";

export function Certifications() {
  const items = [
    {
      type: "badge",
      name: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
      issuer: "Microsoft · 2026",
    },
    {
      type: "placeholder",
      name: "Certification Name",
      issuer: "Issuing Organization · Year",
    },
  ];

  return (
    <Section
      id="certifications"
      title="Professional Certifications"
      description="List of proprietary, exam-based certifications."
    >
      <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className="card-surface card-hover flex items-center gap-6"
          >
            <div
              className={`grid h-20 w-20 shrink-0 place-items-center rounded-xl bg-surface ${
                item.type === "badge" ? "" : "border border-border"
              }`}
            >
              {item.type === "badge" ? (
                <img
                  src={msBadge.url}
                  alt="Microsoft Certified Associate badge"
                  className="h-[72px] w-[72px] object-contain"
                />
              ) : (
                <Award className="h-8 w-8 text-primary" />
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {item.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.issuer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
