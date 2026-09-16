import { useState } from "react";
import { ChevronDown, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SqlAnalysis({
  query,
  output,
  queryAlt = "SQL query used for this analysis",
  outputAlt = "Result set returned by the SQL query",
}: {
  query: string;
  output?: string;
  queryAlt?: string;
  outputAlt?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-6">
      <div className="flex justify-end">
        <Button
          type="button"
          variant="outline"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="h-auto rounded-xl border-border bg-card px-4 py-2 text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-card hover:text-primary hover:shadow-md"
        >
          <Code2 className="h-4 w-4" />
          View SQL Analysis
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </Button>
      </div>

      {open && (
        <div className={`fade-up mt-6 grid gap-6 ${output ? "lg:grid-cols-2" : ""}`}>
          <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-soft">
            <figcaption className="border-b border-border px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              SQL Query
            </figcaption>
            <div className="overflow-x-auto p-3">
              <img src={query} alt={queryAlt} loading="lazy" className="w-full min-w-[520px]" />
            </div>
          </figure>
          {output && (
            <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-soft">
              <figcaption className="border-b border-border px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Query Output
              </figcaption>
              <div className="overflow-x-auto p-3">
                <img src={output} alt={outputAlt} loading="lazy" className="w-full min-w-[520px]" />
              </div>
            </figure>
          )}
        </div>
      )}
    </div>
  );
}
