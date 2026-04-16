import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";

type Settings = {
  fontSize: number; // 0 = normal, 1 = large, 2 = x-large
  highContrast: boolean;
  highlightLinks: boolean;
};

const DEFAULT_SETTINGS: Settings = { fontSize: 0, highContrast: false, highlightLinks: false };
const STORAGE_KEY = "a11y-settings";

function loadSettings(): Settings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return DEFAULT_SETTINGS;
}

function saveSettings(s: Settings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
}

function applySettings(s: Settings) {
  const html = document.documentElement;
  html.classList.remove("a11y-font-1", "a11y-font-2");
  if (s.fontSize === 1) html.classList.add("a11y-font-1");
  if (s.fontSize === 2) html.classList.add("a11y-font-2");
  html.classList.toggle("a11y-high-contrast", s.highContrast);
  html.classList.toggle("a11y-highlight-links", s.highlightLinks);
}

export function AccessibilityWidget() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);

  // Client-only init
  useEffect(() => {
    const saved = loadSettings();
    setSettings(saved);
    applySettings(saved);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applySettings(settings);
    saveSettings(settings);
  }, [settings, mounted]);

  const update = useCallback((partial: Partial<Settings>) => {
    setSettings((prev) => ({ ...prev, ...partial }));
  }, []);

  const reset = useCallback(() => {
    setSettings(DEFAULT_SETTINGS);
  }, []);

  // Don't render during SSR
  if (!mounted) return null;

  const fontLabels = ["רגיל", "גדול", "גדול מאוד"];

  return (
    <div className="fixed bottom-4 start-4 z-[9999]" dir="rtl">
      {open && (
        <div className="mb-2 w-64 rounded-xl border bg-card p-4 shadow-xl">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-bold">הגדרות נגישות</h3>
            <button
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground"
              aria-label="סגור"
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
                    onClick={() => update({ fontSize: level })}
                    className={`flex-1 rounded-md border px-2 py-1.5 text-xs font-medium transition-colors ${
                      settings.fontSize === level
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
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={(e) => update({ highContrast: e.target.checked })}
                className="h-4 w-4 accent-primary"
              />
            </label>

            <label className="flex cursor-pointer items-center justify-between rounded-md border px-3 py-2">
              <span className="text-xs font-medium">סימון קישורים</span>
              <input
                type="checkbox"
                checked={settings.highlightLinks}
                onChange={(e) => update({ highlightLinks: e.target.checked })}
                className="h-4 w-4 accent-primary"
              />
            </label>

            <Button variant="outline" size="sm" className="w-full text-xs" onClick={reset}>
              איפוס הגדרות
            </Button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl text-primary-foreground shadow-lg transition-transform hover:scale-110"
        aria-label="נגישות"
        title="נגישות"
      >
        ♿
      </button>
    </div>
  );
}
