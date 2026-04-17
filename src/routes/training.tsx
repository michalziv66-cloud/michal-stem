import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ToolLogo } from "@/components/ToolLogos";
import trainingAiImage from "@/assets/training-ai-design.png";
import trainingDigitalImage from "@/assets/training-digital-tools.png";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "סדנאות AI בזום למורים — עיצוב, בנייה והוראה דיגיטלית | מיכל זיו" },
      {
        name: "description",
        content:
          "סדנאות מקוונות בזום למורים: עיצוב ובנייה עם בינה מלאכותית, ChatGPT בכיתה וכלים דיגיטליים להוראה. עד 100 משתתפים.",
      },
      { name: "keywords", content: "סדנאות AI, הדרכות בזום, ChatGPT למורים, AI בכיתה, סדנת בינה מלאכותית" },
      { property: "og:title", content: "סדנאות AI בזום למורים | מיכל זיו" },
      {
        property: "og:description",
        content: "סדנאות מקוונות בעיצוב, בנייה והוראה עם AI — עד 100 משתתפים.",
      },
      { property: "og:url", content: "https://michal-stem.lovable.app/training" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "סדנאות AI בזום למורים",
          description: "סדנאות מקוונות בזום: עיצוב ובנייה עם בינה מלאכותית והוראה בכלים דיגיטליים.",
          provider: {
            "@type": "Person",
            name: "מיכל זיו",
            url: "https://michal-stem.lovable.app/",
          },
          inLanguage: "he",
          courseMode: "online",
        }),
      },
    ],
  }),
  component: TrainingPage,
});

type Workshop = {
  title: string;
  description: string;
  tools: string[];
  image?: string;
};

const workshops: Workshop[] = [
  {
    title: "עיצוב ובנייה עם AI",
    description:
      "סדנה מעשית לבניית חומרי הוראה, מצגות וכלים דיגיטליים באמצעות כלי AI. המשתתפים יוצאים עם תוצר מוכן לשימוש.",
    tools: ["Claude", "ChatGPT", "Gemini", "Copilot", "Gamma", "Canva", "Lovable", "Base44"],
    image: trainingAiImage,
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
    image: trainingDigitalImage,
  },
];

function WorkshopCard({ workshop }: { workshop: Workshop }) {
  return (
    <div className="page-enter-delay-2">
      <Card className="card-hover group h-full overflow-hidden">
        <div className="relative aspect-[16/9] overflow-hidden bg-primary/5">
          {workshop.image ? (
            <>
              <img
                src={workshop.image}
                alt={workshop.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />
            </>
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="text-5xl">🎓</span>
            </div>
          )}
        </div>

        <CardHeader>
          <CardTitle className="font-display text-xl">{workshop.title}</CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            {workshop.description}
          </CardDescription>

          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">⏱ 60 דקות</span>
            <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">👥 עד 100 משתתפים</span>
            <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">💻 זום</span>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div>
            <p className="mb-2 text-xs font-semibold text-muted-foreground">כלים בסדנה</p>
            <div className="flex flex-wrap gap-1.5">
              {workshop.tools.map((tool) => (
                <Badge key={tool} variant="secondary" className="inline-flex items-center gap-1 text-xs">
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
