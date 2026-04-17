import { createFileRoute } from "@tanstack/react-router";
import profileImage from "@/assets/michal-hourglass.png";
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
        <div className="h-32 w-32 shrink-0 overflow-hidden rounded-xl border-2 border-gold/30 shadow-lg">
          <img src={profileImage} alt="מיכל זיו" className="h-full w-full object-cover" />
        </div>
        <h1 className="section-title">אודות</h1>
      </div>
      <div className="mt-10 grid gap-10 lg:grid-cols-5">
        <div ref={contentRef} className="scroll-reveal lg:col-span-3 space-y-5 text-lg leading-relaxed text-foreground/90">
          <p>
            שמי <strong className="text-primary">מיכל זיו</strong>, מורה למתמטיקה בחטיבת הביניים עם <strong>14 שנות ניסיון</strong> בהוראה במסגרת משרד החינוך.
          </p>
          <p>
            אני מאמינה שמתמטיקה היא הרבה יותר מנוסחאות ותרגילים — היא דרך חשיבה, כלי להבנת העולם. מתוך אמונה זו פיתחתי את הגישה שאני מכנה <strong className="text-primary">״מתמטיקה מחוץ לסוגריים״</strong>: למידה שמתחילה מהשאלות האמיתיות של התלמידים, ומגיעה לתובנות מתמטיות עמוקות דרך חקר, ניסוי וטעייה.
          </p>
          <p>
            בשנים האחרונות אני מובילת פיתוח פדגוגי דיגיטלי במתמטיקה — בונה <strong>כלי AI ומיקרו-אפליקציות אינטראקטיביות</strong> לתלמידי חטיבת הביניים. העבודה שלי שזורה ברפורמת <strong>״ישראל ריאלית 2026״</strong>, הכוללת גם את תחום אי הוודאות — תחום חדש שנוסף לתוכנית הלימודים במתמטיקה, ומציב בפני המורים והתלמידים אתגרים ואפשרויות חדשות.
          </p>
          <p className="rounded-lg bg-gold/10 p-4 font-medium text-primary">
            💡 החזון שלי: תלמיד שיוצא מהכיתה עם כלים לחשוב, לחקור ולפתור בעיות בעצמו — בדיוק מה שישראל ריאלית 2026 מבקשת.
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
              "הכשרת מורים",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-gold" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
