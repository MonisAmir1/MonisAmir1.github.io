import { Github, Linkedin, Mail, BarChart3 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container-page flex flex-col items-center justify-center gap-6">
        <div className="flex items-center gap-3">
          <a
            href="#"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:text-primary"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="Kaggle"
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:text-primary"
          >
            <BarChart3 className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
