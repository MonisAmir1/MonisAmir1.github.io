import { Github, Linkedin, Mail, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="container-page pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="fade-up order-1 md:order-1">
          <p className="text-xl text-muted-foreground md:text-2xl">
            Hi there, my name is
          </p>
          <h1 className="mt-3 text-5xl leading-[1.05] text-foreground md:text-6xl lg:text-[64px]">
            Muhammad Monis
          </h1>
          <p className="mt-5 text-lg text-muted-foreground md:text-xl">
            Data Analyst <span className="mx-2 text-border">|</span> Business
            Intelligence Analyst
          </p>

          <div className="mt-8 flex items-center gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:text-primary"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Kaggle"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:text-primary"
            >
              <BarChart3 className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              aria-label="Email"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="rounded-xl bg-primary px-6 text-primary-foreground hover:bg-primary/90"
            >
              <a href="#" target="_blank" rel="noreferrer">
                View Resume
              </a>
            </Button>
          </div>
        </div>

        <div className="order-2 md:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-xl border border-border bg-surface shadow-soft">
            <div className="grid h-full w-full place-items-center text-sm text-muted-foreground">
              Portrait placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
