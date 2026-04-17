import { createFileRoute, Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/teacher-training")({
  head: () => ({
    meta: [
      { title: "הדרכת AI לחדרי מורים — תוכניות מותאמות לבתי ספר | מיכל זיו" },
      {
        name: "description",
        content:
          "הדרכות AI לחדרי מורים בבית הספר: שלושה מסלולים להטמעת בינה מלאכותית, STEM ואוריינות מתמטית. ליווי לצוותי הוראה וניהול.",
      },
      { name: "keywords", content: "הדרכת חדר מורים, AI בחדר מורים, השתלמות מורים, הטמעת STEM, ליווי פדגוגי" },
      { property: "og:title", content: "הדרכת AI לחדרי מורים | מיכל זיו" },
      {
        property: "og:description",
        content:
          "שלושה מסלולים להטמעת AI ו-STEM בחדר המורים — ליווי, הדרכה לניהול ותוכנית מותאמת לבית הספר.",
      },
      { property: "og:url", content: "https://michal-stem.lovable.app/teacher-training" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "הדרכת AI לחדרי מורים",
          description: "תוכנית הדרכה לחדרי מורים ולצוותי ניהול עם שלושה מסלולים נפרדים להטמעת AI, STEM ואוריינות מתמטית.",
          provider: {
            "@type": "Person",
            name: "מיכל זיו",
            url: "https://michal-stem.lovable.app/",
          },
          inLanguage: "he",
          courseMode: "blended",
          educationalLevel: "professional development",
        }),
      },
    ],
  }),
  component: TeacherTrainingPage,
});

type Track = {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  audience: string;
  hours: string;
  description: string;
  schedule: Array<{ label: string; value: string }>;
  topics: string[];
  outcomes: string[];
};

const tracks: Track[] = [
  {
    id: "track1",
    title: "ליווי צמוד לחדר מורים",
    subtitle: "הדרכה פרונטלית ובזום | בניית כלים | תפעול המרחב הדיגיטלי",
    badge: "לצוות שמתחיל",
    audience: "צוות מורים",
    hours: "24 שעות לשנה",
    description:
      "מסלול לצוותי מורים המעוניינים להטמיע כלים דיגיטליים ואינטראקטיביים בהוראת המתמטיקה, עם שילוב של הדרכה בבית הספר, פגישות זום ובניית כלים מותאמים לכיתה.",
    schedule: [
      { label: "פגישות פרונטליות", value: "6 פגישות של שעתיים בבית הספר (12 שעות)" },
      { label: "פגישות זום", value: "6 פגישות של שעה (6 שעות)" },
      { label: "עבודה אישית ובניית כלים", value: "6 שעות מותאמות לצרכי הצוות" },
      { label: "תדירות", value: "פגישה אחת לחודש + זום בין לבין" },
    ],
    topics: [
      "הכרת Moodle של משרד החינוך והטמעת משימות חלוץ",
      "בניית מיקרו־אפליקציות לנושאי ליבה: פונקציות, גיאומטריה ואי־ודאות",
      "שימוש בכלי AI ליצירת חומרי הוראה אינטראקטיביים",
      "פיתוח שאלות חקר בפורמט PISA",
      "מעקב אחר ביצועי תלמידים ושיתוף ידע בצוות",
    ],
    outcomes: [
      "כל מורה מפעיל לפחות שני כלים אינטראקטיביים בכיתה",
      "עמידה בדרישות החתימה הדיגיטלית של המשרד",
      "מאגר כלים לשימוש חוזר בשנים הבאות",
    ],
  },
  {
    id: "track2",
    title: "הדרכה לצוותי ניהול",
    subtitle: "הכרת כלים ופלטפורמות | בניית תוכנית עבודה | חלוקת משימות",
    badge: "להנהלה",
    audience: "הנהלת בית הספר",
    hours: "20 שעות לשנה",
    description:
      "מסלול למנהלי חטיבות ביניים ורכזי מקצוע שמעוניינים להוביל את תהליך ה־STEM מההנהלה, להבין את דרישות המשרד ולבנות תוכנית עבודה ריאלית ומדידה.",
    schedule: [
      { label: "סדנת פתיחה", value: "פגישה פרונטלית של 3 שעות לאבחון ומיפוי" },
      { label: "פגישות ליווי", value: "8 פגישות זום של שעה" },
      { label: "סדנת אמצע שנה", value: "פגישה פרונטלית של 3 שעות לעדכון תוכנית" },
      { label: "פגישת סיכום", value: "פגישה פרונטלית של 3 שעות להצגת תוצאות" },
      { label: "תדירות", value: "זום חודשי + 3 פגישות פרונטליות" },
    ],
    topics: [
      "הכרת דרישות ישראל ריאלית 2026: יעדים, מדדים ודיווח",
      "קריאת נתוני BI והבנת מדד ה־STEM הבית־ספרי",
      "היכרות עם Moodle וסביבות הלמידה של המשרד",
      "בניית תוכנית עבודה שנתית וחלוקת אחריות בצוות",
      "בניית מנגנון מעקב ודיווח פנימי לבית הספר",
    ],
    outcomes: [
      "תוכנית עבודה שנתית כתובה ומאושרת",
      "חלוקת אחריות ברורה בין חברי הצוות",
      "עמידה מלאה ביעדי הדיווח המשרדיים",
      "הנהלה שיודעת לקרוא ולפרש את נתוני ה־STEM",
    ],
  },
  {
    id: "track3",
    title: "ליווי מותאם לבית הספר",
    subtitle: "אבחון מצב קיים | תוכנית שנתית מותאמת | מדידת תוצאות",
    badge: "ליווי מקיף",
    audience: "מורים + הנהלה",
    hours: "36 שעות לשנה",
    description:
      "המסלול המקיף ביותר: ליווי מלא של הצוות הפדגוגי וההנהלה לאורך השנה, החל מאבחון מעמיק של המצב הקיים ועד מדידת תוצאות ותכנון המשך.",
    schedule: [
      { label: "שלב אבחון", value: "4 שעות של ראיונות צוות וקריאת נתונים" },
      { label: "בניית תוכנית", value: "4 שעות למסמך עבודה והצגה להנהלה" },
      { label: "ליווי שוטף", value: "20 שעות של פגישות פרונטליות וזום לאורך השנה" },
      { label: "סיכום ומדידה", value: "4 שעות להצגת תוצאות ותכנון שנה הבאה" },
      { label: "תדירות", value: "פגישה שבועית או דו־שבועית בהתאם לצורך" },
    ],
    topics: [
      "אבחון רמת הבשלות הדיגיטלית של הצוות",
      "בניית תיק מוצר דיגיטלי לבית הספר",
      "ליווי פרטני לכל מורה בהתאם לצרכיו",
      "פיתוח כלים ייחודיים לנקודות חולשה בבית הספר",
      "הכנה ממוקדת ל־PISA ול־TIMSS",
      "הפיכת נתוני ה־STEM ל'צבע ירוק' במערכת",
    ],
    outcomes: [
      "שיפור מדד ה־STEM הבית־ספרי",
      "עלייה בשיעור הבנות במסלולי מצוינות ו־5 יחידות",
      "תיק מוצר דיגיטלי מלא ומוכן לדיווח",
      "צוות שמסוגל להמשיך עצמאית בשנה הבאה",
    ],
  },
];

const comparisonRows = [
  { label: "קהל יעד", values: ["צוות מורים", "הנהלה", "מורים + הנהלה"] },
  { label: "היקף שעות", values: ["24 שעות", "20 שעות", "36 שעות"] },
  { label: "תדירות", values: ["חודשי", "חודשי", "שבועי / דו־שבועי"] },
  { label: "אופן הליווי", values: ["פרונטלי + זום", "זום + פרונטלי", "פרונטלי + זום"] },
  { label: "מתאים ל...", values: ["צוות שמתחיל", "הנהלה שרוצה ודאות", "בית ספר שרוצה להוביל"] },
];

function TrackCard({ track }: { track: Track }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-primary/5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <CardTitle className="font-display text-2xl text-primary">{track.title}</CardTitle>
            <CardDescription className="mt-2 text-sm leading-relaxed">{track.subtitle}</CardDescription>
          </div>
          <Badge variant="secondary">{track.badge}</Badge>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-background px-3 py-1 font-medium">{track.audience}</span>
          <span className="rounded-full bg-background px-3 py-1 font-medium">{track.hours}</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-6 pt-6">
        <p className="leading-relaxed text-muted-foreground">{track.description}</p>

        <div>
          <h3 className="mb-3 font-semibold text-primary">תכנית הפגישות</h3>
          <div className="grid gap-3 rounded-xl border bg-card p-4 sm:grid-cols-2">
            {track.schedule.map((item) => (
              <div key={item.label} className="space-y-1 rounded-lg border border-border/60 p-3">
                <p className="text-xs font-semibold text-muted-foreground">{item.label}</p>
                <p className="text-sm leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-primary">תכני ההדרכה</h3>
          <ul className="list-disc space-y-1.5 pr-5 text-sm leading-relaxed marker:text-primary">
            {track.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-primary">תוצרים מצופים</h3>
          <ul className="list-disc space-y-1.5 pr-5 text-sm leading-relaxed marker:text-primary">
            {track.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </div>

        <Button asChild className="w-full" size="lg">
          <Link to="/contact">לתיאום שיחה</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

function TeacherTrainingPage() {
  return (
    <div className="section-container">
      <h1 className="page-enter section-title">הדרכת חדרי מורים</h1>
      <p className="page-enter-delay-1 mt-3 text-lg text-muted-foreground">
        תוכנית הדרכה לחדרי מורים ולצוותי ניהול — שלושה מסלולים נפרדים להטמעת STEM ואוריינות מתמטית
      </p>

      <Card className="page-enter-delay-2 mt-8 border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="font-display text-xl">מטרת התוכנית</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-relaxed text-muted-foreground">
            התוכנית נועדה לסייע לבתי ספר לממש את יעדי רפורמת "ישראל ריאלית" בצורה מעשית, מדידה ומתמשכת —
            מהטמעת כלים דיגיטליים אצל צוות המורים ועד בניית תוכנית עבודה שנתית עם הנהלת בית הספר.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" size="sm">
              <a href="/docs/training-program.docx" download>
                הורדת התוכנית (Word)
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href="/docs/stem-training.pdf" download>
                מודל ה‑STEM (PDF)
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-12">
        <Tabs defaultValue="track1" dir="rtl" className="w-full">
          <TabsList className="grid h-auto w-full grid-cols-1 gap-2 bg-transparent p-0 sm:grid-cols-3">
            {tracks.map((track) => (
              <TabsTrigger key={track.id} value={track.id} className="whitespace-normal rounded-xl border bg-card px-4 py-3 text-right leading-snug data-[state=active]:border-primary data-[state=active]:bg-primary/5">
                {track.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {tracks.map((track) => (
            <TabsContent key={track.id} value={track.id} className="mt-6">
              <TrackCard track={track} />
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold text-primary">השוואת מסלולים</h2>
        <div className="mt-4 overflow-hidden rounded-xl border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">קריטריון</TableHead>
                <TableHead className="text-right">מסלול 1</TableHead>
                <TableHead className="text-right">מסלול 2</TableHead>
                <TableHead className="text-right">מסלול 3</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonRows.map((row) => (
                <TableRow key={row.label}>
                  <TableCell className="font-semibold">{row.label}</TableCell>
                  {row.values.map((value) => (
                    <TableCell key={`${row.label}-${value}`}>{value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <Card className="mt-12 border-primary/20 bg-primary/5">
        <CardContent className="flex flex-col items-center gap-4 py-8 text-center">
          <h2 className="font-display text-2xl font-semibold">לפרטים ולתיאום</h2>
          <p className="max-w-2xl text-muted-foreground">
            כל מסלול מותאם לצרכים של בית הספר והצוות. אפשר להתחיל במסלול ממוקד או לבנות ליווי שנתי מלא.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">צרו קשר</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
