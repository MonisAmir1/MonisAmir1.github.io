import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import profileImage from "@/assets/profile-navbar.png.asset.json";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#languages", label: "Languages" },
  { href: "#contact", label: "Contact" },
];

function useActiveSection() {
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const offset = 120; // sticky nav height + small buffer
    const update = () => {
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }
      // Near the bottom of the page, force the last section (contact).
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      ) {
        current = ids[ids.length - 1];
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return active;
}

export function Navbar() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={profileImage.url}
            alt="Monis profile"
            className="h-9 w-9 rounded-full border border-border object-cover bg-card"
          />
          <span className="text-sm font-semibold tracking-tight text-foreground">
            Glad You're Here :)
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-sm transition-colors ${
                    isActive
                      ? "font-medium text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-foreground">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="mb-6 text-base">Menu</SheetTitle>
              <ul className="flex flex-col gap-4">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-2 py-2 text-base text-foreground hover:bg-muted"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden md:block" />
      </nav>
    </header>
  );
}
