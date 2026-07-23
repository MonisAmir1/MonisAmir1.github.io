import { Github, Linkedin, Mail } from "lucide-react";
import { KaggleIcon } from "@/components/portfolio/KaggleIcon";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container-page flex flex-col items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/muhammad-monis/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-md"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/MonisAmir1?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-md"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.kaggle.com/monisamir"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kaggle"
            className="group grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-md"
          >
            <KaggleIcon className="h-4 w-4" />
          </a>
          <a
            href="mailto:monisaamir5@gmail.com"
            aria-label="Email"
            className="group grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-md"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">© 2026 Muhammad Monis</p>
      </div>
    </footer>
  );
}
