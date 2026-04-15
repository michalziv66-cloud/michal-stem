import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title: "כלים אינטראקטיביים — מיכל זיו" },
      { name: "description", content: "כלים אינטראקטיביים מבוססי AI לפונקציות, סטטיסטיקה וגיאומטריה" },
      { property: "og:title", content: "כלים אינטראקטיביים — מיכל זיו" },
      { property: "og:description", content: "כלים אינטראקטיביים מבוססי AI לפונקציות, סטטיסטיקה וגיאומטריה" },
    ],
  }),
  component: ToolsPage,
});

const toolCategories = [
  {
    title: "פונקציות",
    description: "כלים אינטראקטיביים לחקירת פונקציות לינאריות, ריבועיות ומעריכיות. התלמידים יכולים לשנות פרמטרים ולראות את ההשפעה בזמן אמת.",
    icon: "📈",
    color: "bg-primary/10 text-primary",
    url: "https://math-versatile-path-pro.base44.app",
  },
  {
    title: "סטטיסטיקה ואי וודאות",
    description: "כלים להבנת הסתברות, ממוצעים, חציון וסטיית תקן. סימולציות אינטראקטיביות שהופכות נתונים מופשטים למוחשיים.",
    icon: "📊",
    color: "bg-gold/10 text-gold-foreground",
  },
  {
    title: "גיאומטריה",
    description: "כלים לחקירת צורות, זוויות, שטחים והיקפים. סביבת עבודה ויזואלית שמאפשרת בנייה, מדידה והוכחה.",
    icon: "📐",
    color: "bg-accent text-accent-foreground",
  },
];

const standaloneTools = [
  {
    title: "חשבון מים – דף עבודה אינטראקטיבי",
    description: "דף עבודה אינטראקטיבי בנושא חשבון מים: חישוב תעריפים, בניית מערכת משוואות ופתרונה. כולל שלבים מודרכים ושאלת בונוס.",
    icon: "💧",
    color: "bg-primary/10 text-primary",
    url: "/tools/water-bill.html",
  },
];

function ToolsPage() {
  return (
    <div className="section-container">
      <h1 className="section-title">כלים אינטראקטיביים</h1>
      <p className="mt-3 text-lg text-muted-foreground">מיקרו-אפליקציות מבוססות AI לחקירה עצמאית בתחומי המתמטיקה</p>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {toolCategories.map((cat) => (
          <Card key={cat.title} className="card-hover overflow-hidden">
            <CardHeader>
              <div className={`mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg text-2xl ${cat.color}`}>
                {cat.icon}
              </div>
              <CardTitle className="font-display text-xl">{cat.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">{cat.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {"url" in cat && cat.url ? (
                <iframe
                  src={cat.url}
                  title={cat.title}
                  className="h-[400px] w-full rounded-lg border"
                  allow="fullscreen"
                />
              ) : (
                <div className="rounded-lg border-2 border-dashed border-border bg-muted/50 p-8 text-center text-sm text-muted-foreground">
                  כלי אינטראקטיבי ייטען כאן
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
