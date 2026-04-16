import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";

import cardExperience from "@/assets/card-experience.jpg";
import cardVision from "@/assets/card-about-vr.png";
import cardStem from "@/assets/card-stem.png";
import profileImage from "@/assets/michal-profile.png";
import { BrandLogo } from "@/components/BrandLogo";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "מיכל זיו — מתמטיקה מחוץ לסוגריים" },
      { name: "description", content: "מובילת פיתוח פדגוגי דיגיטלי, מחנכת בחטיבת הביניים, מפתחת כלי AI ל-STEM" },
      { property: "og:title", content: "מיכל זיו — מתמטיקה מחוץ לסוגריים" },
      { property: "og:description", content: "מובילת פיתוח פדגוגי דיגיטלי, מחנכת בחטיבת הביניים, מפתחת כלי AI ל-STEM" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const highlightsRef = useScrollReveal();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.getElementById("a11y-widget")) return;

    var SK = "a11y-settings";
    var defaults = { fontSize: 0, highContrast: false, highlightLinks: false };
    function load() { try { var r = localStorage.getItem(SK); return r ? JSON.parse(r) : Object.assign({}, defaults); } catch (e) { return Object.assign({}, defaults); } }
    function save(s: any) { try { localStorage.setItem(SK, JSON.stringify(s)); } catch (e) {} }
    function apply(s: any) {
      var h = document.documentElement;
      h.classList.remove("a11y-font-1", "a11y-font-2");
      if (s.fontSize === 1) h.classList.add("a11y-font-1");
      if (s.fontSize === 2) h.classList.add("a11y-font-2");
      h.classList.toggle("a11y-high-contrast", s.highContrast);
      h.classList.toggle("a11y-highlight-links", s.highlightLinks);
    }

    var s = load();
    apply(s);

    var wrap = document.createElement("div");
    wrap.id = "a11y-widget";
    wrap.style.cssText = "position:fixed;bottom:16px;left:16px;z-index:9999;direction:rtl;font-family:var(--font-sans),sans-serif;";

    var panel = document.createElement("div");
    panel.style.cssText = "display:none;margin-bottom:8px;width:256px;border-radius:12px;border:1px solid var(--border);background:var(--card);color:var(--card-foreground);padding:16px;box-shadow:0 8px 24px rgba(0,0,0,.2);";

    function render() {
      var fl = ["רגיל", "גדול", "גדול מאוד"];
      var bl = ["א", "א+", "א++"];
      panel.innerHTML =
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><b style="font-size:14px">הגדרות נגישות</b><button id="a11y-close" style="background:none;border:none;cursor:pointer;font-size:18px;color:var(--muted-foreground);line-height:1">✕</button></div>'
        + '<p style="font-size:12px;margin:0 0 6px">גודל טקסט: ' + fl[s.fontSize] + '</p>'
        + '<div style="display:flex;gap:6px;margin-bottom:12px">'
        + bl.map(function (l, i) {
            var active = s.fontSize === i;
            return '<button data-fs="' + i + '" style="flex:1;border-radius:6px;padding:6px;font-size:12px;cursor:pointer;border:1px solid ' + (active ? 'var(--primary)' : 'var(--border)') + ';background:' + (active ? 'var(--primary)' : 'var(--background)') + ';color:' + (active ? 'var(--primary-foreground)' : 'inherit') + '">' + l + '</button>';
          }).join('')
        + '</div>'
        + '<label style="display:flex;justify-content:space-between;align-items:center;border:1px solid var(--border);border-radius:6px;padding:8px 12px;margin-bottom:8px;cursor:pointer;font-size:12px"><span>ניגודיות גבוהה</span><input type="checkbox" id="a11y-hc" ' + (s.highContrast ? 'checked' : '') + ' style="width:16px;height:16px;accent-color:var(--primary)"></label>'
        + '<label style="display:flex;justify-content:space-between;align-items:center;border:1px solid var(--border);border-radius:6px;padding:8px 12px;margin-bottom:8px;cursor:pointer;font-size:12px"><span>סימון קישורים</span><input type="checkbox" id="a11y-hl" ' + (s.highlightLinks ? 'checked' : '') + ' style="width:16px;height:16px;accent-color:var(--primary)"></label>'
        + '<button id="a11y-reset" style="width:100%;border:1px solid var(--border);border-radius:6px;padding:6px;font-size:12px;background:var(--background);color:inherit;cursor:pointer">איפוס הגדרות</button>';
      panel.querySelector('#a11y-close')!.addEventListener('click', function () { panel.style.display = 'none'; });
      panel.querySelectorAll('[data-fs]').forEach(function (b: any) { b.addEventListener('click', function () { s.fontSize = +b.dataset.fs; apply(s); save(s); render(); }); });
      var hcEl = panel.querySelector('#a11y-hc') as HTMLInputElement; if (hcEl) hcEl.addEventListener('change', function () { s.highContrast = hcEl.checked; apply(s); save(s); render(); });
      var hlEl = panel.querySelector('#a11y-hl') as HTMLInputElement; if (hlEl) hlEl.addEventListener('change', function () { s.highlightLinks = hlEl.checked; apply(s); save(s); render(); });
      var resetEl = panel.querySelector('#a11y-reset'); if (resetEl) resetEl.addEventListener('click', function () { s = Object.assign({}, defaults); apply(s); save(s); render(); });
    }

    var btn = document.createElement("button");
    btn.setAttribute("aria-label", "נגישות");
    btn.title = "נגישות";
    btn.textContent = "♿";
    btn.style.cssText = "width:48px;height:48px;border-radius:50%;background:var(--primary);color:var(--primary-foreground);font-size:20px;display:flex;align-items:center;justify-content:center;border:none;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,.3);transition:transform .2s;";
    btn.onmouseenter = function () { btn.style.transform = "scale(1.1)"; };
    btn.onmouseleave = function () { btn.style.transform = "scale(1)"; };
    btn.onclick = function () {
      var vis = panel.style.display === "none";
      panel.style.display = vis ? "block" : "none";
      if (vis) render();
    };

    wrap.appendChild(panel);
    wrap.appendChild(btn);
    document.body.appendChild(wrap);
  }, []);

  return (
    <>
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="hero-glow-1 absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-gold blur-3xl" />
          <div className="hero-glow-2 absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-primary-foreground blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:py-32 lg:py-40">
          <div className="hero-avatar mx-auto mb-8 h-48 w-48 overflow-hidden rounded-full border-4 border-gold/40 shadow-xl sm:h-56 sm:w-56 lg:h-64 lg:w-64">
            <div className="shimmer-border absolute inset-0 rounded-full" />
            <img src={profileImage} alt="מיכל זיו" className="h-full w-full object-cover" />
          </div>
          <BrandLogo theme="dark" variant="hero" className="hero-logo mx-auto mb-6" />
          <p className="hero-subtitle mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            מורה למתמטיקה בחטיבת הביניים | מפתחת כלי <span className="whitespace-nowrap">AI ל-STEM</span>
          </p>
          <div className="hero-buttons mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild variant="hero" size="lg">
              <Link to="/tools">לכלים האינטראקטיביים</Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/principals">למנהלי חטיבות</Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/training">הדרכת חדרי מורים</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div ref={highlightsRef} className="scroll-reveal grid gap-8 sm:grid-cols-3">
          {[
            { label: "יזמית פדגוגית במתמטיקה", image: cardExperience, link: "/entrepreneurship" },
            { num: "AI", label: "כלים חכמים ל-STEM", image: cardStem, round: false, link: "/tools" },
            { label: "אודות", image: cardVision, link: "/about" },
          ].map((item, i) => {
            const content = (
              <div
                key={item.label}
                className="card-hover overflow-hidden rounded-xl border bg-card text-center"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className={`mx-auto mt-4 overflow-hidden border-2 border-gold/30 ${item.round !== false ? "h-20 w-20 rounded-full" : "h-20 w-32 rounded-lg"}`}>
                  <img src={item.image} alt={item.label} className={`h-full w-full ${item.round !== false ? "object-cover" : "object-contain"}`} />
                </div>
                <div className="p-4 pt-3">
                  {"num" in item && item.num && <div className="font-display text-2xl font-bold text-primary">{item.num}</div>}
                  <p className={`text-sm text-muted-foreground ${"num" in item && item.num ? "mt-1" : "mt-0 font-display text-base font-semibold text-primary"}`}>{item.label}</p>
                </div>
              </div>
            );
            return "link" in item && item.link ? (
              <Link key={item.label} to={item.link as "/"} className="block">
                {content}
              </Link>
            ) : content;
          })}
        </div>
      </section>
    </>
  );
}
