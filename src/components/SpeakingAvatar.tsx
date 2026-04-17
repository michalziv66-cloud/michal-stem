import { useState, useEffect, useRef } from "react";
import { useLocation } from "@tanstack/react-router";
import { Volume2, Square } from "lucide-react";
import avatarImage from "@/assets/avatar-michal.png";
import { avatarScripts } from "@/lib/avatar-scripts";
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

    // Known male voices to explicitly avoid (across browsers/OS)
    const knownMaleNames = [
      "asaf", // hebrew male on macOS
      "daniel",
      "alex",
      "fred",
      "tom",
      "george",
      "james",
      "david",
      "mark",
      "diego",
      "jorge",
      "thomas",
      "rishi",
      "aaron",
    ];

    // Known female voices (high priority)
    const knownFemaleNames = [
      "carmit", // hebrew female on macOS/iOS — top priority
      "samantha",
      "victoria",
      "karen",
      "moira",
      "tessa",
      "fiona",
      "veena",
      "zira",
      "hazel",
      "susan",
      "kate",
      "serena",
      "allison",
      "ava",
      "female",
      "woman",
    ];

    const isKnownMale = (name: string) => {
      const n = name.toLowerCase();
      return knownMaleNames.some((m) => n.includes(m));
    };
    const isKnownFemale = (name: string) => {
      const n = name.toLowerCase();
      return knownFemaleNames.some((f) => n.includes(f));
    };

    const hebrewVoices = voices.filter(
      (v) =>
        v.lang?.toLowerCase().startsWith("he") ||
        v.lang?.toLowerCase().includes("iw"),
    );

    // 1. Hebrew + known female (e.g. Carmit)
    const hebFemale = hebrewVoices.find((v) => isKnownFemale(v.name));
    if (hebFemale) return hebFemale;

    // 2. Hebrew + NOT known male
    const hebNotMale = hebrewVoices.find((v) => !isKnownMale(v.name));
    if (hebNotMale) return hebNotMale;

    // 3. Any female voice in any language (better than a male Hebrew voice)
    const anyFemale = voices.find((v) => isKnownFemale(v.name));
    if (anyFemale) return anyFemale;

    // 4. Last resort: first Hebrew voice
    return hebrewVoices[0] || null;
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
    // Slightly higher pitch helps generic voices sound more feminine
    utter.pitch = 1.25;

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
      onMouseEnter={() => setShowHint(true)}
      onMouseLeave={() => setShowHint(false)}
      className="relative shrink-0"
    >
      {/* Hint bubble */}
      {showHint && !isSpeaking && (
        <div
          role="tooltip"
          className="pointer-events-none absolute top-full right-0 mt-2 animate-fade-in rounded-2xl rounded-tr-sm bg-card border border-gold/30 px-3 py-2 text-xs shadow-lg w-[180px] z-50"
        >
          <p className="font-medium text-foreground">היי! 👋</p>
          <p className="text-[11px] text-muted-foreground mt-0.5">
            לחצי עליי ואקריא את העמוד
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={handleClick}
        onFocus={() => setShowHint(true)}
        onBlur={() => setShowHint(false)}
        aria-label={isSpeaking ? "עצור הקראה" : "הקרא את תוכן העמוד"}
        className={cn(
          "group relative flex h-12 w-12 items-center justify-center rounded-full",
          "bg-gradient-to-br from-gold/20 to-primary/10 border-2 border-gold/40",
          "shadow-md hover:shadow-lg transition-all duration-300",
          "hover:scale-110 active:scale-95",
          "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/40",
          isSpeaking && "ring-4 ring-gold/50",
        )}
      >
        <img
          src={avatarImage}
          alt="אוואטר של מיכל זיו"
          width={48}
          height={48}
          loading="lazy"
          className="h-full w-full rounded-full object-cover object-top"
        />

        {/* Status badge */}
        <span
          className={cn(
            "absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full",
            "bg-gold text-gold-foreground shadow-md ring-2 ring-card",
            "transition-transform group-hover:scale-110",
          )}
        >
          {isSpeaking ? (
            <Square className="h-2.5 w-2.5 fill-current" />
          ) : (
            <Volume2 className="h-2.5 w-2.5" />
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
