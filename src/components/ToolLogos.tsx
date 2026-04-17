/* Brand-style SVG logos for workshop tool badges – 16×16 */

const S = 16;

function svg(children: React.ReactNode, bg?: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={S} height={S} viewBox={`0 0 ${S} ${S}`} className="shrink-0 rounded" style={bg ? { backgroundColor: bg } : undefined}>
      {children}
    </svg>
  );
}

const logos: Record<string, React.ReactNode> = {
  Claude: svg(
    <>
      <rect width="16" height="16" rx="3" fill="#D97706" />
      <path d="M4 11 8 4l4 7" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  ChatGPT: svg(
    <>
      <rect width="16" height="16" rx="3" fill="#10a37f" />
      <path d="M8 3v10M4.5 6.5 8 3l3.5 3.5M4.5 9.5 8 13l3.5-3.5" stroke="#fff" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  Gemini: svg(
    <>
      <rect width="16" height="16" rx="3" fill="#1a73e8" />
      <path d="M8 2C8 8 8 8 2 8c6 0 6 0 6 6 0-6 0-6 6-6-6 0-6 0-6-6Z" fill="#fff" />
    </>
  ),
  Copilot: svg(
    <>
      <rect width="16" height="16" rx="3" fill="#6366f1" />
      <circle cx="8" cy="7" r="3.5" stroke="#fff" strokeWidth="1.4" fill="none" />
      <path d="M5 10v2.5a3 3 0 0 0 6 0V10" stroke="#fff" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </>
  ),
  Gamma: svg(
    <>
      <rect width="16" height="16" rx="3" fill="#8b5cf6" />
      <text x="8" y="12" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold" fontFamily="serif">γ</text>
    </>
  ),
  Canva: svg(
    <>
      <rect width="16" height="16" rx="3" fill="#00c4cc" />
      <text x="8" y="12" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">C</text>
    </>
  ),
  Lovable: svg(
    <>
      <rect width="16" height="16" rx="3" fill="#ec4899" />
      <path d="M8 13 4.5 9.2a2.4 2.4 0 0 1 3.5-3.3l0 0 0 0a2.4 2.4 0 0 1 3.5 3.3Z" fill="#fff" />
    </>
  ),
  Base44: svg(
    <>
      <rect width="16" height="16" rx="3" fill="#1e293b" />
      <text x="8" y="11.5" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold" fontFamily="monospace">44</text>
    </>
  ),
  // --- Google products share the 4-color motif ---
  "Google Classroom": svg(
    <>
      <rect width="16" height="16" rx="3" fill="#0f9d58" />
      <circle cx="8" cy="6" r="2" fill="#fff" />
      <path d="M4 13c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="#fff" strokeWidth="1.3" fill="none" />
    </>
  ),
  "Google Docs": svg(
    <>
      <rect width="16" height="16" rx="3" fill="#4285f4" />
      <rect x="4" y="3" width="8" height="10" rx="1" fill="#fff" />
      <line x1="6" y1="6" x2="10" y2="6" stroke="#4285f4" strokeWidth="1" />
      <line x1="6" y1="8" x2="10" y2="8" stroke="#4285f4" strokeWidth="1" />
      <line x1="6" y1="10" x2="9" y2="10" stroke="#4285f4" strokeWidth="1" />
    </>
  ),
  "Google Sheets": svg(
    <>
      <rect width="16" height="16" rx="3" fill="#0f9d58" />
      <rect x="3.5" y="3" width="9" height="10" rx="1" fill="#fff" />
      <line x1="7" y1="3" x2="7" y2="13" stroke="#0f9d58" strokeWidth="0.8" />
      <line x1="3.5" y1="6.5" x2="12.5" y2="6.5" stroke="#0f9d58" strokeWidth="0.8" />
      <line x1="3.5" y1="9.5" x2="12.5" y2="9.5" stroke="#0f9d58" strokeWidth="0.8" />
    </>
  ),
  "Google Forms": svg(
    <>
      <rect width="16" height="16" rx="3" fill="#7b1fa2" />
      <rect x="4" y="3" width="8" height="10" rx="1" fill="#fff" />
      <circle cx="6.5" cy="6" r="1" fill="#7b1fa2" />
      <line x1="8.5" y1="6" x2="10.5" y2="6" stroke="#7b1fa2" strokeWidth="1" />
      <circle cx="6.5" cy="9" r="1" fill="#7b1fa2" />
      <line x1="8.5" y1="9" x2="10.5" y2="9" stroke="#7b1fa2" strokeWidth="1" />
    </>
  ),
  "Google Slides": svg(
    <>
      <rect width="16" height="16" rx="3" fill="#f4b400" />
      <rect x="3.5" y="3.5" width="9" height="7" rx="1" fill="#fff" />
      <rect x="6.5" y="10.5" width="3" height="1" fill="#fff" />
      <rect x="5" y="11.5" width="6" height="1" rx="0.5" fill="#fff" />
    </>
  ),
  "Google Drive": svg(
    <>
      <rect width="16" height="16" rx="3" fill="#4285f4" />
      <path d="M3 11 6.5 4h3L6 11Z" fill="#0f9d58" />
      <path d="M6.5 4h3l3.5 7h-3Z" fill="#f4b400" />
      <path d="M6 11h7l-1.5 2.5H4.5Z" fill="#4285f4" />
    </>
  ),
  "Google Meet": svg(
    <>
      <rect width="16" height="16" rx="3" fill="#00897b" />
      <rect x="3" y="5" width="7" height="6" rx="1" fill="#fff" />
      <path d="M10 7l3-2v6l-3-2Z" fill="#fff" />
    </>
  ),
  Gmail: svg(
    <>
      <rect width="16" height="16" rx="3" fill="#ea4335" />
      <rect x="2.5" y="4" width="11" height="8" rx="1" fill="#fff" />
      <path d="M3 4.5 8 9l5-4.5" stroke="#ea4335" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
    </>
  ),
  "Google Keep": svg(
    <>
      <rect width="16" height="16" rx="3" fill="#fbbc04" />
      <rect x="4.5" y="2.5" width="7" height="9" rx="1" fill="#fff" />
      <path d="M6.5 11.5v2l1.5-1 1.5 1v-2" fill="#fff" />
    </>
  ),
  "Google Sites": svg(
    <>
      <rect width="16" height="16" rx="3" fill="#4285f4" />
      <rect x="3" y="3" width="10" height="10" rx="1.5" stroke="#fff" strokeWidth="1.2" fill="none" />
      <line x1="3" y1="6" x2="13" y2="6" stroke="#fff" strokeWidth="1" />
      <line x1="7" y1="6" x2="7" y2="13" stroke="#fff" strokeWidth="1" />
    </>
  ),
  NotebookLM: svg(
    <>
      <rect width="16" height="16" rx="3" fill="#1a73e8" />
      <rect x="4" y="2.5" width="8" height="11" rx="1.5" stroke="#fff" strokeWidth="1.2" fill="none" />
      <line x1="6.5" y1="5.5" x2="10" y2="5.5" stroke="#fff" strokeWidth="0.9" />
      <line x1="6.5" y1="7.5" x2="10" y2="7.5" stroke="#fff" strokeWidth="0.9" />
      <line x1="6.5" y1="9.5" x2="9" y2="9.5" stroke="#fff" strokeWidth="0.9" />
    </>
  ),
  Kahoot: svg(
    <>
      <rect width="16" height="16" rx="3" fill="#46178f" />
      <text x="8" y="12" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">K!</text>
    </>
  ),
  Suno: svg(
    <>
      <rect width="16" height="16" rx="3" fill="#1db954" />
      <path d="M5 10V7M8 11V5M11 10V7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  Moodle: svg(
    <>
      <rect width="16" height="16" rx="3" fill="#f98012" />
      <text x="8" y="12" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">M</text>
    </>
  ),
};

export function ToolLogo({ name }: { name: string }) {
  return <>{logos[name] ?? null}</>;
}