import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import profileImage from "@/assets/michal-drums.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/entrepreneurship")({
  head: () => ({
    meta: [
      { title: "יזמות פדגוגית במתמטיקה — מודל להזנקת STEM | מיכל זיו" },
      {
        name: "description",
        content:
          "מודל יזמי-יישומי להזנקת מדדי STEM ואוריינות מתמטית בחטיבת הביניים. שיטה מוכחת לשיפור הישגים והנעת מורים.",
      },
      { name: "keywords", content: "יזמות פדגוגית, STEM, אוריינות מתמטית, חטיבת ביניים, חדשנות בחינוך" },
      { property: "og:title", content: "יזמות פדגוגית במתמטיקה | מיכל זיו" },
      {
        property: "og:description",
        content: "מודל יישומי להזנקת מדדי STEM ואוריינות מתמטית בחטיבת הביניים.",
      },
      { property: "og:url", content: "https://michal-stem.lovable.app/entrepreneurship" },
    ],
  }),
  component: EntrepreneurshipPage,
});

function EntrepreneurshipPage() {
  const introRef = useScrollReveal();
  const challengeRef = useScrollReveal(100);
  const solutionRef = useScrollReveal(200);
  const benefitsRef = useScrollReveal(300);
  const coopRef = useScrollReveal(400);

  return (
    <div className="section-container">
      {/* Header */}
      <div className="page-enter flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6">
        <div className="h-32 w-32 shrink-0 overflow-hidden rounded-xl border-2 border-gold/30 shadow-lg">
          <img src={profileImage} alt="מיכל זיו" className="h-full w-full object-cover" />
        </div>
        <div>
          <h1 className="section-title">מודל יישומי להזנקת מדדי STEM ואוריינות בחטיבת הביניים</h1>
          <p className="mt-2 text-muted-foreground">{"\n"}</p>
        </div>
      </div>

      {/* 1. האתגר הלאומי */}
      <div ref={introRef} className="scroll-reveal mt-12 space-y-4">
        <h2 className="font-display text-2xl font-bold text-primary">1. האתגר הלאומי: ״ישראל ריאלית״ (תשפ״ו)</h2>
        <p className="text-lg leading-relaxed text-foreground/90">
          תוכנית החומש הלאומית הציבה רף חדש: מעבר מהוראה טכנית לאוריינות מתמטית (PISA). המשמעות עבור מנהלי חטיבות היא דרישה לשינוי עומק בדרכי ההוראה, עמידה במשימות ״חלוץ״ ארציות, ודיווח שוטף על ביצועי STEM במערכות המשרד.
        </p>
      </div>

      {/* 2. הכשל ביישום */}
      <div ref={challengeRef} className="scroll-reveal mt-10">
        <h2 className="font-display text-2xl font-bold text-primary">2. הכשל ביישום המסורתי</h2>
        <p className="mt-3 text-foreground/90">בתי ספר רבים נתקלים ב״צוואר בקבוק״ בתהליך ההטמעה:</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader><CardTitle className="text-base text-destructive">סרבול טכנולוגי</CardTitle></CardHeader>
            <CardContent className="text-sm">קושי של מורים ותלמידים בעבודה מול ממשק המודל הגולמי.</CardContent>
          </Card>
          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader><CardTitle className="text-base text-destructive">חוסר בתוכן רלוונטי</CardTitle></CardHeader>
            <CardContent className="text-sm">פער בין הספרים הישנים לדרישות האוריינות החדשות.</CardContent>
          </Card>
          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader><CardTitle className="text-base text-destructive">בעיית דיווח</CardTitle></CardHeader>
            <CardContent className="text-sm">ללא ״חתימה דיגיטלית״ של התלמידים במערכת, בית הספר אינו מזוכה במדדי החדשנות ובשכר העידוד.</CardContent>
          </Card>
        </div>
      </div>

      {/* 3. הפתרון */}
      <div ref={solutionRef} className="scroll-reveal mt-10 space-y-4">
        <h2 className="font-display text-2xl font-bold text-primary">3. הפתרון: מודל ה-Hybrid</h2>
        <p className="text-foreground/90">מודל עבודה ייחודי, המשלב בין חווית משתמש מתקדמת לבין דרישות הדיווח הפורמליות:</p>
        <div className="space-y-3">
          {[
            { title: "אפליקציות חקר ייעודיות", desc: "בניית ״מיקרו-אפליקציות״ סביב משימות החלוץ של משרד החינוך (פונקציות, סטטיסטיקה וגיאומטריה), המנגישות את החומר לתלמיד בצורה אינטראקטיבית ומושכת." },
            { title: "הטמעה מלאה ב-LMS", desc: "האפליקציות מוטמעות ישירות בתוך ״סביבת הלמידה״ של המשרד/מודל." },
            { title: "דיווח אוטומטי", desc: "המודל כולל רכיב ״מטלת הגשה״ מובנה, המייצר לבית הספר דאטה מיידי על ביצועי התלמידים ומבטיח עמידה במדדי הדיגום של המשרד." },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border bg-accent/50 p-4">
              <h3 className="font-display font-bold text-primary">{item.title}</h3>
              <p className="mt-1 text-sm text-foreground/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. יתרונות */}
      <div ref={benefitsRef} className="scroll-reveal mt-10">
        <h2 className="font-display text-2xl font-bold text-primary">4. יתרונות למנהלי החטיבה</h2>
        <div className="mt-4 space-y-3">
          {[
            { icon: "✓", text: "עמידה ביעדי המחוז: הבטחת דיווח ביצוע של 100% ממשימות האוריינות הנדרשות בתוכנית החומש." },
            { icon: "✓", text: "שיפור הישגים ב-PISA/TIMSS: תרגול שוטף של שאלות חקר בפורמט דיגיטלי המדמה את המבחנים הבינלאומיים." },
            { icon: "✓", text: "תגמול ומשאבים: ביסוס הסטטוס כ״בית ספר מקדם STEM״ המזכה בשעות תוספתיות, תקציבי מעטפת והכרה מחוזית." },
            { icon: "✓", text: "פתרון למורים: הכל מוכן — חוסך זמן יקר ומוריד את החסם הטכנולוגי." },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-0.5 text-lg font-bold text-gold">{item.icon}</span>
              <p className="text-foreground/90">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. הצעה לשיתוף פעולה */}
      <div ref={coopRef} className="scroll-reveal mt-10 space-y-4">
        <h2 className="font-display text-2xl font-bold text-primary">5. הצעה לשיתוף פעולה</h2>
        <p className="text-foreground/90">אני מציעה מודל של ״קהילת למידה משותפת״:</p>
        <div className="space-y-2">
          {[
            "הטמעת האפליקציות והמשאבים הדיגיטליים שבניתי בתוך סביבות הלמידה של חטיבתכם.",
            "ליווי הצוות המקצועי בשימוש מדויק יותר לרמות הלימוד בתוכן (5/4 יחידות).",
            "יצירת ״סיפור הצלחה״ משותף שיוצע בכנס החדשנות של משרד החינוך.",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
              <p className="text-foreground/90">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-lg bg-gold/10 p-5 text-center">
          <p className="font-display font-semibold text-primary">
            יזמית פדגוגית שמציעה למנהלים פתרון לכאב הראש הכי גדול שלהם: איך לעמוד בדרישות ה-STEM של המשרד בלי לשבור את המערכת.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Button asChild size="lg">
            <Link to="/contact">צרו קשר לשיתוף פעולה</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
