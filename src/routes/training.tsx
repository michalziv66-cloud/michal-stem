import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "הדרכת חדרי מורים — מיכל זיו" },
      { name: "description", content: "תוכנית הדרכה לחדרי מורים ולצוותי ניהול — שלושה מסלולים להטמעת STEM ואוריינות בחטיבת הביניים" },
      { property: "og:title", content: "הדרכת חדרי מורים — מיכל זיו" },
      { property: "og:description", content: "תוכנית הדרכה לחדרי מורים ולצוותי ניהול — שלושה מסלולים להטמעת STEM ואוריינות" },
    ],
  }),
  component: TrainingPage,
});

const tracks = [
  {
    id: "track1",
    label: "מסלול 1",
    title: "ליווי צמוד לחדר מורים",
    subtitle: "הדרכה פרונטלית ובזום | בניית כלים | תפעול המרחב הדיגיטלי",
    audience: "צוות מורים",
    hours: "24 שעות לשנה",
    frequency: "פגישה פרונטלית אחת לחודש + זום בין לבין",
    description: "מסלול זה מיועד לצוותי מורים המעוניינים להטמיע כלים דיגיטליים ואינטראקטיביים בהוראת המתמטיקה. הליווי משלב הדרכות פרונטליות בבית הספר, פגישות זום שוטפות, ובניית כלים ייחודיים המותאמים לצרכי הכיתה.",
    schedule: [
      { label: "פגישות פרונטליות", value: "6 פגישות של שעתיים בבית הספר (סה״כ 12 שעות)" },
      { label: "פגישות זום", value: "6 פגישות של שעה (סה״כ 6 שעות)" },
      { label: "עבודה אישית / בניית כלים", value: "6 שעות (מותאמות לצרכי הצוות)" },
    ],
    topics: [
      "הכרת ממשק ה־Moodle של משרד החינוך — הטמעת משימות חלוץ ודיווח דיגיטלי",
      "בניית מיקרו-אפליקציות לנושאי הליבה: פונקציות, גיאומטריה, אי ודאות",
      "עבודה עם כלי AI לבניית חומרי הוראה אינטראקטיביים",
      "פיתוח שאלות חקר בפורמט PISA לתרגול עם תלמידים",
      "הטמעת כלים בסביבת הלמידה ומעקב אחר ביצועי תלמידים",
      "שיתוף ידע ובניית מאגר כלים משותף לצוות",
    ],
    outcomes: [
      "כל מורה בצוות מפעיל לפחות 2 כלים אינטראקטיביים בכיתה",
      "עמידה בדרישות החתימה הדיגיטלית של המשרד",
      "מאגר כלים מוכן לשימוש חוזר בשנים הבאות",
    ],
    fit: "צוות שמתחיל",
  },
  {
    id: "track2",
    label: "מסלול 2",
    title: "הדרכה לצוותי ניהול",
    subtitle: "הכרת כלים ופלטפורמות | בניית תוכנית עבודה | חלוקת משימות לפי ישראל ריאלית",
    audience: "הנהלת בית הספר",
    hours: "20 שעות לשנה",
    frequency: "פגישת זום חודשית + 3 פגישות פרונטליות",
    description: "מסלול זה מיועד למנהלי חטיבות ביניים ורכזי מקצוע המעוניינים להוביל את תהליך ה־STEM מהנהלה. הליווי מתמקד בהבנת הדרישות המשרדיות, בניית תוכנית עבודה ריאלית, וחלוקת משימות לפי יכולות הצוות.",
    schedule: [
      { label: "סדנת פתיחה", value: "פגישה פרונטלית של 3 שעות (אבחון מצב קיים ומיפוי צוות)" },
      { label: "פגישות ליווי", value: "8 פגישות זום של שעה (סה״כ 8 שעות)" },
      { label: "סדנת אמצע שנה", value: "פגישה פרונטלית של 3 שעות (בדיקת ביצועים ועדכון תוכנית)" },
      { label: "פגישת סיכום", value: "פגישה פרונטלית של 3 שעות (הצגת תוצאות + תכנון שנה הבאה)" },
    ],
    topics: [
      "הכרת דרישות ׳ישראל ריאלית 2026׳ — יעדים, מדדים ומועדי דיווח",
      "קריאת נתוני ה־BI — הבנת מדד ה־STEM המשרדי הבית-ספרי",
      "הכרת הפלטפורמות: Moodle של משרד החינוך, סביבות הלמידה של המשרד",
      "בניית תוכנית עבודה שנתית לצוות — חלוקת משימות ואחריות",
      "הקצאת משימות חלוץ לפי נושאי ליבה: פונקציות, סטטיסטיקה, גיאומטריה",
      "בניית מנגנון מעקב ודיווח פנימי לבית הספר",
    ],
    outcomes: [
      "תוכנית עבודה שנתית כתובה ומאושרת לצוות",
      "חלוקת אחריות ברורה בין חברי הצוות",
      "עמידה ב־100% מיעדי הדיווח המשרדיים",
      "הנהלה שיודעת לקרוא ולפרש את נתוני ה־STEM",
    ],
    fit: "הנהלה שרוצה לוודא",
  },
  {
    id: "track3",
    label: "מסלול 3",
    title: "ליווי מותאם לבית הספר",
    subtitle: "אבחון מצב קיים | תוכנית שנתית מותאמת | מדידת תוצאות",
    audience: "מורים + הנהלה",
    hours: "36 שעות לשנה",
    frequency: "פגישה שבועית / דו-שבועית בהתאם לצורך",
    description: "המסלול המקיף ביותר — משלב ליווי מלא של הצוות הפדגוגי וההנהלה לאורך השנה. מתחיל באבחון מעמיק של המצב הקיים, בונה תוכנית עבודה מותאמת לבית הספר הספציפי, ומלווה את הביצוע עם מדידת תוצאות שוטפת.",
    schedule: [
      { label: "שלב אבחון", value: "4 שעות (ראיונות צוות, קריאת נתונים, בניית ״תמונת מצב״)" },
      { label: "בניית תוכנית", value: "4 שעות (מסמך עבודה + הצגה להנהלה)" },
      { label: "ליווי שוטף", value: "20 שעות של פגישות פרונטליות וזום לאורך השנה" },
      { label: "סיכום ומדידה", value: "4 שעות (הצגת תוצאות + תכנון שנה הבאה)" },
    ],
    topics: [
      "אבחון רמת הבשלות הדיגיטלית של הצוות (רמה 1 עד רמה 3)",
      "בניית ״תיק מוצר דיגיטלי״ לבית הספר — תיעוד כל כלי ומשימה",
      "ליווי פרטני לכל מורה בצוות בהתאם לצרכיו",
      "פיתוח כלים ייחודיים לנושאים שבהם בית הספר נחלש",
      "הכנה ממוקדת למבחני PISA ו־TIMSS",
      "עבודה על מדד ה־STEM הבית-ספרי — הפיכת נתונים ל״צבע ירוק״",
      "בניית ״סיפור הצלחה״ לכנסי חדשנות של משרד החינוך",
    ],
    outcomes: [
      "שיפור מדד ה־STEM הבית-ספרי במחוז",
      "עלייה בשיעור הבנות במסלולי מצוינות ו־5 יחידות",
      "תיק מוצר דיגיטלי מלא ומוכן לדיווח משרדי",
      "צוות עצמאי המסוגל להמשיך ללא ליווי בשנה הבאה",
    ],
    fit: "בית ספר שרוצה להוביל",
  },
];

const comparisonRows = [
  { label: "קהל יעד", values: ["צוות מורים", "הנהלת בית הספר", "מורים + הנהלה"] },
  { label: "היקף שעות", values: ["24 שעות", "20 שעות", "36 שעות"] },
  { label: "תדירות", values: ["חודשי", "חודשי", "שבועי/דו-שבועי"] },
  { label: "אופן הליווי", values: ["פרונטלי + זום", "זום + 3 פגישות", "פרונטלי + זום"] },
  { label: "מתאים ל...", values: ["צוות שמתחיל", "הנהלה שרוצה לוודא", "בית ספר שרוצה להוביל"] },
];

function TrainingPage() {
  const introRef = useScrollReveal();
  const tracksRef = useScrollReveal(150);
  const comparisonRef = useScrollReveal(300);
  const ctaRef = useScrollReveal(150);

  return (
    <div className="section-container">
      <h1 className="page-enter section-title">הדרכת חדרי מורים</h1>
      <p className="page-enter-delay-1 mt-3 text-lg text-muted-foreground">
        תוכנית הדרכה לחדרי מורים ולצוותי ניהול — שלושה מסלולים להטמעת STEM ואוריינות
      </p>

      {/* Intro */}
      <div ref={introRef} className="scroll-reveal mx-auto mt-12 max-w-3xl">
        <Card className="border-primary/30 bg-primary/5">
          <CardHeader>
            <CardTitle className="font-display text-lg text-primary">🎯 מטרת התוכנית</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-relaxed">
            תוכנית ההדרכה נועדה לסייע לבתי ספר לממש את יעדי רפורמת &quot;ישראל ריאלית&quot; בצורה מעשית, מדידה ומתמשכת.
            שלושת המסלולים מציעים רמות שונות של ליווי — מהדרכה שוטפת לצוות המורים, דרך עבודה עם הנהלת בית הספר,
            ועד בניית תוכנית עבודה שנתית מותאמת אישית.
          </CardContent>
        </Card>
      </div>

      {/* Tracks */}
      <div ref={tracksRef} className="scroll-reveal mx-auto mt-10 max-w-4xl">
        <h2 className="font-display text-center text-2xl font-bold text-primary">המסלולים</h2>
        <Tabs defaultValue="track1" dir="rtl" className="mt-6">
          <TabsList className="mx-auto grid w-full max-w-md grid-cols-3">
            {tracks.map((t) => (
              <TabsTrigger key={t.id} value={t.id} className="text-xs sm:text-sm">
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tracks.map((track) => (
            <TabsContent key={track.id} value={track.id} className="mt-6">
              <Card>
                <CardHeader className="bg-primary/5">
                  <CardTitle className="font-display text-xl text-primary">{track.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{track.subtitle}</p>
                  <div className="mt-2 flex flex-wrap gap-3 text-xs">
                    <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                      👥 {track.audience}
                    </span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                      ⏱ {track.hours}
                    </span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                      📅 {track.frequency}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <p className="text-sm leading-relaxed">{track.description}</p>

                  {/* Schedule */}
                  <div>
                    <h3 className="font-display mb-3 font-semibold text-primary">לוח זמנים</h3>
                    <div className="space-y-2">
                      {track.schedule.map((s) => (
                        <div key={s.label} className="flex gap-2 rounded-lg border bg-muted/30 p-3 text-sm">
                          <span className="font-medium text-foreground">{s.label}:</span>
                          <span className="text-muted-foreground">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Topics */}
                  <div>
                    <h3 className="font-display mb-3 font-semibold text-primary">תכני ההדרכה</h3>
                    <ul className="space-y-2">
                      {track.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2 text-sm">
                          <span className="mt-1 text-primary">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <h3 className="font-display mb-3 font-semibold text-primary">תוצרים מצופים</h3>
                    <ul className="space-y-2">
                      {track.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-2 text-sm">
                          <span className="mt-1 text-green-600">✅</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Comparison table */}
      <div ref={comparisonRef} className="scroll-reveal mx-auto mt-10 max-w-4xl">
        <h2 className="font-display text-center text-2xl font-bold text-primary">השוואת מסלולים</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-primary/5">
                <th className="p-3 text-right font-display font-semibold text-primary">קריטריון</th>
                <th className="p-3 text-right font-display font-semibold text-primary">מסלול 1</th>
                <th className="p-3 text-right font-display font-semibold text-primary">מסלול 2</th>
                <th className="p-3 text-right font-display font-semibold text-primary">מסלול 3</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} className="border-b">
                  <td className="p-3 font-medium">{row.label}</td>
                  {row.values.map((val, i) => (
                    <td key={i} className="p-3 text-muted-foreground">{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA */}
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
              📄 המסמך המלא (PDF)
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/docs/training-program.docx" target="_blank" rel="noopener noreferrer">
              📋 תוכנית ההדרכה (Word)
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
