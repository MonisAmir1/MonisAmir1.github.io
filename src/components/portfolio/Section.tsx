import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  reading = false,
  flushTop = false,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  reading?: boolean;
  flushTop?: boolean;
}) {
  return (
    <section
      id={id}
      className={`bg-background ${flushTop ? "pt-8 md:pt-10 pb-20 md:pb-24" : "border-t border-border py-20 md:py-24"}`}
    >


      <div className={reading ? "container-reading" : "container-page"}>
        <header className="mb-12 text-center md:mb-16">
          {eyebrow && (
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl text-foreground md:text-4xl">{title}</h2>
          {description && (
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
              {description}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}
