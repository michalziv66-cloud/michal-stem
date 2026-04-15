import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import cardExperience from "@/assets/card-experience.jpg";
import cardVision from "@/assets/card-vision.png";
import cardStem from "@/assets/card-stem.png";
import profileImage from "@/assets/michal-profile.png";
import logo from "@/assets/logo-white.svg";

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

  return (
    <>
      {/* Hero */}
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
          <img src={logo} alt="מיכל זיו — מתמטיקה מחוץ לסוגריים" className="hero-logo mx-auto mb-6 h-28 w-auto sm:h-36 lg:h-44" />
          <p className="hero-subtitle mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            מורה למתמטיקה בחטיבת הביניים | מפתחת כלי AI ל-STEM
          </p>
          <div className="hero-buttons mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild variant="hero" size="lg">
              <Link to="/tools">לכלים האינטראקטיביים</Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/principals">למנהלי חטיבות</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-container">
        <div ref={highlightsRef} className="scroll-reveal grid gap-8 sm:grid-cols-3">
          {[
            { label: "יזמית פדגוגית במתמטיקה", image: cardExperience },
            { num: "AI", label: "כלים חכמים ל-STEM", image: cardStem, round: false },
            { num: "∞", label: "חזון: לומדים עצמאיים", image: cardVision },
          ].map((item, i) => (
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
          ))}
        </div>
      </section>
    </>
  );
}
