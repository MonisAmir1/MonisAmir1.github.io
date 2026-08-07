import { useState } from "react";
import { ChevronDown, Code2 } from "lucide-react";

export function SqlAnalysis({
  query,
  output,
}: {
  query: string;
  output: string;
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
          <Code2 className="h-4 w-4" />
          View SQL Analysis
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="fade-up mt-6 grid gap-6 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-soft">
            <figcaption className="border-b border-border px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              SQL Query
            </figcaption>
            <div className="overflow-x-auto p-3">
              <img src={query} alt="SQL query used for this analysis" loading="lazy" className="min-w-[520px] w-full" />
            </div>
          </figure>
          <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-soft">
            <figcaption className="border-b border-border px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Query Output
            </figcaption>
            <div className="overflow-x-auto p-3">
              <img src={output} alt="Result set returned by the SQL query" loading="lazy" className="min-w-[520px] w-full" />
            </div>
          </figure>
        </div>
      )}
    </div>
  );
}
