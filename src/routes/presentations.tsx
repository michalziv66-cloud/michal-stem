import { createFileRoute } from "@tanstack/react-router";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const Route = createFileRoute("/presentations")({
  head: () => ({
    meta: [
      { title: "מצגות — מיכל זיו" },
      { name: "description", content: "מצגות שיעור אינטראקטיביות להוראת מתמטיקה" },
      { property: "og:title", content: "מצגות — מיכל זיו" },
      { property: "og:description", content: "מצגות שיעור אינטראקטיביות להוראת מתמטיקה" },
    ],
  }),
  component: PresentationsPage,
});

const presentations = [
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
];

function PresentationsPage() {
  return (
    <div className="section-container">
      <h1 className="section-title">מצגות</h1>
      <p className="mt-3 text-lg text-muted-foreground">מצגות שיעור אינטראקטיביות ב-Canva — לחצו לפתיחה</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {presentations.map((pres) => (
          <a key={pres.url} href={pres.url} target="_blank" rel="noopener noreferrer" className="block">
            <Card className="card-hover h-full">
              <CardHeader>
                <div className="mb-2 text-3xl">{pres.icon}</div>
                <CardTitle className="font-display text-lg">{pres.title}</CardTitle>
                <CardDescription>{pres.description}</CardDescription>
              </CardHeader>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
