import { useState, useEffect, useRef } from "react";
import { Volume2, Square } from "lucide-react";
import avatarImage from "@/assets/avatar-michal.png";
import { cn } from "@/lib/utils";

/**
 * Floating speaking avatar.
 * On click, extracts the main headings (h1, h2) and main paragraphs from the
 * current page's <main> element and reads them aloud using the browser's
 * built-in Web Speech API (free, no external API).
 */
export function SpeakingAvatar() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [showHint, setShowHint] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setIsSupported(false);
    }
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const extractMainText = (): string => {
    const main = document.getElementById("main-content") || document.querySelector("main");
    if (!main) return "";

    const elements = main.querySelectorAll("h1, h2, p");
    const parts: string[] = [];

    elements.forEach((el) => {
      // Skip elements inside our own avatar UI
      if (el.closest("[data-speaking-avatar]")) return;
      const text = el.textContent?.trim();
      if (text && text.length > 1) {
        parts.push(text);
      }
    });

    return parts.join(". ");
  };

  const pickHebrewVoice = (): SpeechSynthesisVoice | null => {
    const voices = window.speechSynthesis.getVoices();
    if (!voices.length) return null;
    const he =
      voices.find((v) => v.lang?.toLowerCase().startsWith("he")) ||
      voices.find((v) => v.lang?.toLowerCase().includes("iw"));
    return he || null;
  };

  const handleClick = () => {
    if (!isSupported) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const text = extractMainText();
    if (!text) return;

    // Cancel anything queued
    window.speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "he-IL";
    utter.rate = 1;
    utter.pitch = 1;

    const voice = pickHebrewVoice();
    if (voice) utter.voice = voice;

    utter.onend = () => setIsSpeaking(false);
    utter.onerror = () => setIsSpeaking(false);

    utteranceRef.current = utter;
    window.speechSynthesis.speak(utter);
    setIsSpeaking(true);
  };

  // Some browsers load voices async — trigger a refresh
  useEffect(() => {
    if (!isSupported) return;
    const handler = () => {
      // no-op, just to ensure voices are populated
    };
    window.speechSynthesis.onvoiceschanged = handler;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, [isSupported]);

  if (!isSupported) return null;

  return (
    <div
      data-speaking-avatar
      className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-2"
    >
      {showHint && !isSpeaking && (
        <div className="animate-fade-in rounded-2xl rounded-bl-sm bg-card border border-gold/30 px-4 py-2 text-sm shadow-lg max-w-[200px]">
          <p className="font-medium text-foreground">היי! 👋</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            לחצי עליי ואקריא את העמוד
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={handleClick}
        onMouseEnter={() => setShowHint(true)}
        onMouseLeave={() => setShowHint(false)}
        onFocus={() => setShowHint(true)}
        onBlur={() => setShowHint(false)}
        aria-label={isSpeaking ? "עצור הקראה" : "הקרא את תוכן העמוד"}
        className={cn(
          "group relative flex h-20 w-20 items-center justify-center rounded-full",
          "bg-gradient-to-br from-gold/20 to-primary/10 border-2 border-gold/40",
          "shadow-xl hover:shadow-2xl transition-all duration-300",
          "hover:scale-110 active:scale-95",
          "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/40",
          isSpeaking && "ring-4 ring-gold/50 animate-pulse",
        )}
      >
        <img
          src={avatarImage}
          alt="אוואטר של מיכל זיו"
          width={80}
          height={80}
          loading="lazy"
          className="h-full w-full rounded-full object-cover object-top"
        />

        {/* Status badge */}
        <span
          className={cn(
            "absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full",
            "bg-gold text-gold-foreground shadow-md",
            "transition-transform group-hover:scale-110",
          )}
        >
          {isSpeaking ? (
            <Square className="h-3.5 w-3.5 fill-current" />
          ) : (
            <Volume2 className="h-3.5 w-3.5" />
          )}
        </span>

        {/* Speaking pulse rings */}
        {isSpeaking && (
          <>
            <span className="absolute inset-0 rounded-full border-2 border-gold/50 animate-ping" />
            <span className="absolute -inset-2 rounded-full border border-gold/30 animate-ping [animation-delay:0.3s]" />
          </>
        )}
      </button>
    </div>
  );
}
