import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "בלוג — מיכל זיו" },
      { name: "description", content: "מאמרים על חדשנות פדגוגית, AI בחינוך, והוראת מתמטיקה" },
      { property: "og:title", content: "בלוג — מיכל זיו" },
      { property: "og:description", content: "מאמרים על חדשנות פדגוגית, AI בחינוך, והוראת מתמטיקה" },
    ],
  }),
  component: BlogPage,
});

const articles = [
  {
    title: "איך AI משנה את הוראת המתמטיקה",
    date: "2026-03-15",
    summary: "סקירה של הכלים החדשים שמאפשרים למורים ליצור חוויות למידה מותאמות אישית, ואיך זה משפיע על הישגי התלמידים.",
  },
  {
    title: "מודל Hybrid App — מהפכה בדיווח STEM",
    date: "2026-02-20",
    summary: "איך מיקרו-אפליקציות מוטמעות במערכות קיימות פותרות את בעיית הדיווח הגדולה של בתי הספר בישראל.",
  },
  {
    title: "5 טיפים להוראת פונקציות בכיתה ח׳",
    date: "2026-01-10",
    summary: "שיטות מעשיות שעוזרות לתלמידים להבין את הקשר בין הביטוי האלגברי לגרף, בלי לאבד את העניין.",
  },
  {
    title: "למה תלמידים מפחדים מסטטיסטיקה (ומה עושים עם זה)",
    date: "2025-12-05",
    summary: "ניתוח הקשיים הנפוצים בהוראת סטטיסטיקה והסתברות, עם דוגמאות מהכיתה שלי.",
  },
];

function BlogPage() {
  const articlesRef = useScrollReveal();

  return (
    <div className="section-container">
      <h1 className="page-enter section-title">בלוג</h1>
      <p className="page-enter-delay-1 mt-3 text-lg text-muted-foreground">מחשבות, תובנות וטיפים מהשטח</p>

      <div ref={articlesRef} className="scroll-reveal mt-10 space-y-6">
        {articles.map((article) => (
          <Card key={article.title} className="card-hover">
            <CardHeader>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {new Date(article.date).toLocaleDateString("he-IL", { year: "numeric", month: "long", day: "numeric" })}
                </span>
              </div>
              <CardTitle className="mt-2 font-display text-xl">{article.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">{article.summary}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
