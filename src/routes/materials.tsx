import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/materials")({
  head: () => ({
    meta: [
      { title: "חומרי לימוד למתמטיקה — מצגות ודפי עבודה | מיכל זיו" },
      {
        name: "description",
        content:
          "אוסף חומרי לימוד מוכנים להוראת מתמטיקה בחטיבת הביניים: מצגות שיעור, דפי עבודה ופעילויות בנושאי פונקציות, סטטיסטיקה וגאומטריה.",
      },
      { name: "keywords", content: "חומרי לימוד מתמטיקה, מצגות שיעור, דפי עבודה, חטיבת ביניים" },
      { property: "og:title", content: "חומרי לימוד למתמטיקה | מיכל זיו" },
      {
        property: "og:description",
        content: "מצגות, דפי עבודה ופעילויות מוכנות להוראת מתמטיקה בחטיבה.",
      },
      { property: "og:url", content: "https://michal-stem.lovable.app/materials" },
    ],
  }),
  component: MaterialsPage,
});

const materials = [
  { title: "מצגות שיעור — פונקציות", description: "סדרת מצגות לכיתות ח׳–ט׳ בנושא פונקציות לינאריות וריבועיות", type: "מצגת", icon: "📽️" },
  { title: "דפי עבודה — סטטיסטיקה", description: "דפי עבודה מודפסים ודיגיטליים בנושא ממוצע, חציון ושכיח", type: "דף עבודה", icon: "📄" },
  { title: "מצגות — גיאומטריה", description: "מצגות אינטראקטיביות בנושא משולשים, מרובעים ומעגלים", type: "מצגת", icon: "📽️" },
  { title: "דפי עבודה — הסתברות", description: "תרגילים מעשיים בהסתברות וצירופים לכיתות ז׳–ח׳", type: "דף עבודה", icon: "📄" },
  { title: "מדריך למורה — כלי AI", description: "מדריך מפורט לשימוש בכלים האינטראקטיביים בכיתה", type: "מדריך", icon: "📘" },
  { title: "משחקי חשיבה מתמטיים", description: "אוסף משחקים ואתגרים לפיתוח חשיבה מתמטית", type: "משחק", icon: "🎲" },
];

function MaterialsPage() {
  const gridRef = useScrollReveal();

  return (
    <div className="section-container">
      <h1 className="page-enter section-title">חומרי לימוד</h1>
      <p className="page-enter-delay-1 mt-3 text-lg text-muted-foreground">מצגות, דפי עבודה ומדריכים להורדה חופשית</p>

      <div ref={gridRef} className="scroll-reveal mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {materials.map((mat) => (
          <Card key={mat.title} className="card-hover">
            <CardHeader>
              <div className="mb-2 text-3xl">{mat.icon}</div>
              <CardTitle className="font-display text-lg">{mat.title}</CardTitle>
              <CardDescription>{mat.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <span className="mb-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                {mat.type}
              </span>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer">
                  פתח ב-Google Drive
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
