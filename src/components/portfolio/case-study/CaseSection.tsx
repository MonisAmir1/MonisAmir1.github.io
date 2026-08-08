import type { ReactNode } from "react";

export function CaseSection({
  id,
  title,
  children,
  reading = false,
  bordered = true,
}: {
  id?: string;
  title?: string;
  children: ReactNode;
  reading?: boolean;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={`bg-background ${bordered ? "border-t border-border" : ""} py-16 md:py-20`}
    >
      <div className={reading ? "container-reading" : "container-page"}>
        {title && (
          <h2 className="mb-10 text-center text-3xl text-foreground md:mb-12 md:text-4xl">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}

export function B({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-foreground">{children}</strong>;
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="w-full space-y-5 text-base leading-relaxed text-muted-foreground md:text-[17px]">
      {children}
    </div>
  );
}

export function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mx-auto max-w-[850px] space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-base leading-relaxed text-muted-foreground md:text-[17px]">
          <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-soft">
      <div className="overflow-x-auto p-3 md:p-4">
        <img src={src} alt={alt} loading="lazy" className="w-full min-w-[480px]" />
      </div>
      {caption && (
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
