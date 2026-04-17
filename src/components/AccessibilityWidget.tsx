import { useEffect, useState } from "react";
import {
  Accessibility,
  Plus,
  Minus,
  Contrast,
  Link2,
  PauseCircle,
  Type,
  RotateCcw,
  Droplet,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type A11ySettings = {
  fontScale: number; // 1 = default
  highContrast: boolean;
  grayscale: boolean;
  underlineLinks: boolean;
  pauseAnimations: boolean;
  readableFont: boolean;
};

const DEFAULTS: A11ySettings = {
  fontScale: 1,
  highContrast: false,
  grayscale: false,
  underlineLinks: false,
  pauseAnimations: false,
  readableFont: false,
};

const STORAGE_KEY = "a11y-settings-v1";

function loadSettings(): A11ySettings {
  if (typeof window === "undefined") return DEFAULTS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULTS;
    return { ...DEFAULTS, ...(JSON.parse(raw) as Partial<A11ySettings>) };
  } catch {
    return DEFAULTS;
  }
}

function applySettings(s: A11ySettings) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.style.setProperty("--a11y-font-scale", String(s.fontScale));
  root.classList.toggle("a11y-high-contrast", s.highContrast);
  root.classList.toggle("a11y-grayscale", s.grayscale);
  root.classList.toggle("a11y-underline-links", s.underlineLinks);
  root.classList.toggle("a11y-pause-animations", s.pauseAnimations);
  root.classList.toggle("a11y-readable-font", s.readableFont);
}

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<A11ySettings>(DEFAULTS);
  const [mounted, setMounted] = useState(false);

  // Load on mount (client only)
  useEffect(() => {
    const loaded = loadSettings();
    setSettings(loaded);
    applySettings(loaded);
    setMounted(true);
  }, []);

  // Persist + apply on change
  useEffect(() => {
    if (!mounted) return;
    applySettings(settings);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      /* ignore */
    }
  }, [settings, mounted]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const update = <K extends keyof A11ySettings>(key: K, value: A11ySettings[K]) =>
    setSettings((prev) => ({ ...prev, [key]: value }));

  const toggle = (key: keyof A11ySettings) =>
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));

  const reset = () => setSettings(DEFAULTS);

  return (
    <>
      {/* Floating launcher */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "סגירת תפריט נגישות" : "פתיחת תפריט נגישות"}
        aria-expanded={open}
        aria-controls="a11y-panel"
        className="fixed bottom-5 left-5 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl ring-2 ring-background transition hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
      >
        <Accessibility className="h-7 w-7" aria-hidden="true" />
      </button>

      {/* Panel */}
      {open && (
        <div
          id="a11y-panel"
          role="dialog"
          aria-modal="false"
          aria-label="תפריט נגישות"
          dir="rtl"
          className="fixed bottom-24 left-5 z-[100] w-[min(20rem,calc(100vw-2.5rem))] rounded-2xl border bg-card text-card-foreground shadow-2xl"
        >
          <div className="flex items-center justify-between border-b px-4 py-3">
            <h2 className="font-display text-lg font-semibold">נגישות</h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="סגירה"
              className="rounded-full p-1 text-muted-foreground transition hover:bg-muted"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="space-y-4 px-4 py-4">
            {/* Font size */}
            <div>
              <p className="mb-2 text-xs font-semibold text-muted-foreground">גודל טקסט</p>
              <div className="flex items-center justify-between gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  aria-label="הקטנת טקסט"
                  onClick={() =>
                    update("fontScale", Math.max(0.85, +(settings.fontScale - 0.1).toFixed(2)))
                  }
                  disabled={settings.fontScale <= 0.85}
                >
                  <Minus className="h-4 w-4" aria-hidden="true" />
                </Button>
                <span aria-live="polite" className="min-w-[3.5rem] text-center text-sm font-medium">
                  {Math.round(settings.fontScale * 100)}%
                </span>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  aria-label="הגדלת טקסט"
                  onClick={() =>
                    update("fontScale", Math.min(1.6, +(settings.fontScale + 0.1).toFixed(2)))
                  }
                  disabled={settings.fontScale >= 1.6}
                >
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>

            {/* Toggles */}
            <div className="grid grid-cols-2 gap-2">
              <ToggleButton
                active={settings.highContrast}
                onClick={() => toggle("highContrast")}
                icon={<Contrast className="h-4 w-4" aria-hidden="true" />}
                label="ניגודיות גבוהה"
              />
              <ToggleButton
                active={settings.grayscale}
                onClick={() => toggle("grayscale")}
                icon={<Droplet className="h-4 w-4" aria-hidden="true" />}
                label="גווני אפור"
              />
              <ToggleButton
                active={settings.underlineLinks}
                onClick={() => toggle("underlineLinks")}
                icon={<Link2 className="h-4 w-4" aria-hidden="true" />}
                label="סימון קישורים"
              />
              <ToggleButton
                active={settings.pauseAnimations}
                onClick={() => toggle("pauseAnimations")}
                icon={<PauseCircle className="h-4 w-4" aria-hidden="true" />}
                label="עצירת אנימציות"
              />
              <ToggleButton
                active={settings.readableFont}
                onClick={() => toggle("readableFont")}
                icon={<Type className="h-4 w-4" aria-hidden="true" />}
                label="גופן קריא"
                className="col-span-2"
              />
            </div>

            {/* Reset */}
            <Button
              type="button"
              variant="ghost"
              className="w-full justify-center"
              onClick={reset}
            >
              <RotateCcw className="ml-2 h-4 w-4" aria-hidden="true" />
              איפוס הגדרות
            </Button>

            <p className="text-[11px] leading-relaxed text-muted-foreground">
              הגדרות הנגישות נשמרות במכשיר שלך לפי תקן WCAG 2.1 AA.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

function ToggleButton({
  active,
  onClick,
  icon,
  label,
  className = "",
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex flex-col items-center justify-center gap-1 rounded-lg border px-2 py-3 text-xs font-medium transition ${
        active
          ? "border-primary bg-primary/10 text-primary"
          : "border-border bg-card text-muted-foreground hover:bg-muted"
      } ${className}`}
    >
      {icon}
      <span className="text-center leading-tight">{label}</span>
    </button>
  );
}
