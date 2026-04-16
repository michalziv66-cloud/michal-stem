import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type Settings = {
  fontSize: number;
  highContrast: boolean;
  highlightLinks: boolean;
};

const STORAGE_KEY = "a11y-settings";
const DEFAULT_SETTINGS: Settings = {
  fontSize: 0,
  highContrast: false,
  highlightLinks: false,
};

function normalizeSettings(value: unknown): Settings {
  if (!value || typeof value !== "object") return DEFAULT_SETTINGS;

  const candidate = value as Partial<Settings>;
  const fontSize = candidate.fontSize === 1 || candidate.fontSize === 2 ? candidate.fontSize : 0;

  return {
    fontSize,
    highContrast: Boolean(candidate.highContrast),
    highlightLinks: Boolean(candidate.highlightLinks),
  };
}

function applySettings(settings: Settings) {
  const html = document.documentElement;
  html.classList.remove("a11y-font-1", "a11y-font-2");

  if (settings.fontSize === 1) html.classList.add("a11y-font-1");
  if (settings.fontSize === 2) html.classList.add("a11y-font-2");

  html.classList.toggle("a11y-high-contrast", settings.highContrast);
  html.classList.toggle("a11y-highlight-links", settings.highlightLinks);
}

export function AccessibilityWidget() {
  const [mounted, setMounted] = useState(typeof window !== "undefined");
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);

  useEffect(() => {
    if (!mounted) setMounted(true);
    console.log("[a11y] widget mounted");

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = normalizeSettings(JSON.parse(raw));
        setSettings(parsed);
        applySettings(parsed);
      } else {
        applySettings(DEFAULT_SETTINGS);
      }
    } catch {
      applySettings(DEFAULT_SETTINGS);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    applySettings(settings);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // ignore storage failures
    }
  }, [mounted, settings]);

  const updateSettings = useCallback((partial: Partial<Settings>) => {
    setSettings((prev) => ({ ...prev, ...partial }));
  }, []);

  const resetSettings = useCallback(() => {
    setSettings(DEFAULT_SETTINGS);
  }, []);

  if (!mounted) return null;

  const fontLabels = ["רגיל", "גדול", "גדול מאוד"];
  const fontButtons = ["א", "א+", "א++"];

  return (
    <div className="fixed bottom-4 left-4 z-[9999]" dir="rtl">
      {open && (
        <div className="mb-2 w-64 rounded-xl border bg-card p-4 text-card-foreground shadow-xl">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-bold">הגדרות נגישות</h3>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="סגור חלון נגישות"
            >
              ✕
            </button>
          </div>

          <div className="space-y-3">
            <div>
              <p className="mb-1.5 text-xs font-medium">גודל טקסט: {fontLabels[settings.fontSize]}</p>
              <div className="flex gap-1.5">
                {[0, 1, 2].map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => updateSettings({ fontSize: level as Settings["fontSize"] })}
                    className={`flex-1 rounded-md border px-2 py-1.5 text-xs font-medium transition-colors ${
                      settings.fontSize === level
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background hover:bg-accent"
                    }`}
                    aria-pressed={settings.fontSize === level}
                  >
                    {fontButtons[level]}
                  </button>
                ))}
              </div>
            </div>

            <label className="flex cursor-pointer items-center justify-between rounded-md border px-3 py-2">
              <span className="text-xs font-medium">ניגודיות גבוהה</span>
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={(event) => updateSettings({ highContrast: event.target.checked })}
                className="h-4 w-4 accent-primary"
              />
            </label>

            <label className="flex cursor-pointer items-center justify-between rounded-md border px-3 py-2">
              <span className="text-xs font-medium">סימון קישורים</span>
              <input
                type="checkbox"
                checked={settings.highlightLinks}
                onChange={(event) => updateSettings({ highlightLinks: event.target.checked })}
                className="h-4 w-4 accent-primary"
              />
            </label>

            <Button variant="outline" size="sm" className="w-full text-xs" onClick={resetSettings}>
              איפוס הגדרות
            </Button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl text-primary-foreground shadow-lg transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        aria-label="פתח הגדרות נגישות"
        title="נגישות"
      >
        ♿
      </button>
    </div>
  );
}
