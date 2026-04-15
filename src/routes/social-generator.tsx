import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";


export const Route = createFileRoute("/social-generator")({
  head: () => ({
    meta: [
      { title: "מחולל פוסטים — מיכל זיו" },
      { name: "description", content: "צרו פוסטים מוכנים לפייסבוק, אינסטגרם וואטסאפ לשיתוף כלים חינוכיים" },
      { property: "og:title", content: "מחולל פוסטים — מיכל זיו" },
      { property: "og:description", content: "צרו פוסטים מוכנים לפייסבוק, אינסטגרם וואטסאפ" },
    ],
  }),
  component: SocialGeneratorPage,
});

function generatePosts(toolName: string, description: string, audience: string) {
  const facebook = `🚀 שמעתם על "${toolName}"? 🎉

${description}

✨ הכלי מיועד ל${audience} ומאפשר חוויית למידה אינטראקטיבית שמשנה את הדרך שבה מלמדים ולומדים מתמטיקה.

🔗 הכלי זמין בחינם באתר שלי — קישור בתגובה הראשונה!

📐 מתמטיקה מחוץ לסוגריים — כי למידה צריכה להיות חוויה.

💡 נסו, שתפו, ותגידו לי מה דעתכם! 👇`;

  const instagram = `📐 ${toolName} — כלי חדש ל${audience}!

${description}

🔗 לינק באתר — בביו!

#מתמטיקה #חינוך #STEM #טכנולוגיהבחינוך #הוראהחדשנית`;

  const whatsapp = `היי 👋
רציתי לשתף אתכם עם "${toolName}" — ${description}
מתאים ל${audience}. שווה לנסות! 📐✨`;

  return { facebook, instagram, whatsapp };
}

function SocialGeneratorPage() {
  const [toolName, setToolName] = useState("");
  const [description, setDescription] = useState("");
  const [audience, setAudience] = useState("");
  const [posts, setPosts] = useState<ReturnType<typeof generatePosts> | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  

  const handleGenerate = () => {
    if (!toolName.trim() || !description.trim() || !audience.trim()) return;
    setPosts(generatePosts(toolName, description, audience));
  };

  const copyToClipboard = (text: string, platform: string) => {
    navigator.clipboard.writeText(text);
    setCopied(platform);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="section-container">
      <h1 className="page-enter section-title">מחולל פוסטים לרשתות חברתיות</h1>
      <p className="page-enter-delay-1 mt-3 text-lg text-muted-foreground">הכניסו פרטים על הכלי וקבלו 3 פוסטים מוכנים לשיתוף</p>

      <div className="page-enter page-enter-delay-2 mx-auto mt-10 max-w-2xl space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium">שם הכלי</label>
          <Input value={toolName} onChange={(e) => setToolName(e.target.value)} placeholder="לדוגמה: חוקר הפונקציות" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">תיאור קצר</label>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="מה הכלי עושה?" rows={3} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">קהל יעד</label>
          <Input value={audience} onChange={(e) => setAudience(e.target.value)} placeholder="לדוגמה: תלמידי כיתה ח׳" />
        </div>
        <Button onClick={handleGenerate} size="lg" className="w-full">
          ✨ צור פוסטים
        </Button>
      </div>

      {posts && (
        <div className="mx-auto mt-12 max-w-2xl space-y-6">
          {[
            { platform: "Facebook", emoji: "📘", content: posts.facebook },
            { platform: "Instagram", emoji: "📸", content: posts.instagram },
            { platform: "WhatsApp", emoji: "💬", content: posts.whatsapp },
          ].map(({ platform, emoji, content }) => (
            <Card key={platform}>
              <CardHeader className="flex-row items-center justify-between">
                <CardTitle className="font-display text-lg">
                  {emoji} {platform}
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(content, platform)}
                >
                  {copied === platform ? "✓ הועתק!" : "העתק"}
                </Button>
              </CardHeader>
              <CardContent>
                <pre className="whitespace-pre-wrap rounded-lg bg-muted p-4 text-sm leading-relaxed" dir="rtl">
                  {content}
                </pre>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
