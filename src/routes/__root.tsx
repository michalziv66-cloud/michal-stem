import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "מיכל זיו — מומחית AI בחינוך והוראת מתמטיקה" },
      {
        name: "description",
        content:
          "מיכל זיו — מובילת פיתוח פדגוגי דיגיטלי, מומחית לשילוב בינה מלאכותית בחינוך, הדרכות AI לחדרי מורים וכלי STEM להוראת מתמטיקה.",
      },
      { name: "author", content: "מיכל זיו" },
      {
        name: "keywords",
        content:
          "AI בחינוך, בינה מלאכותית בהוראה, הדרכות AI למורים, ChatGPT בכיתה, כלי AI לחינוך, הוראת מתמטיקה, STEM, חדר מורים, מיכל זיו",
      },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "Hebrew" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "he_IL" },
      { property: "og:site_name", content: "מיכל זיו — מתמטיקה מחוץ לסוגריים" },
      { property: "og:title", content: "מיכל זיו — מומחית AI בחינוך והוראת מתמטיקה" },
      {
        property: "og:description",
        content:
          "מובילת פיתוח פדגוגי דיגיטלי, מומחית לשילוב בינה מלאכותית בחינוך, הדרכות AI לחדרי מורים וכלי STEM.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "מיכל זיו — מומחית AI בחינוך" },
      {
        name: "twitter:description",
        content: "הדרכות AI לחדרי מורים, כלי STEM וחדשנות פדגוגית.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "canonical", href: "https://michal-stem.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "מיכל זיו",
          jobTitle: "מומחית AI בחינוך, מורה למתמטיקה ומובילת פיתוח פדגוגי דיגיטלי",
          description:
            "מורה למתמטיקה בחטיבת הביניים עם 14 שנות ניסיון, מובילת חדשנות פדגוגית ומומחית לשילוב בינה מלאכותית בחינוך.",
          url: "https://michal-stem.lovable.app/",
          knowsAbout: [
            "בינה מלאכותית בחינוך",
            "הוראת מתמטיקה",
            "STEM",
            "פיתוח פדגוגי דיגיטלי",
            "ChatGPT למורים",
            "כלי AI להוראה",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <a href="#main-content" className="a11y-skip-link">
        דלג לתוכן הראשי
      </a>
      <Header />
      <main id="main-content" className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <AccessibilityWidget />
    </>
  );
}
