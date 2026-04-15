import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "צור קשר — מיכל זיו" },
      { name: "description", content: "צרו קשר עם מיכל זיו — מורה למתמטיקה ומובילת חדשנות פדגוגית" },
      { property: "og:title", content: "צור קשר — מיכל זיו" },
      { property: "og:description", content: "צרו קשר עם מיכל זיו" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useScrollReveal();
  const detailsRef = useScrollReveal(200);

  return (
    <div className="section-container">
      <h1 className="page-enter section-title">צור קשר</h1>
      <p className="page-enter-delay-1 mt-3 text-lg text-muted-foreground">נשמח לשמוע מכם!</p>

      <div className="mt-10 grid gap-10 lg:grid-cols-5">
        <div ref={formRef} className="scroll-reveal lg:col-span-3">
          {submitted ? (
            <Card>
              <CardContent className="p-8 text-center">
                <span className="text-4xl">✅</span>
                <h2 className="mt-4 font-display text-xl font-bold text-primary">ההודעה נשלחה!</h2>
                <p className="mt-2 text-sm text-muted-foreground">אחזור אליכם בהקדם האפשרי.</p>
              </CardContent>
            </Card>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <div>
                <label className="mb-1.5 block text-sm font-medium">שם מלא</label>
                <Input required placeholder="השם שלכם" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">אימייל</label>
                <Input required type="email" placeholder="example@email.com" dir="ltr" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">הודעה</label>
                <Textarea required placeholder="במה נוכל לעזור?" rows={5} />
              </div>
              <Button type="submit" size="lg" className="w-full">
                שלח הודעה
              </Button>
            </form>
          )}
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
