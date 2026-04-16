import { createFileRoute, Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "הדרכות AI בזום — מיכל זיו" },
      {
        name: "description",
        content:
          "סדנאות מעשיות בזום לעיצוב ובנייה עם AI ולהוראה בכלים דיגיטליים — עד 100 משתתפים, 60 דקות.",
      },
      { property: "og:title", content: "הדרכות AI בזום — מיכל זיו" },
      {
        property: "og:description",
        content: "סדנאות מעשיות בזום לעיצוב ובנייה עם AI ולהוראה בכלים דיגיטליים.",
      },
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
] as const;

function TrainingPage() {
  return (
    <div className="section-container">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="page-enter section-title">הדרכות AI בזום</h1>
        <p className="page-enter-delay-1 mt-3 text-lg text-muted-foreground">
          שתי סדנאות פרקטיות בזום עם תוצרים מיידיים לצוותים חינוכיים.
        </p>
      </div>

      <div className="page-enter-delay-2 mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
        {workshops.map((workshop) => (
          <article
            key={workshop.title}
            className="card-hover flex h-full flex-col overflow-hidden rounded-xl border bg-card shadow-sm"
          >
            <div className="flex h-48 items-center justify-center border-b bg-muted/40">
              <span className="rounded-full border border-dashed border-border px-4 py-2 text-sm text-muted-foreground">
                תמונת סדנה
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h2 className="font-display text-2xl font-bold text-primary">{workshop.title}</h2>

              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                  ⏱ {workshop.duration}
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                  👥 {workshop.participants}
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                  📹 {workshop.platform}
                </span>
              </div>

              <p className="mt-5 flex-1 text-sm leading-7 text-muted-foreground">{workshop.description}</p>

              <div className="mt-5">
                <p className="mb-3 text-xs font-semibold text-foreground">כלים בסדנה</p>
                <div className="flex flex-wrap gap-2">
                  {workshop.tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button asChild className="mt-6 w-full" size="lg">
                <Link to="/contact">לתיאום סדנה</Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
