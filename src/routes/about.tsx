import { createFileRoute } from "@tanstack/react-router";
import profileImage from "@/assets/michal-profile.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "אודות — מיכל זיו" },
      { name: "description", content: "מורה למתמטיקה בחטיבת הביניים עם 14 שנות ניסיון, מובילת חדשנות פדגוגית" },
      { property: "og:title", content: "אודות — מיכל זיו" },
      { property: "og:description", content: "מורה למתמטיקה בחטיבת הביניים עם 14 שנות ניסיון" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="section-container">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6">
        <div className="h-32 w-32 shrink-0 overflow-hidden rounded-xl border-2 border-gold/30 shadow-lg">
          <img src={profileImage} alt="מיכל זיו" className="h-full w-full object-cover" />
        </div>
        <h1 className="section-title">אודות</h1>
      </div>
      <div className="mt-10 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3 space-y-5 text-lg leading-relaxed text-foreground/90">
          <p>
            שמי <strong className="text-primary">מיכל זיו</strong>, מורה למתמטיקה בחטיבת הביניים (כיתות ז׳–ט׳) עם למעלה מ-<strong>14 שנות ניסיון</strong> במערכת החינוך בישראל, משרד החינוך.
          </p>
          <p>
            אני מובילת חדשנות פדגוגית, מאמינה שהלמידה צריכה להיות חוויתית, משמעותית ונגישה לכל תלמיד ותלמידה. בשנים האחרונות אני מפתחת <strong>מיקרו-אפליקציות מבוססות AI</strong> לתחום ה-STEM — כלים אינטראקטיביים שמאפשרים לתלמידים להתנסות, לחקור ולגלות עקרונות מתמטיים בעצמם.
          </p>
          <p>
            החזון שלי: לטפח <strong>לומדים עצמאיים</strong> — תלמידים שיודעים לשאול שאלות, לנסות, לטעות, וללמוד מהתהליך.
          </p>
        </div>
        <div className="lg:col-span-2">
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
