import { useEffect, useState } from "react";
import profileImage from "@/assets/profile-navbar.webp";
import { MobileNavigation } from "@/components/portfolio/MobileNavigation";

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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="container-page grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 md:flex md:justify-between md:gap-0">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img
            src={profileImage}
            alt="Monis profile"
            className="h-9 w-9 shrink-0 rounded-full border border-border object-cover bg-card"
          />
          <span className="truncate text-sm font-semibold tracking-tight text-foreground">
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

        <MobileNavigation />

        <div className="hidden md:block" />
      </nav>
    </header>
  );
}
