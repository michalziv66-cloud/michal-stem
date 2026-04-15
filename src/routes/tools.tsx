import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title: "כלי עבודה — מיכל זיו" },
      { name: "description", content: "כלי עבודה דיגיטליים להוראת מתמטיקה: מצגות, דפי עבודה, סרטונים ואפליקציות אינטראקטיביות" },
      { property: "og:title", content: "כלי עבודה — מיכל זיו" },
      { property: "og:description", content: "כלי עבודה דיגיטליים להוראת מתמטיקה" },
    ],
  }),
  component: ToolsPage,
});

const sections = [
  {
    title: "אפליקציות אינטראקטיביות",
    subtitle: "מיקרו-אפליקציות לחקירה עצמאית",
    items: [
      {
        title: "פונקציות",
        description: "כלים לחקירת פונקציות לינאריות, ריבועיות ומעריכיות — שינוי פרמטרים בזמן אמת.",
        icon: "📈",
        url: "https://math-versatile-path-pro.base44.app",
      },
      {
        title: "סטטיסטיקה ואי וודאות",
        description: "סימולציות אינטראקטיביות להסתברות, ממוצעים, חציון וסטיית תקן.",
        icon: "📊",
      },
      {
        title: "גיאומטריה",
        description: "חקירת צורות, זוויות, שטחים והיקפים בסביבת עבודה ויזואלית.",
        icon: "📐",
      },
    ],
  },
  {
    title: "דפי עבודה אינטראקטיביים",
    subtitle: "כלים מבוססי HTML לתרגול ולמידה",
    items: [
      {
        title: "חשבון מים",
        description: "חישוב תעריפים, בניית מערכת משוואות ופתרונה. כולל שלבים מודרכים ושאלת בונוס.",
        icon: "💧",
        url: "/tools/water-bill.html",
      },
      {
        title: "משוואות הקסם",
        description: "דף עבודה אינטראקטיבי בנושא משוואות – שלבים מודרכים עם MathJax ואנימציות.",
        icon: "✨",
        url: "/tools/mishvaot_kesem_2.html",
      },
      {
        title: "מתמטיקה מחוץ לסוגריים",
        description: "סרטון אינטראקטיבי בסגנון רילס על מתמטיקה בחיי היומיום.",
        icon: "🎬",
        url: "/tools/reel3.html",
      },
    ],
  },
  {
    title: "מצגות",
    subtitle: "מצגות שיעור אינטראקטיביות ב-Canva",
    items: [
      {
        title: "מצגת 1",
        description: "מצגת שיעור אינטראקטיבית",
        icon: "📽️",
        url: "https://www.canva.com/design/DAHDRpLL3yI/OA2WICgnu4Y31LrTX8ZX2g/view",
      },
      {
        title: "מצגת 2",
        description: "מצגת שיעור אינטראקטיבית",
        icon: "📽️",
        url: "https://www.canva.com/design/DAHDGouuLPY/kUimQHqFzR6aAUjGiz9E6w/view",
      },
      {
        title: "מצגת 3",
        description: "מצגת שיעור אינטראקטיבית",
        icon: "📽️",
        url: "https://www.canva.com/design/DAHD0eKpqVY/piio0DQXICikQqljLoQYPQ/view",
      },
      {
        title: "מצגת 4",
        description: "מצגת שיעור אינטראקטיבית",
        icon: "📽️",
        url: "https://www.canva.com/design/DAHCzkKxydg/I5tkXslDkg8RTA-m4ap_Lg/view",
      },
    ],
  },
  {
    title: "סרטוני NotebookLM",
    subtitle: "תכנים שנוצרו באמצעות NotebookLM של Google",
    items: [
      {
        title: "לפצח את קוד הממ״ד",
        description: "הסבר מרתק על מתמטיקה.",
        icon: "🎧",
        url: "/notebook-lm/לפצח_את_קוד_הממ_ד.mp4",
        isVideo: true,
      },
      {
        title: "פתרון מערכת משוואות – שיטת הנגדת המקדמים",
        description: "הסבר על פתרון מערכת משוואות בשיטת הנגדת המקדמים.",
        icon: "🎧",
        url: "/notebook-lm/פתרון_מערכת_משוואות_שיטת_הנגדת_המקדמים_1.mp4",
        isVideo: true,
      },
      {
        title: "איך לפצח את קוד הישר",
        description: "הסבר על משוואת הישר.",
        icon: "🎧",
        url: "/notebook-lm/איך_לפצח_את_קוד_הישר.mp4",
        isVideo: true,
      },
      {
        title: "השביל הסודי – משפט פיתגורס",
        description: "הסבר על משפט פיתגורס.",
        icon: "🎧",
        url: "/notebook-lm/השביל_הסודי_משפט_פיתגורס_1.mp4",
        isVideo: true,
      },
    ],
  },
];

type ToolItem = {
  title: string;
  description: string;
  icon: string;
  url?: string;
  isVideo?: boolean;
};

function ToolCard({ item }: { item: ToolItem }) {
  if (item.isVideo) {
    return (
      <Card className="card-hover overflow-hidden">
        <CardHeader>
          <div className="mb-2 text-2xl">{item.icon}</div>
          <CardTitle className="font-display text-lg">{item.title}</CardTitle>
          <CardDescription className="text-sm leading-relaxed">{item.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <video src={item.url} controls className="w-full rounded-lg" preload="metadata" />
        </CardContent>
      </Card>
    );
  }

  const card = (
    <Card className="card-hover h-full">
      <CardHeader>
        <div className="mb-2 text-2xl">{item.icon}</div>
        <CardTitle className="font-display text-lg">{item.title}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">{item.description}</CardDescription>
      </CardHeader>
    </Card>
  );

  if (item.url) {
    return (
      <a href={item.url} target="_blank" rel="noopener noreferrer" className="block">
        {card}
      </a>
    );
  }

  return card;
}

function ToolsPage() {
  return (
    <div className="section-container">
      <h1 className="section-title">כלי עבודה</h1>
      <p className="mt-3 text-lg text-muted-foreground">כלים דיגיטליים להוראת מתמטיקה — הכל במקום אחד</p>

      {sections.map((section) => (
        <section key={section.title} className="mt-12 first:mt-8">
          <h2 className="text-2xl font-display font-bold">{section.title}</h2>
          <p className="mt-1 text-muted-foreground">{section.subtitle}</p>
          <div className={`mt-6 grid gap-6 ${"isVideo" in (section.items[0] ?? {}) && section.items[0]?.isVideo ? "md:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
            {section.items.map((item) => (
              <ToolCard key={item.title} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
