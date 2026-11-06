import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const sections = ["About", "Skills", "Projects", "Certifications", "Languages", "Contact"];

/** One accessible mobile drawer, including homepage destinations from case studies. */
export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const destination = useRef<string | null>(null);
  const navigate = useNavigate();
  const location = useRouterState({ select: (state) => state.location.href });
  const previousLocation = useRef(location);

  useEffect(() => {
    if (previousLocation.current !== location) {
      previousLocation.current = location;
      setOpen(false);
    }
  }, [location]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const dismiss = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", dismiss);
    return () => desktop.removeEventListener("change", dismiss);
  }, []);

  return (
    <div className="shrink-0 md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="h-11 w-11 border-border bg-card text-foreground" aria-label="Open menu">
            <Menu className="h-5 w-5" aria-hidden="true" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          aria-describedby={undefined}
          className="z-[60] h-dvh w-72 max-w-[calc(100vw-2rem)] overflow-y-auto overscroll-contain pb-[max(1.5rem,env(safe-area-inset-bottom))] data-[state=open]:duration-150 data-[state=closed]:animate-none data-[state=closed]:transition-none [&>button]:flex [&>button]:h-11 [&>button]:w-11 [&>button]:items-center [&>button]:justify-center"
          onCloseAutoFocus={(event) => {
            const hash = destination.current;
            if (!hash) return;
            event.preventDefault();
            destination.current = null;
            // Navigate only after the dialog has released its focus and scroll locks.
            requestAnimationFrame(() => {
              void navigate({ to: "/", hash, hashScrollIntoView: { behavior: "instant", block: "start" } }).then(() => {
                const target = document.getElementById(hash);
                if (!target) return;
                target.setAttribute("tabindex", "-1");
                target.focus({ preventScroll: true });
                target.addEventListener("blur", () => target.removeAttribute("tabindex"), { once: true });
              });
            });
          }}
        >
          <SheetTitle className="mb-6 pr-12 text-base">Menu</SheetTitle>
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-2">
              {sections.map((label) => (
                <li key={label}>
                  <Link
                    to="/"
                    hash={label.toLowerCase()}
                    onClick={(event) => {
                      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                      event.preventDefault();
                      destination.current = label.toLowerCase();
                      setOpen(false);
                    }}
                    className="flex min-h-11 items-center rounded-md px-2 py-3 text-base text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}