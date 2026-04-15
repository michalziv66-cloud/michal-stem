import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

import imgFunctions from "@/assets/tools/functions.jpg";
import imgStatistics from "@/assets/tools/statistics.jpg";
import imgGeometry from "@/assets/tools/geometry.jpg";
import imgWaterBill from "@/assets/tools/water-bill.jpg";
import imgEquations from "@/assets/tools/equations.jpg";
import imgReel from "@/assets/tools/reel.jpg";
import imgPres1 from "@/assets/tools/presentation1.jpg";
import imgPresHashvaat from "@/assets/tools/presentation-hashvaat-mekadmim.jpg";
import imgPres3 from "@/assets/tools/presentation3.jpg";
import imgPresMeshulash from "@/assets/tools/presentation4.jpg";

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

type ToolItem = {
  title: string;
  description: string;
  icon: string;
  url?: string;
  isVideo?: boolean;
  image?: string;
};

const sections: { title: string; subtitle: string; items: ToolItem[] }[] = [
  {
    title: "אפליקציות אינטראקטיביות",
    subtitle: "מיקרו-אפליקציות לחקירה עצמאית",
    items: [
      {
        title: "פונקציות",
        description: "כלים לחקירת פונקציות לינאריות, ריבועיות ומעריכיות — שינוי פרמטרים בזמן אמת.",
        icon: "📈",
        url: "https://math-versatile-path-pro.base44.app",
        image: imgFunctions,
      },
      {
        title: "סטטיסטיקה ואי וודאות",
        description: "סימולציות אינטראקטיביות להסתברות, ממוצעים, חציון וסטיית תקן.",
        icon: "📊",
        image: imgStatistics,
      },
      {
        title: "גיאומטריה",
        description: "חקירת צורות, זוויות, שטחים והיקפים בסביבת עבודה ויזואלית.",
        icon: "📐",
        image: imgGeometry,
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
        image: imgWaterBill,
      },
      {
        title: "משוואות הקסם",
        description: "דף עבודה אינטראקטיבי בנושא משוואות – שלבים מודרכים עם MathJax ואנימציות.",
        icon: "✨",
        url: "/tools/mishvaot_kesem_2.html",
        image: imgEquations,
      },
      {
        title: "מתמטיקה מחוץ לסוגריים",
        description: "סרטון אינטראקטיבי בסגנון רילס על מתמטיקה בחיי היומיום.",
        icon: "🎬",
        url: "/tools/reel3.html",
        image: imgReel,
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
        image: imgPres1,
      },
      {
        title: "מצגת 2",
        description: "מצגת שיעור אינטראקטיבית",
        icon: "📽️",
        url: "https://www.canva.com/design/DAHDGouuLPY/kUimQHqFzR6aAUjGiz9E6w/view",
        image: imgPres2,
      },
      {
        title: "מצגת 3",
        description: "מצגת שיעור אינטראקטיבית",
        icon: "📽️",
        url: "https://www.canva.com/design/DAHD0eKpqVY/piio0DQXICikQqljLoQYPQ/view",
        image: imgPres3,
      },
      {
        title: "מטלה במתמטיקה — משולש ש״ש",
        description: "שכבה ח׳ הקבצה א — מצגת אינטראקטיבית על משולש שווה-שוקיים",
        icon: "📽️",
        url: "https://www.canva.com/design/DAHCzkKxydg/I5tkXslDkg8RTA-m4ap_Lg/view",
        image: imgPres4,
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
    <Card className="card-hover h-full overflow-hidden">
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          width={768}
          height={512}
          className="aspect-[3/2] w-full object-cover"
        />
      )}
      <CardHeader>
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
          <div className={`mt-6 grid gap-6 ${section.items.some((i) => i.isVideo) ? "md:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
            {section.items.map((item) => (
              <ToolCard key={item.title} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
