import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "צרו קשר — הזמנת הדרכת AI לבית הספר | מיכל זיו" },
      {
        name: "description",
        content:
          "צרו קשר עם מיכל זיו להזמנת הדרכות AI לחדרי מורים, סדנאות מקוונות וייעוץ פדגוגי לבית הספר שלכם.",
      },
      { property: "og:title", content: "צרו קשר — מיכל זיו | הדרכות AI בחינוך" },
      {
        property: "og:description",
        content: "הזמנת הדרכות AI, סדנאות וייעוץ פדגוגי לבתי ספר.",
      },
      { property: "og:url", content: "https://michal-stem.lovable.app/contact" },
    ],
  }),
  component: ContactPage,
});

const WHATSAPP_NUMBER = "972509017802";
const WHATSAPP_MESSAGE = "שלום מיכל, פניתי אליך מהאתר ואשמח לקבל פרטים נוספים.";
const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

function ContactPage() {
  const ctaRef = useScrollReveal();
  const detailsRef = useScrollReveal(200);

  return (
    <div className="section-container">
      <h1 className="page-enter section-title">צור קשר</h1>
      <p className="page-enter-delay-1 mt-3 text-lg text-muted-foreground">
        נשמח לשמוע מכם! לחצו על הכפתור והודעתכם תיפתח אצלי בוואטסאפ.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-5">
        <div ref={ctaRef} className="scroll-reveal lg:col-span-3">
          <div className="rounded-xl border bg-card p-8 text-center space-y-5">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <h2 className="font-display text-2xl font-bold text-primary">שלחו לי הודעה בוואטסאפ</h2>
            <p className="text-muted-foreground">
              ההודעה תיפתח אצלי במספר 050-901-7802 ואחזור אליכם בהקדם.
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                פתח וואטסאפ ושלח הודעה
              </a>
            </Button>
          </div>
        </div>

        <div ref={detailsRef} className="scroll-reveal lg:col-span-2">
          <div className="rounded-xl border bg-card p-6 space-y-5">
            <h3 className="font-display text-lg font-bold text-primary">פרטי התקשרות</h3>
            <div className="flex flex-col items-center gap-5 text-center">
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl" aria-hidden="true">📧</span>
                <p className="text-sm font-medium">אימייל</p>
                <a href="mailto:michalziv66@gmail.com" className="block text-sm text-primary hover:underline [unicode-bidi:plaintext]" dir="ltr">
                  michalziv66@gmail.com
                </a>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl" aria-hidden="true">📱</span>
                <p className="text-sm font-medium">טלפון</p>
                <a href="tel:+972509017802" className="block text-sm text-primary hover:underline [unicode-bidi:plaintext]" dir="ltr">
                  050-901-7802
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
