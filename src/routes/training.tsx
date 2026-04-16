import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ToolLogo } from "@/components/ToolLogos";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "הדרכות AI בזום — מיכל זיו" },
      { name: "description", content: "סדנאות מעשיות בזום: עיצוב ובנייה עם AI, הוראה בכלים דיגיטליים — עד 100 משתתפים" },
      { property: "og:title", content: "הדרכות AI בזום — מיכל זיו" },
      { property: "og:description", content: "סדנאות מעשיות בזום: עיצוב ובנייה עם AI, הוראה בכלים דיגיטליים" },
    ],
  }),
  component: TrainingPage,
});

type Workshop = {
  title: string;
  description: string;
  tools: string[];
};

const workshops: Workshop[] = [
  {
    title: "עיצוב ובנייה עם AI",
    description:
      "סדנה מעשית לבניית חומרי הוראה, מצגות וכלים דיגיטליים באמצעות כלי AI. המשתתפים יוצאים עם תוצר מוכן לשימוש.",
    tools: ["Claude", "ChatGPT", "Gemini", "Copilot", "Gamma", "Canva", "Lovable", "Base44"],
  },
  {
    title: "הוראה בכלים דיגיטליים",
    description:
      "סדנה מעשית לשילוב כלים דיגיטליים בהוראה היומיומית — ניהול כיתה, יצירת תוכן, מעקב ומשוב וכלים ליצירת שיעורים מרתקים.",
    tools: [
      "Google Classroom", "Google Docs", "Google Sheets", "Google Forms",
      "Google Slides", "Google Drive", "Google Meet", "Gmail",
      "Google Keep", "Google Sites", "NotebookLM", "Kahoot", "Suno", "Moodle",
    ],
  },
];

function WorkshopCard({ workshop }: { workshop: Workshop }) {
  return (
    <div className="page-enter-delay-2">
      <Card className="card-hover h-full overflow-hidden">
        {/* Image placeholder */}
        <div className="flex aspect-[16/9] items-center justify-center bg-primary/5">
          <span className="text-5xl">🎓</span>
        </div>

        <CardHeader>
          <CardTitle className="font-display text-xl">{workshop.title}</CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            {workshop.description}
          </CardDescription>

          {/* Meta badges */}
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">⏱ 60 דקות</span>
            <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">👥 עד 100 משתתפים</span>
            <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">💻 זום</span>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Tools */}
          <div>
            <p className="mb-2 text-xs font-semibold text-muted-foreground">כלים בסדנה</p>
            <div className="flex flex-wrap gap-1.5">
              {workshop.tools.map((tool) => (
                <Badge key={tool} variant="secondary" className="flex items-center gap-1.5 text-xs">
                  <ToolLogo name={tool} />
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          <Button asChild className="w-full" size="lg">
            <Link to="/contact">לתיאום סדנה</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

function TrainingPage() {
  return (
    <div className="section-container">
      <h1 className="page-enter section-title">הדרכות AI בזום</h1>
      <p className="page-enter-delay-1 mt-3 text-lg text-muted-foreground">
        סדנאות מעשיות בזום — יוצאים עם תוצר מוכן לשימוש
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {workshops.map((w) => (
          <WorkshopCard key={w.title} workshop={w} />
        ))}
      </div>
    </div>
  );
}
