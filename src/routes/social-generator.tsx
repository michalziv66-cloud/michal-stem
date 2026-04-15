import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/social-generator")({
  head: () => ({
    meta: [
      { title: "מחולל פוסטים — מיכל זיו" },
      { name: "description", content: "צרו פוסטים מוכנים לפייסבוק, אינסטגרם וואטסאפ" },
      { property: "og:title", content: "מחולל פוסטים — מיכל זיו" },
      { property: "og:description", content: "צרו פוסטים מוכנים לפייסבוק, אינסטגרם וואטסאפ" },
    ],
  }),
  component: SocialGeneratorPage,
});

type PostType = "tool" | "tip" | "challenge" | "promotion" | "free";

const postTypeLabels: Record<PostType, string> = {
  tool: "שיתוף כלי חינוכי",
  tip: "טיפ מקצועי",
  challenge: "אתגר / שאלת חשיבה",
  promotion: "קידום שירות / הרצאה",
  free: "פוסט חופשי",
};

function generatePosts(type: PostType, title: string, body: string, audience: string) {
  const signature = `\n\n📐 מיכל זיו — מתמטיקה מחוץ לסוגריים\n📧 michalziv66@gmail.com | 📱 0509017802`;

  let facebook = "";
  let instagram = "";
  let whatsapp = "";

  switch (type) {
    case "tool":
      facebook = `🚀 שמעתם על "${title}"? 🎉\n\n${body}\n\n✨ הכלי מיועד ל${audience} ומאפשר חוויית למידה אינטראקטיבית.\n\n🔗 הכלי זמין בחינם באתר שלי — קישור בתגובה הראשונה!\n\n💡 נסו, שתפו, ותגידו לי מה דעתכם! 👇${signature}`;
      instagram = `📐 ${title} — כלי חדש ל${audience}!\n\n${body}\n\n🔗 לינק באתר — בביו!\n\n#מתמטיקה #חינוך #STEM #טכנולוגיהבחינוך #הוראהחדשנית`;
      whatsapp = `היי 👋\nרציתי לשתף אתכם עם "${title}" — ${body}\nמתאים ל${audience}. שווה לנסות! 📐✨`;
      break;

    case "tip":
      facebook = `💡 טיפ מקצועי: ${title}\n\n${body}\n\n👥 רלוונטי במיוחד ל${audience}\n\nמה דעתכם? יש לכם טיפים נוספים? 👇${signature}`;
      instagram = `💡 ${title}\n\n${body}\n\n👥 ל${audience}\n\n#מתמטיקה #חינוך #טיפיםלמורים #STEM #פדגוגיה`;
      whatsapp = `💡 טיפ: ${title}\n\n${body}\n\nרלוונטי ל${audience}. מה דעתכם?`;
      break;

    case "challenge":
      facebook = `🧩 אתגר! ${title}\n\n${body}\n\n🎯 מתאים ל${audience}\n\nכתבו את התשובה בתגובות! 👇${signature}`;
      instagram = `🧩 ${title}\n\n${body}\n\n💬 כתבו תשובה בתגובות!\n\n#אתגרמתמטי #חשיבה #מתמטיקה #STEM`;
      whatsapp = `🧩 אתגר: ${title}\n\n${body}\n\nל${audience} — מה התשובה? 🤔`;
      break;

    case "promotion":
      facebook = `👋 ${title}\n\n${body}\n\n🎯 מיועד ל${audience}\n\nמוזמנים לשוחח 👇${signature}`;
      instagram = `✨ ${title}\n\n${body}\n\n👥 ל${audience}\n\n📩 פרטים בביו!\n\n#מתמטיקה #חינוך #פיתוחמקצועי #STEM`;
      whatsapp = `היי 👋\n\n${title}\n\n${body}\n\nמיועד ל${audience}.\nאשמח לפרטים נוספים? צרו קשר 📱`;
      break;

    case "free":
      facebook = `${title}\n\n${body}\n\n👥 ל${audience}${signature}`;
      instagram = `${title}\n\n${body}\n\n#מתמטיקה #חינוך #STEM`;
      whatsapp = `${title}\n\n${body}`;
      break;
  }

  return { facebook, instagram, whatsapp };
}

function SocialGeneratorPage() {
  const [postType, setPostType] = useState<PostType>("promotion");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [audience, setAudience] = useState("");
  const [posts, setPosts] = useState<ReturnType<typeof generatePosts> | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setImage(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleGenerate = () => {
    if (!title.trim() || !body.trim() || !audience.trim()) return;
    setPosts(generatePosts(postType, title, body, audience));
  };

  const copyToClipboard = (text: string, platform: string) => {
    navigator.clipboard.writeText(text);
    setCopied(platform);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="section-container">
      <h1 className="page-enter section-title">מחולל פוסטים לרשתות חברתיות</h1>
      <p className="page-enter-delay-1 mt-3 text-lg text-muted-foreground">בחרו סוג פוסט, מלאו פרטים וקבלו 3 גרסאות מוכנות</p>

      <div className="page-enter page-enter-delay-2 mx-auto mt-10 max-w-2xl space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium">סוג הפוסט</label>
          <Select value={postType} onValueChange={(v) => setPostType(v as PostType)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {(Object.entries(postTypeLabels) as [PostType, string][]).map(([key, label]) => (
                <SelectItem key={key} value={key}>{label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">כותרת / נושא</label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="לדוגמה: הכלי שישנה את שיעור המתמטיקה" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">תוכן עיקרי</label>
          <Textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="מה רוצים לומר?" rows={4} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">קהל יעד</label>
          <Input value={audience} onChange={(e) => setAudience(e.target.value)} placeholder="לדוגמה: מנהלי חטיבות ביניים" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">תמונה לפוסט (אופציונלי)</label>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          {image ? (
            <div className="relative mt-2 overflow-hidden rounded-lg border border-border">
              <img src={image} alt="תצוגה מקדימה" className="max-h-64 w-full object-cover" />
              <Button
                variant="destructive"
                size="sm"
                className="absolute top-2 left-2"
                onClick={removeImage}
              >
                ✕ הסר
              </Button>
            </div>
          ) : (
            <Button
              variant="outline"
              className="w-full border-dashed"
              onClick={() => fileInputRef.current?.click()}
            >
              📷 בחרו תמונה
            </Button>
          )}
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
                {image && (
                  <img src={image} alt="תמונת פוסט" className="mb-3 max-h-48 w-full rounded-lg object-cover" />
                )}
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
