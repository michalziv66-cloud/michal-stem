import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Download, Users, Clock, Repeat, Target, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "הדרכת חדרי מורים — מיכל זיו" },
      {
        name: "description",
        content:
          "תוכנית הדרכה לחדרי מורים ולצוותי ניהול — שלושה מסלולים להטמעת STEM ואוריינות מתמטית בחטיבת הביניים",
      },
      { property: "og:title", content: "הדרכת חדרי מורים — מיכל זיו" },
      {
        property: "og:description",
        content:
          "תוכנית הדרכה לחדרי מורים ולצוותי ניהול — שלושה מסלולים להטמעת STEM בחטיבת הביניים",
      },
    ],
  }),
  component: TrainingPage,
});

type Track = {
  id: string;
  title: string;
  subtitle: string;
  audience: string;
  hours: string;
  description: string;
  schedule: { label: string; value: string }[];
  topics: string[];
  outcomes: string[];
  badge: string;
};

const tracks: Track[] = [
  {
    id: "track1",
    title: "ליווי צמוד לחדר מורים",
    subtitle: "הדרכה פרונטלית ובזום | בניית כלים | תפעול המרחב הדיגיטלי",
    audience: "צוות מורים",
    hours: "24 שעות לשנה",
    badge: "מתאים לצוות שמתחיל",
    description:
      "מסלול לצוותי מורים המעוניינים להטמיע כלים דיגיטליים ואינטראקטיביים בהוראת המתמטיקה. הליווי משלב הדרכות פרונטליות בבית הספר, פגישות זום שוטפות, ובניית כלים ייחודיים המותאמים לצרכי הכיתה.",
    schedule: [
      { label: "סה״כ שעות", value: "24 שעות לשנה" },
      { label: "פגישות פרונטליות", value: '6 פגישות של שעתיים בבית הספר (סה"כ 12 שעות)' },
      { label: "פגישות זום", value: '6 פגישות של שעה (סה"כ 6 שעות)' },
      { label: "עבודה אישית / בניית כלים", value: "6 שעות (מותאמות לצרכי הצוות)" },
      { label: "תדירות", value: "פגישה פרונטלית אחת לחודש + זום בין לבין" },
    ],
    topics: [
      "הכרת ממשק ה־Moodle של משרד החינוך — הטמעת משימות חלוץ ודיווח דיגיטלי",
      "בניית מיקרו־אפליקציות לנושאי הליבה: פונקציות, גיאומטריה, אי־ודאות",
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
  },
  {
    id: "track2",
    title: "הדרכה לצוותי ניהול",
    subtitle: "הכרת כלים ופלטפורמות | בניית תוכנית עבודה | חלוקת משימות לפי ישראל ריאלית",
    audience: "הנהלת בית הספר",
    hours: "20 שעות לשנה",
    badge: "מתאים להנהלה שרוצה לוודא",
    description:
      "מסלול למנהלי חטיבות ביניים ורכזי מקצוע המעוניינים להוביל את תהליך ה־STEM מההנהלה. הליווי מתמקד בהבנת הדרישות המשרדיות, בניית תוכנית עבודה ריאלית, וחלוקת משימות לפי יכולות הצוות.",
    schedule: [
      { label: "סה״כ שעות", value: "20 שעות לשנה" },
      { label: "סדנת פתיחה", value: "פגישה פרונטלית של 3 שעות (אבחון מצב קיים ומיפוי צוות)" },
      { label: "פגישות ליווי", value: '8 פגישות זום של שעה (סה"כ 8 שעות)' },
      { label: "סדנת אמצע שנה", value: "פגישה פרונטלית של 3 שעות (בדיקת ביצועים ועדכון תוכנית)" },
      { label: "פגישת סיכום", value: "פגישה פרונטלית של 3 שעות (הצגת תוצאות + תכנון שנה הבאה)" },
      { label: "תדירות", value: "פגישת זום חודשית + 3 פגישות פרונטליות" },
    ],
    topics: [
      "הכרת דרישות 'ישראל ריאלית 2026' — יעדים, מדדים ומועדי דיווח",
      "קריאת נתוני ה־BI — הבנת מדד ה־STEM המשרדי הבית־ספרי",
      "הכרת הפלטפורמות: Moodle של משרד החינוך וסביבות הלמידה",
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
  },
  {
    id: "track3",
    title: "ליווי מותאם לבית הספר",
    subtitle: "אבחון מצב קיים | תוכנית שנתית מותאמת | מדידת תוצאות",
    audience: "מורים + הנהלה",
    hours: "36 שעות לשנה",
    badge: "מתאים לבית ספר שרוצה להוביל",
    description:
      "המסלול המקיף ביותר — ליווי מלא של הצוות הפדגוגי וההנהלה לאורך השנה. מתחיל באבחון מעמיק של המצב הקיים, בונה תוכנית עבודה מותאמת לבית הספר הספציפי, ומלווה את הביצוע עם מדידת תוצאות שוטפת.",
    schedule: [
      { label: "סה״כ שעות", value: "36 שעות לשנה" },
      { label: "שלב אבחון", value: 'ראיונות צוות, קריאת נתונים, בניית "תמונת מצב" (4 שעות)' },
      { label: "בניית תוכנית", value: "מסמך עבודה + הצגה להנהלה (4 שעות)" },
      { label: "ליווי שוטף", value: "20 שעות של פגישות פרונטליות וזום לאורך השנה" },
      { label: "סיכום ומדידה", value: "הצגת תוצאות + תכנון שנה הבאה (4 שעות)" },
      { label: "תדירות", value: "פגישה שבועית / דו־שבועית בהתאם לצורך" },
    ],
    topics: [
      "אבחון רמת הבשלות הדיגיטלית של הצוות (רמה 1 עד רמה 3)",
      'בניית "תיק מוצר דיגיטלי" לבית הספר — תיעוד כל כלי ומשימה',
      "ליווי פרטני לכל מורה בצוות בהתאם לצרכיו",
      "פיתוח כלים ייחודיים לנושאים שבהם בית הספר נחלש",
      "הכנה ממוקדת למבחני PISA ו־TIMSS",
      'עבודה על מדד ה־STEM הבית־ספרי — הפיכת נתונים ל"צבע ירוק"',
      'בניית "סיפור הצלחה" לכנסי חדשנות של משרד החינוך',
    ],
    outcomes: [
      "שיפור מדד ה־STEM הבית־ספרי במחוז",
      "עלייה בשיעור הבנות במסלולי מצוינות ו־5 יחידות",
      "תיק מוצר דיגיטלי מלא ומוכן לדיווח משרדי",
      "צוות עצמאי המסוגל להמשיך ללא ליווי בשנה הבאה",
    ],
  },
];

const comparisonRows = [
  { label: "קהל יעד", values: ["צוות מורים", "הנהלת בית הספר", "מורים + הנהלה"] },
  { label: "היקף שעות", values: ["24 שעות", "20 שעות", "36 שעות"] },
  { label: "תדירות", values: ["חודשי", "חודשי", "שבועי / דו־שבועי"] },
  { label: "אופן הליווי", values: ["פרונטלי + זום", "זום + 3 פגישות", "פרונטלי + זום"] },
  { label: "מתאים ל...", values: ["צוות שמתחיל", "הנהלה שרוצה לוודא", "בית ספר שרוצה להוביל"] },
];

function TrackPanel({ track }: { track: Track }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-primary/5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <CardTitle className="font-display text-2xl text-primary">{track.title}</CardTitle>
            <CardDescription className="mt-1 text-sm">{track.subtitle}</CardDescription>
          </div>
          <Badge variant="secondary" className="shrink-0">{track.badge}</Badge>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <span className="inline-flex items-center gap-1 rounded-full bg-background px-3 py-1 font-medium">
            <Users className="h-3.5 w-3.5" /> {track.audience}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-background px-3 py-1 font-medium">
            <Clock className="h-3.5 w-3.5" /> {track.hours}
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-6 pt-6">
        <p className="leading-relaxed text-muted-foreground">{track.description}</p>

        <div>
          <h3 className="mb-3 flex items-center gap-2 font-semibold">
            <Repeat className="h-4 w-4 text-primary" />
            תכנית הפגישות וזמנים
          </h3>
          <dl className="grid gap-2 rounded-lg border bg-card p-4 sm:grid-cols-2">
            {track.schedule.map((row) => (
              <div key={row.label} className="flex flex-col gap-0.5 border-b border-dashed py-2 last:border-0 sm:border-0 sm:py-0">
                <dt className="text-xs font-semibold text-muted-foreground">{row.label}</dt>
                <dd className="text-sm">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h3 className="mb-3 flex items-center gap-2 font-semibold">
            <Target className="h-4 w-4 text-primary" />
            תכני ההדרכה
          </h3>
          <ul className="space-y-1.5 pr-5 text-sm leading-relaxed marker:text-primary list-disc">
            {track.topics.map((t) => (<li key={t}>{t}</li>))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 flex items-center gap-2 font-semibold">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            תוצרים מצופים
          </h3>
          <ul className="space-y-1.5 text-sm leading-relaxed">
            {track.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button asChild className="w-full" size="lg">
          <Link to="/contact">לתיאום פגישה במסלול זה</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

function TrainingPage() {
  return (
    <div className="section-container">
      <h1 className="page-enter section-title">הדרכת חדרי מורים</h1>
      <p className="page-enter-delay-1 mt-3 text-lg text-muted-foreground">
        תוכנית הדרכה לחדרי מורים ולצוותי ניהול — שלושה מסלולים להטמעת STEM ואוריינות מתמטית
      </p>

      {/* Program goal */}
      <Card className="page-enter-delay-2 mt-8 border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="font-display text-xl">מטרת התוכנית</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed text-muted-foreground">
            התוכנית נועדה לסייע לבתי ספר לממש את יעדי רפורמת "ישראל ריאלית" בצורה מעשית, מדידה ומתמשכת.
            שלושת המסלולים מציעים רמות שונות של ליווי — מהדרכה שוטפת לצוות המורים, דרך עבודה עם הנהלת
            בית הספר, ועד בניית תוכנית עבודה שנתית מותאמת אישית.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild variant="outline" size="sm">
              <a href="/docs/training-program.docx" download>
                <Download className="ml-2 h-4 w-4" />
                הורדת התוכנית (Word)
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href="/docs/stem-training.pdf" download>
                <Download className="ml-2 h-4 w-4" />
                מודל ה־STEM (PDF)
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tracks */}
      <div className="mt-12">
        <Tabs defaultValue="track1" dir="rtl" className="w-full">
          <TabsList className="grid w-full grid-cols-1 gap-1 sm:grid-cols-3">
            {tracks.map((t, i) => (
              <TabsTrigger key={t.id} value={t.id} className="text-xs sm:text-sm">
                מסלול {i + 1}: {t.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {tracks.map((t) => (
            <TabsContent key={t.id} value={t.id} className="mt-6">
              <TrackPanel track={t} />
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Comparison table */}
      <div className="mt-16">
        <h2 className="font-display text-2xl font-semibold">השוואת המסלולים</h2>
        <div className="mt-4 overflow-x-auto rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right font-semibold">קריטריון</TableHead>
                {tracks.map((t, i) => (
                  <TableHead key={t.id} className="text-right font-semibold">מסלול {i + 1}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonRows.map((row) => (
                <TableRow key={row.label}>
                  <TableCell className="font-semibold">{row.label}</TableCell>
                  {row.values.map((v, i) => (
                    <TableCell key={i}>{v}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* CTA */}
      <Card className="mt-12 border-primary/20 bg-primary/5">
        <CardContent className="flex flex-col items-center gap-4 py-8 text-center">
          <h2 className="font-display text-2xl font-semibold">לפרטים ולתיאום</h2>
          <p className="text-muted-foreground">
            כל מסלול מותאם לצרכים הספציפיים של בית הספר. נשמח לקבוע פגישת היכרות.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">צרו קשר</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
