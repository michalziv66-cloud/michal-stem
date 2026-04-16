import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";

const navItems = [
  { to: "/", label: "בית" },
  { to: "/about", label: "אודות" },
  { to: "/tools", label: "כלי עבודה" },
  { to: "/principals", label: "למנהלים" },
  { to: "/materials", label: "חומרי לימוד" },
  { to: "/blog", label: "בלוג" },
  { to: "/social-generator", label: "מחולל פוסטים" },
  { to: "/contact", label: "צור קשר" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/">
          <img src={logo} alt="מיכל זיו — מתמטיקה מחוץ לסוגריים" className="h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "bg-accent text-accent-foreground" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="תפריט"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileOpen ? (
              <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
            ) : (
              <><line x1="4" y1="8" x2="20" y2="8" /><line x1="4" y1="16" x2="20" y2="16" /></>
            )}
          </svg>
        </Button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="flex flex-col border-t bg-card px-4 pb-4 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              activeProps={{ className: "bg-accent text-accent-foreground" }}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
