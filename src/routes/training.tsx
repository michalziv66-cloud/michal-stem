import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "הדרכת חדרי מורים — מיכל זיו" },
      { name: "description", content: "מודל יישומי להזנקת מדדי STEM ואוריינות בחטיבת הביניים — הדרכות מותאמות לצוותי הוראה" },
      { property: "og:title", content: "הדרכת חדרי מורים — מיכל זיו" },
      { property: "og:description", content: "מודל יישומי להזנקת מדדי STEM ואוריינות בחטיבת הביניים" },
    ],
  }),
  component: TrainingPage,
});

const advantages = [
  { icon: "✅", text: "עמידה ביעדי המחוז: הבטחת דיווח ביצוע של 100% ממשימות האוריינות" },
  { icon: "📊", text: "שיפור הישגים ב-PISA/TIMSS: תרגול שאלות חקר בפורמט דיגיטלי" },
  { icon: "🏆", text: "תגמול ומשאבים: ביסוס סטטוס כבית ספר מקדם STEM" },
  { icon: "🧑‍🏫", text: "פתרון למורים: הכל מוכן, חוסך זמן ומוריד חסם טכנולוגי" },
];

const checklistItems = [
  "חתימה דיגיטלית: האם מערכת ה-BI המשרדית משקפת ביצוע של לפחות 2 משימות אורייניות לכל כיתה?",
  "רמת דיגיטציה: האם המורים מייצרים תוכן אינטראקטיבי וייחודי (רמה 3)?",
  "מוכנות PISA: האם התלמידים מתורגלים בשאלות חקר יישומיות?",
  "שיעור התמדה: האם קיימת עלייה בשיעור הבנות במסלולי המצוינות?",
];

function TrainingPage() {
  const introRef = useScrollReveal();
  const modelRef = useScrollReveal(150);
  const advantagesRef = useScrollReveal(300);
  const checklistRef = useScrollReveal(150);
  const ctaRef = useScrollReveal(300);

  return (
    <div className="section-container">
      <h1 className="page-enter section-title">הדרכת חדרי מורים</h1>
      <p className="page-enter-delay-1 mt-3 text-lg text-muted-foreground">
        מודל יישומי להזנקת מדדי STEM ואוריינות בחטיבת הביניים
      </p>

      {/* Challenge */}
      <div ref={introRef} className="scroll-reveal mx-auto mt-12 max-w-3xl">
        <Card className="border-destructive/30 bg-destructive/5">
          <CardHeader>
            <CardTitle className="font-display text-lg text-destructive">🔴 האתגר הלאומי: "ישראל ריאלית" (תשפ״ו)</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-relaxed">
            תוכנית החומש הלאומית הציבה רף חדש: מעבר מהוראה טכנית לאוריינות מתמטית (PISA).
            המשמעות עבור מנהלי חטיבות — דרישה לשינוי עומק בדרכי ההוראה, עמידה במשימות "חלוץ" ארציות,
            ודיווח שוטף על ביצועי STEM במערכות המשרד.
          </CardContent>
        </Card>
      </div>

      {/* Failure points */}
      <div ref={modelRef} className="scroll-reveal mx-auto mt-10 max-w-3xl">
        <h2 className="font-display text-2xl font-bold text-primary">הכשל ביישום המסורתי</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { title: "סרבול טכנולוגי", desc: "קושי של מורים ותלמידים בעבודה מול ממשק המודל הגולמי" },
            { title: "חוסר בתוכן רלוונטי", desc: "פער בין הספרים הישנים לדרישות האוריינות החדשות" },
            { title: "בעיית דיווח", desc: "ללא חתימה דיגיטלית, בית הספר אינו מזוכה במדדי STEM" },
          ].map((item) => (
            <Card key={item.title}>
              <CardContent className="pt-6">
                <h3 className="font-display font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Solution */}
      <div className="mx-auto mt-10 max-w-3xl">
        <Card className="border-primary/30 bg-primary/5">
          <CardHeader>
            <CardTitle className="font-display text-lg text-primary">🟢 הפתרון: מודל ה-Hybrid</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-relaxed">
            <p><strong>אפליקציות חקר ייעודיות:</strong> בניית מיקרו-אפליקציות סביב משימות החלוץ של משרד החינוך (פונקציות, סטטיסטיקה וגיאומטריה).</p>
            <p><strong>הטמעה מלאה ב-LMS:</strong> האפליקציות מוטמעות ישירות בתוך סביבת הלמידה של המשרד.</p>
            <p><strong>דיווח אוטומטי:</strong> רכיב מטלת הגשה מובנה, המייצר דאטה מיידי על ביצועי התלמידים.</p>
          </CardContent>
        </Card>
      </div>

      {/* Advantages */}
      <div ref={advantagesRef} className="scroll-reveal mx-auto mt-10 max-w-3xl">
        <h2 className="font-display text-2xl font-bold text-primary">יתרונות למנהלי החטיבה</h2>
        <div className="mt-6 space-y-3">
          {advantages.map((item) => (
            <div key={item.text} className="flex items-start gap-3 rounded-lg border bg-card p-4">
              <span className="text-xl">{item.icon}</span>
              <p className="text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Checklist */}
      <div ref={checklistRef} className="scroll-reveal mx-auto mt-10 max-w-3xl">
        <h2 className="font-display text-2xl font-bold text-primary">מדד ה-STEM הבית-ספרי</h2>
        <p className="mt-2 text-sm text-muted-foreground">איפה המוסד שלך עומד היום?</p>
        <div className="mt-6 space-y-3">
          {checklistItems.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-lg border bg-card p-4">
              <span className="mt-0.5 text-muted-foreground">☐</span>
              <p className="text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Download + CTA */}
      <div ref={ctaRef} className="scroll-reveal mx-auto mt-14 max-w-3xl text-center">
        <h2 className="font-display text-2xl font-bold text-primary">הצעה לשיתוף פעולה</h2>
        <p className="mt-2 text-muted-foreground">
          הטמעת האפליקציות בסביבות הלמידה שלכם, ליווי הצוות המקצועי, ויצירת סיפור הצלחה משותף
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/contact">צרו קשר</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/docs/stem-training.pdf" target="_blank" rel="noopener noreferrer">
              📄 הורדת המסמך המלא
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
