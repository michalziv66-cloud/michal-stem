import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const toolBrands: Record<string, { abbr: string; bg: string; fg: string }> = {
  Claude:           { abbr: "C",  bg: "#d97706", fg: "#fff" },
  ChatGPT:          { abbr: "G",  bg: "#10a37f", fg: "#fff" },
  Gemini:           { abbr: "G",  bg: "#4285f4", fg: "#fff" },
  Copilot:          { abbr: "Co", bg: "#6366f1", fg: "#fff" },
  Gamma:            { abbr: "γ",  bg: "#8b5cf6", fg: "#fff" },
  Canva:            { abbr: "C",  bg: "#00c4cc", fg: "#fff" },
  Lovable:          { abbr: "♥",  bg: "#ec4899", fg: "#fff" },
  Base44:           { abbr: "44", bg: "#1e293b", fg: "#fff" },
  "Google Classroom": { abbr: "GC", bg: "#0f9d58", fg: "#fff" },
  "Google Docs":    { abbr: "D",  bg: "#4285f4", fg: "#fff" },
  "Google Sheets":  { abbr: "S",  bg: "#0f9d58", fg: "#fff" },
  "Google Forms":   { abbr: "F",  bg: "#7b1fa2", fg: "#fff" },
  "Google Slides":  { abbr: "Sl", bg: "#f4b400", fg: "#fff" },
  "Google Drive":   { abbr: "Dr", bg: "#4285f4", fg: "#fff" },
  "Google Meet":    { abbr: "M",  bg: "#00897b", fg: "#fff" },
  Gmail:            { abbr: "✉",  bg: "#ea4335", fg: "#fff" },
  "Google Keep":    { abbr: "K",  bg: "#fbbc04", fg: "#333" },
  "Google Sites":   { abbr: "Si", bg: "#4285f4", fg: "#fff" },
  NotebookLM:       { abbr: "NB", bg: "#1a73e8", fg: "#fff" },
  Kahoot:           { abbr: "K!", bg: "#46178f", fg: "#fff" },
  Suno:             { abbr: "♫",  bg: "#1db954", fg: "#fff" },
  Moodle:           { abbr: "M",  bg: "#f98012", fg: "#fff" },
};

function ToolIcon({ name }: { name: string }) {
  const brand = toolBrands[name];
  if (!brand) return null;
  return (
    <span
      className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold leading-none"
      style={{ backgroundColor: brand.bg, color: brand.fg }}
    >
      {brand.abbr}
    </span>
  );
}

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
                  <ToolIcon name={tool} />
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
