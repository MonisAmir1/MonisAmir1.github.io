import { Github, Linkedin, Mail } from "lucide-react";
import { KaggleIcon } from "@/components/portfolio/KaggleIcon";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/portrait-2.png.asset.json";

export function Hero() {
  return (
    <section id="top" className="container-page flex min-h-[calc(100vh-4rem)] items-center py-8">
      <div className="grid w-full gap-12 md:grid-cols-2 md:items-center">
        <div className="fade-up order-1 md:order-1">
          <div style={{ fontFamily: "'Agrandir', Inter, sans-serif" }}>
            <p className="text-xl text-muted-foreground md:text-2xl">
              Hi there, my name is
            </p>
            <h1
              className="mt-3 text-5xl leading-[1.05] text-foreground md:text-6xl lg:text-[64px]"
              style={{ fontFamily: "'Garet', Inter, sans-serif" }}
            >
              Muhammad Monis
            </h1>
            <p className="mt-5 text-lg text-muted-foreground md:text-xl">
              Data Analyst <span className="mx-2 text-border">|</span> Business
              Intelligence Analyst
            </p>
          </div>

          <div className="mt-8 flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/muhammad-monis/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-md"
            >
              <Linkedin className="h-[18px] w-[18px]" />
            </a>
            <a
              href="https://github.com/MonisAmir1?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-md"
            >
              <Github className="h-[18px] w-[18px]" />
            </a>
            <a
              href="https://www.kaggle.com/monisamir"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kaggle"
              className="group grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-md"
            >
              <KaggleIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href="mailto:monisaamir5@gmail.com"
              aria-label="Email"
              className="group grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-md"
            >
              <Mail className="h-[18px] w-[18px]" />
            </a>
          </div>


          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="rounded-xl bg-primary px-8 py-4 text-base text-primary-foreground hover:bg-primary/90"
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </Button>
          </div>
        </div>

        <div className="order-2 md:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-xl border border-border bg-surface shadow-soft">
            <img
              src={portrait.url}
              alt="Portrait of Muhammad Monis"
              className="h-full w-full object-cover"
              style={{ objectPosition: "50% 25%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
