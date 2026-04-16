import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "הדרכות AI בזום — מיכל זיו" },
      { name: "description", content: "סדנאות מעשיות בזום לעיצוב ובנייה עם AI ולהוראה בכלים דיגיטליים — עד 100 משתתפים, 60 דקות" },
      { property: "og:title", content: "הדרכות AI בזום — מיכל זיו" },
      { property: "og:description", content: "סדנאות מעשיות בזום לעיצוב ובנייה עם AI ולהוראה בכלים דיגיטליים" },
    ],
  }),
  component: TrainingPage,
});

const workshops = [
  {
    title: "עיצוב ובנייה עם AI",
    duration: "60 דקות",
    participants: "עד 100 משתתפים",
    platform: "זום",
    description:
      "סדנה מעשית לבניית חומרי הוראה, מצגות וכלים דיגיטליים באמצעות כלי AI. המשתתפים יוצאים עם תוצר מוכן לשימוש.",
    tools: [
      "Claude",
      "ChatGPT",
      "Gemini",
      "Copilot",
      "Gamma",
      "Canva",
      "Lovable",
      "Base44",
    ],
  },
  {
    title: "הוראה בכלים דיגיטליים",
    duration: "60 דקות",
    participants: "עד 100 משתתפים",
    platform: "זום",
    description:
      "סדנה מעשית לשילוב כלים דיגיטליים בהוראה היומיומית — ניהול כיתה, יצירת תוכן, מעקב ומשוב וכלים ליצירת שיעורים מרתקים.",
    tools: [
      "Google Classroom",
      "Google Docs",
      "Google Sheets",
      "Google Forms",
      "Google Slides",
      "Google Drive",
      "Google Meet",
      "Gmail",
      "Google Keep",
      "Google Sites",
      "NotebookLM",
      "Kahoot",
      "Suno",
      "Moodle",
    ],
  },
];

function TrainingPage() {
  const headerRef = useScrollReveal();
  const cardsRef = useScrollReveal(150);

  return (
    <div className="section-container">
      <div ref={headerRef} className="scroll-reveal text-center">
        <h1 className="section-title">הדרכות AI בזום</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          סדנאות מעשיות בזום — כלים, תוצרים ויישום מיידי בכיתה
        </p>
      </div>

      <div
        ref={cardsRef}
        className="scroll-reveal mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2"
      >
        {workshops.map((ws, i) => (
          <div
            key={ws.title}
            className="card-hover flex flex-col overflow-hidden rounded-xl border bg-card"
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            {/* Image placeholder */}
            <div className="flex h-48 items-center justify-center bg-primary/10 text-4xl text-primary/40">
              {i === 0 ? "🤖" : "💻"}
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h2 className="font-display text-xl font-bold text-primary">
                {ws.title}
              </h2>

              {/* Meta badges */}
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                  ⏱ {ws.duration}
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                  👥 {ws.participants}
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                  📹 {ws.platform}
                </span>
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {ws.description}
              </p>

              {/* Tools */}
              <div className="mt-4">
                <p className="mb-2 text-xs font-semibold text-foreground">
                  כלים בסדנה:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {ws.tools.map((tool) => (
                    <Badge
                      key={tool}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button asChild className="mt-6 w-full" size="lg">
                <Link to="/contact">לתיאום סדנה</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
