import { useState } from "react";
import { ChevronDown, Table2 } from "lucide-react";

export function ExcelTables({
  left,
  right,
  leftLabel = "Detailed Excel Table",
  rightLabel = "Detailed Excel Table",
  leftAlt,
  rightAlt,
}: {
  left: string;
  right: string;
  leftLabel?: string;
  rightLabel?: string;
  leftAlt: string;
  rightAlt: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-6">
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-md"
        >
          <Table2 className="h-4 w-4" />
          View Detailed Excel Table
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="fade-up mt-6 grid gap-6 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-soft">
            <figcaption className="border-b border-border px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {leftLabel}
            </figcaption>
            <div className="overflow-x-auto p-3">
              <img src={left} alt={leftAlt} loading="lazy" className="w-full min-w-[420px]" />
            </div>
          </figure>
          <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-soft">
            <figcaption className="border-b border-border px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {rightLabel}
            </figcaption>
            <div className="overflow-x-auto p-3">
              <img src={right} alt={rightAlt} loading="lazy" className="w-full min-w-[420px]" />
            </div>
          </figure>
        </div>
      )}
    </div>
  );
}
