import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/principals")({
  head: () => ({
    meta: [
      { title: "למנהלי חטיבות ביניים — מודל Hybrid App לדיווח STEM | מיכל זיו" },
      {
        name: "description",
        content:
          "פתרון למנהלי בתי ספר: מודל Hybrid App להזנקת מדדי STEM ואוריינות מתמטית. מותאם למשו״ב, Moodle והערכות PISA.",
      },
      { name: "keywords", content: "מנהלי בתי ספר, דיווח STEM, חטיבות ביניים, PISA, ניהול חינוכי, Hybrid App" },
      { property: "og:title", content: "למנהלי חטיבות — מודל Hybrid App | מיכל זיו" },
      {
        property: "og:description",
        content: "פתרון לדיווח STEM ושיפור מדדי אוריינות מתמטית בבתי ספר.",
      },
      { property: "og:url", content: "https://michal-stem.lovable.app/principals" },
    ],
  }),
  component: PrincipalsPage,
});

const checklistItems = [
  "בית הספר שלנו משתמש במשו״ב / Moodle לניהול למידה",
  "אנו מעוניינים להגדיל את אחוז הדיווח ב-STEM",
  "אנו רוצים להיערך למבחני PISA ולהערכות חיצוניות",
  "אנו מחפשים פתרון שלא דורש הכשרה טכנית מורכבת למורים",
];

function PrincipalsPage() {
  const [checked, setChecked] = useState<boolean[]>(new Array(checklistItems.length).fill(false));
  const cardsRef = useScrollReveal();
  const checklistRef = useScrollReveal(150);
  const ctaRef = useScrollReveal(300);

  return (
    <div className="section-container">
      <h1 className="page-enter section-title">למנהלי חטיבות ביניים</h1>
      <p className="page-enter-delay-1 mt-3 text-lg text-muted-foreground">מודל Hybrid App — הפתרון לפער הדיווח ב-STEM</p>

      <div ref={cardsRef} className="scroll-reveal mt-12 grid gap-8 lg:grid-cols-3">
        <Card className="border-destructive/30 bg-destructive/5" style={{ transitionDelay: "0ms" }}>
          <CardHeader>
            <CardTitle className="font-display text-lg text-destructive">🔴 הבעיה</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-relaxed">
            בתי ספר רבים מתקשים לדווח על פעילויות STEM באופן שעומד בדרישות משרד החינוך. מורים עמוסים, כלים לא מותאמים, ואחוזי הדיווח נמוכים.
          </CardContent>
        </Card>

        <Card className="border-primary/30 bg-primary/5">
          <CardHeader>
            <CardTitle className="font-display text-lg text-primary">🟢 הפתרון</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-relaxed">
            מיקרו-אפליקציות מוטמעות ישירות ב-Moodle ובמשו״ב. המורים לא צריכים ללמוד מערכת חדשה — הכלים עובדים בתוך הסביבה המוכרת.
          </CardContent>
        </Card>

        <Card className="border-gold/30 bg-gold/5">
          <CardHeader>
            <CardTitle className="font-display text-lg gold-accent">🏆 היתרונות</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex items-start gap-2"><span className="text-gold">✓</span> 100% דיווח STEM</div>
            <div className="flex items-start gap-2"><span className="text-gold">✓</span> מוכנות למבחני PISA</div>
            <div className="flex items-start gap-2"><span className="text-gold">✓</span> תקציבי STEM מוגדלים</div>
            <div className="flex items-start gap-2"><span className="text-gold">✓</span> הטמעה פשוטה ומהירה</div>
          </CardContent>
        </Card>
      </div>

      <div ref={checklistRef} className="scroll-reveal mx-auto mt-14 max-w-2xl">
        <h2 className="font-display text-2xl font-bold text-primary">שאלון התאמה עצמית</h2>
        <p className="mt-2 text-sm text-muted-foreground">סמנו את הפריטים הרלוונטיים לבית הספר שלכם:</p>
        <div className="mt-6 space-y-4">
          {checklistItems.map((item, i) => (
            <label key={i} className="flex cursor-pointer items-start gap-3 rounded-lg border bg-card p-4 transition-colors hover:bg-accent/50">
              <input
                type="checkbox"
                checked={checked[i]}
                onChange={() => {
                  const next = [...checked];
                  next[i] = !next[i];
                  setChecked(next);
                }}
                className="mt-0.5 h-5 w-5 rounded border-input accent-primary"
              />
              <span className="text-sm leading-relaxed">{item}</span>
            </label>
          ))}
        </div>
        {checked.filter(Boolean).length >= 2 && (
          <div className="mt-6 rounded-lg bg-gold/10 p-4 text-center">
            <p className="font-semibold text-gold-foreground">מודל Hybrid App מתאים לבית הספר שלכם! 🎉</p>
          </div>
        )}
      </div>

      <div ref={ctaRef} className="scroll-reveal mt-14 text-center">
        <h2 className="font-display text-2xl font-bold text-primary">מעוניינים לשמוע עוד?</h2>
        <p className="mt-2 text-muted-foreground">נשמח לתאם פגישת היכרות ולהתאים את המודל לבית הספר שלכם</p>
        <Button asChild size="lg" className="mt-6">
          <Link to="/contact">צרו קשר</Link>
        </Button>
      </div>
    </div>
  );
}
