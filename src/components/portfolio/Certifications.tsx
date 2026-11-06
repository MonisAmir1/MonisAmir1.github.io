import { Section } from "./Section";
import msBadge from "@/assets/microsoft-certified-associate-badge.png";
import captureBadge from "@/assets/capture-badge.png";

export function Certifications() {
  const items = [
    {
      name: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
      issuer: "Microsoft · 2026",
      issuerUrl:
        "https://learn.microsoft.com/api/credentials/share/en-us/MuhammadMonis/546609693FDEE7FF?sharingId=3971E2623D29B08F",
      badge: msBadge,
      badgeAlt: "Microsoft Certified Associate badge",
    },
    {
      name: "SQL (Advanced)",
      issuer: "HackerRank · 2026",
      issuerUrl: "https://www.hackerrank.com/certificates/b4a83cf7e0f6",
      badge: captureBadge,
      badgeAlt: "HackerRank SQL (Advanced) badge",
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
            <div className="grid h-20 w-20 shrink-0 place-items-center rounded-xl bg-surface">
              <img
                src={item.badge}
                alt={item.badgeAlt}
                className="h-[72px] w-[72px] object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {item.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.issuerUrl ? (
                  <a
                    href={item.issuerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="italic underline hover:text-primary"
                  >
                    {item.issuer}
                  </a>
                ) : (
                  item.issuer
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
