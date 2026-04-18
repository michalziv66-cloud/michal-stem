import { createFileRoute } from "@tanstack/react-router";
import profileImage from "@/assets/michal-singing-math.png";
import artisticImage from "@/assets/michal-vr-bridge.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "אודות מיכל זיו — מומחית AI בחינוך ומורה למתמטיקה" },
      {
        name: "description",
        content:
          "מיכל זיו: 14 שנות ניסיון כמורה למתמטיקה בחטיבת הביניים, מובילת חדשנות פדגוגית ומומחית לשילוב בינה מלאכותית בהוראה.",
      },
      { property: "og:title", content: "אודות מיכל זיו — מומחית AI בחינוך" },
      {
        property: "og:description",
        content: "14 שנות ניסיון בהוראה, חדשנות פדגוגית ושילוב AI בחינוך.",
      },
      { property: "og:url", content: "https://michal-stem.lovable.app/about" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const contentRef = useScrollReveal();
  const expertiseRef = useScrollReveal(200);

  return (
    <div className="section-container">
      <div className="page-enter flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6">
        <div className="h-32 w-32 shrink-0 overflow-hidden rounded-xl border-2 border-gold/30 shadow-lg animate-scale-in transition-transform duration-500 hover:scale-105 hover:shadow-xl">
          <img src={profileImage} alt="מיכל זיו" className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
        </div>
        <div>
          <h1 className="section-title">מיכל זיו</h1>
          <p className="mt-2 font-display text-lg text-foreground/80 sm:text-xl">
            מתמטיקה מחוץ לסוגריים: <span className="text-primary">מגשרת בין עולם הניהול לכיתת המחר</span>
          </p>
        </div>
      </div>
      <div className="mt-10 grid gap-10 lg:grid-cols-5">
        <div ref={contentRef} className="scroll-reveal lg:col-span-3 space-y-5 text-lg leading-relaxed text-foreground/90">
          <p>
            אני מאמינה שמתמטיקה היא לא רק אוסף של נוסחאות, אלא <strong className="text-primary">שפה לפתרון בעיות והבנת העולם</strong>. המסע המקצועי שלי אינו ליניארי, והוא זה שמעצב את תפיסת ההוראה הייחודית שלי: לאחר <strong>9 שנים</strong> כמורה למתמטיקה במשרד החינוך, עברתי לעולם הבנקאות וניהלתי סניפים בבנק לאומי במשך <strong>17 שנים</strong>. שם, בין ניהול סיכונים להובלת צוותים, הבנתי שהכלים המתמטיים הם לב-ליבה של קבלת החלטות מושכלת.
          </p>
          <p>
            ב-<strong>2021</strong> חזרתי לכיתה עם בערה מחודשת ועם ארגז כלים מעולם הניהול וההדרכה הארגונית. כיום, אני מובילת פיתוח פדגוגי דיגיטלי, המשלבת <strong className="text-primary">כלי AI ומיקרו-אפליקציות אינטראקטיביות</strong> בהוראה. כחלק מרפורמת <strong>״ישראל ריאלית 2026״</strong>, אני מתמקדת בהקניית אוריינות מתמטית וניהול אי-ודאות — תחומים שהם קריטיים לתלמידי חטיבת הביניים בעולם המודרני.
          </p>
          <p className="rounded-lg bg-gold/10 p-4 font-medium text-primary">
            💡 החזון שלי: להוציא את המתמטיקה מחוץ לסוגריים של ספרי הלימוד ולהפוך אותה לחקר חי ובועט — להעניק לתלמידים שלי לא רק ציונים, אלא את היכולת לחשוב, לחקור ולנווט בביטחון בעולם של אי-ודאות.
          </p>
          <div className="mt-6 overflow-hidden rounded-xl border-2 border-gold/20 shadow-lg">
            <img src={artisticImage} alt="מיכל זיו — מתמטיקה מחוץ לסוגריים" className="h-auto w-full object-cover" />
          </div>
        </div>
        <div ref={expertiseRef} className="scroll-reveal lg:col-span-2">
          <div className="rounded-xl border bg-accent/50 p-6 space-y-4">
            <h3 className="font-display text-lg font-bold text-primary">תחומי מומחיות</h3>
            {[
              "הוראת מתמטיקה בחטיבת הביניים",
              "פיתוח פדגוגי דיגיטלי",
              "כלי AI ל-STEM",
              "הטמעת טכנולוגיה בכיתה",
              "הכשרת מורים וסגלים ניהוליים",
              "ניהול מבוסס נתונים (BI)",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-gold" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border-2 border-gold/30 bg-gradient-to-br from-gold/10 to-accent/30 p-6">
            <div className="mb-4 flex items-baseline gap-2">
              <span className="font-display text-3xl font-bold text-primary">30+</span>
              <h3 className="font-display text-base font-bold text-primary">שנות הדרכה</h3>
            </div>
            <ol className="relative space-y-4 border-r-2 border-gold/40 pr-4">
              <li className="relative">
                <span className="absolute -right-[22px] top-1 h-3 w-3 rounded-full bg-gold ring-4 ring-background" />
                <p className="text-xs font-semibold text-gold">השנה</p>
                <p className="text-sm font-bold text-foreground">הדרכת חדרי מורים והכשרות AI</p>
                <p className="text-xs text-foreground/70">משרד החינוך · ליווי פדגוגי</p>
              </li>
              <li className="relative">
                <span className="absolute -right-[22px] top-1 h-3 w-3 rounded-full bg-gold/80 ring-4 ring-background" />
                <p className="text-xs font-semibold text-gold">17 שנים</p>
                <p className="text-sm font-bold text-foreground">מרכז ההדרכה הארגוני, בנק לאומי</p>
                <p className="text-xs text-foreground/70">הכשרת סגלים ניהוליים</p>
              </li>
              <li className="relative">
                <span className="absolute -right-[22px] top-1 h-3 w-3 rounded-full bg-gold/60 ring-4 ring-background" />
                <p className="text-xs font-semibold text-gold">3 שנים</p>
                <p className="text-sm font-bold text-foreground">מדריכה מחוזית — תקשוב</p>
                <p className="text-xs text-foreground/70">מחוז צפון · עשרות מורים</p>
              </li>
              <li className="relative">
                <span className="absolute -right-[22px] top-1 h-3 w-3 rounded-full bg-gold/40 ring-4 ring-background" />
                <p className="text-xs font-semibold text-gold">9 שנים</p>
                <p className="text-sm font-bold text-foreground">מורה למתמטיקה — משרד החינוך</p>
                <p className="text-xs text-foreground/70">תחילת הדרך · כיתות מחוננים</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
