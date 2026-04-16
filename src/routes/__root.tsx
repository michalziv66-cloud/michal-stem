import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "מיכל זיו — מתמטיקה מחוץ לסוגריים" },
      { name: "description", content: "מובילת פיתוח פדגוגי דיגיטלי, מחנכת בחטיבת הביניים, מפתחת כלי AI ל-STEM" },
      { name: "author", content: "מיכל זיו" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:title", content: "מיכל זיו — מתמטיקה מחוץ לסוגריים" },
      { name: "twitter:title", content: "מיכל זיו — מתמטיקה מחוץ לסוגריים" },
      { property: "og:description", content: "מובילת פיתוח פדגוגי דיגיטלי, מחנכת בחטיבת הביניים, מפתחת כלי AI ל-STEM" },
      { name: "twitter:description", content: "מובילת פיתוח פדגוגי דיגיטלי, מחנכת בחטיבת הביניים, מפתחת כלי AI ל-STEM" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

type A11ySettings = {
  fontSize: number;
  highContrast: boolean;
  highlightLinks: boolean;
};

const A11Y_DEFAULTS: A11ySettings = { fontSize: 0, highContrast: false, highlightLinks: false };

function applyA11y(s: A11ySettings) {
  if (typeof document === "undefined") return;
  const html = document.documentElement;
  html.classList.remove("a11y-font-1", "a11y-font-2");
  if (s.fontSize === 1) html.classList.add("a11y-font-1");
  if (s.fontSize === 2) html.classList.add("a11y-font-2");
  html.classList.toggle("a11y-high-contrast", s.highContrast);
  html.classList.toggle("a11y-highlight-links", s.highlightLinks);
}

function RootComponent() {
  const [mounted, setMounted] = useState(false);
  const [a11yOpen, setA11yOpen] = useState(false);
  const [a11y, setA11y] = useState<A11ySettings>(A11Y_DEFAULTS);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem("a11y-settings");
      if (raw) {
        const saved = JSON.parse(raw) as A11ySettings;
        setA11y(saved);
        applyA11y(saved);
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applyA11y(a11y);
    try { localStorage.setItem("a11y-settings", JSON.stringify(a11y)); } catch {}
  }, [a11y, mounted]);

  const updateA11y = useCallback((p: Partial<A11ySettings>) => {
    setA11y((prev) => ({ ...prev, ...p }));
  }, []);

  const fontLabels = ["רגיל", "גדול", "גדול מאוד"];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      {mounted && (
        <div style={{ position: "fixed", bottom: 16, left: 16, zIndex: 9999 }} dir="rtl">
          {a11yOpen && (
            <div className="mb-2 w-64 rounded-xl border bg-card p-4 shadow-xl">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-bold">הגדרות נגישות</h3>
                <button onClick={() => setA11yOpen(false)} className="text-muted-foreground hover:text-foreground" aria-label="סגור">✕</button>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="mb-1.5 text-xs font-medium">גודל טקסט: {fontLabels[a11y.fontSize]}</p>
                  <div className="flex gap-1.5">
                    {[0, 1, 2].map((level) => (
                      <button
                        key={level}
                        onClick={() => updateA11y({ fontSize: level })}
                        className={`flex-1 rounded-md border px-2 py-1.5 text-xs font-medium transition-colors ${
                          a11y.fontSize === level
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border hover:bg-accent"
                        }`}
                      >
                        {["א", "א+", "א++"][level]}
                      </button>
                    ))}
                  </div>
                </div>
                <label className="flex cursor-pointer items-center justify-between rounded-md border px-3 py-2">
                  <span className="text-xs font-medium">ניגודיות גבוהה</span>
                  <input type="checkbox" checked={a11y.highContrast} onChange={(e) => updateA11y({ highContrast: e.target.checked })} className="h-4 w-4 accent-primary" />
                </label>
                <label className="flex cursor-pointer items-center justify-between rounded-md border px-3 py-2">
                  <span className="text-xs font-medium">סימון קישורים</span>
                  <input type="checkbox" checked={a11y.highlightLinks} onChange={(e) => updateA11y({ highlightLinks: e.target.checked })} className="h-4 w-4 accent-primary" />
                </label>
                <button onClick={() => setA11y(A11Y_DEFAULTS)} className="w-full rounded-md border px-3 py-1.5 text-xs font-medium hover:bg-accent">איפוס הגדרות</button>
              </div>
            </div>
          )}
          <button
            onClick={() => setA11yOpen(!a11yOpen)}
            style={{ width: 48, height: 48, borderRadius: "50%", backgroundColor: "var(--primary)", color: "var(--primary-foreground)", fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center", border: "none", cursor: "pointer", boxShadow: "0 4px 12px rgba(0,0,0,0.3)" }}
            aria-label="נגישות"
            title="נגישות"
          >
            ♿
          </button>
        </div>
      )}
    </>
  );
}
