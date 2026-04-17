/* Real brand logos for workshop tool badges — 16×16 */

import claudeLogo from "@/assets/tool-logos/claude.svg";
import chatgptLogo from "@/assets/tool-logos/chatgpt.svg";
import geminiLogo from "@/assets/tool-logos/gemini.svg";
import copilotLogo from "@/assets/tool-logos/copilot.svg";
import canvaLogo from "@/assets/tool-logos/canva.svg";
import googleClassroomLogo from "@/assets/tool-logos/google-classroom.svg";
import googleDocsLogo from "@/assets/tool-logos/google-docs.svg";
import googleSheetsLogo from "@/assets/tool-logos/google-sheets.svg";
import googleFormsLogo from "@/assets/tool-logos/google-forms.svg";
import googleSlidesLogo from "@/assets/tool-logos/google-slides.svg";
import googleDriveLogo from "@/assets/tool-logos/google-drive.svg";
import googleMeetLogo from "@/assets/tool-logos/google-meet.svg";
import gmailLogo from "@/assets/tool-logos/gmail.svg";
import googleKeepLogo from "@/assets/tool-logos/google-keep.svg";
import notebookLMLogo from "@/assets/tool-logos/notebooklm.svg";
import kahootLogo from "@/assets/tool-logos/kahoot.svg";
import sunoLogo from "@/assets/tool-logos/suno.svg";
import moodleLogo from "@/assets/tool-logos/moodle.svg";
import lovableLogo from "@/assets/logo.svg";

const S = 16;

/** Inline SVG fallback for tools without a downloadable logo */
function inlineSvg(children: React.ReactNode) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={S} height={S} viewBox={`0 0 ${S} ${S}`} className="shrink-0 rounded">
      {children}
    </svg>
  );
}

const inlineLogos: Record<string, React.ReactNode> = {
  Gamma: inlineSvg(
    <>
      <rect width="16" height="16" rx="3" fill="#8b5cf6" />
      <text x="8" y="12" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold" fontFamily="serif">γ</text>
    </>
  ),
  Base44: inlineSvg(
    <>
      <rect width="16" height="16" rx="3" fill="#1e293b" />
      <text x="8" y="11.5" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold" fontFamily="monospace">44</text>
    </>
  ),
  "Google Sites": inlineSvg(
    <>
      <rect width="16" height="16" rx="3" fill="#4285f4" />
      <rect x="3" y="3" width="10" height="10" rx="1.5" stroke="#fff" strokeWidth="1.2" fill="none" />
      <line x1="3" y1="6" x2="13" y2="6" stroke="#fff" strokeWidth="1" />
      <line x1="7" y1="6" x2="7" y2="13" stroke="#fff" strokeWidth="1" />
    </>
  ),
};

const imgLogos: Record<string, string> = {
  Claude: claudeLogo,
  ChatGPT: chatgptLogo,
  Gemini: geminiLogo,
  Copilot: copilotLogo,
  Canva: canvaLogo,
  Lovable: lovableLogo,
  "Google Classroom": googleClassroomLogo,
  "Google Docs": googleDocsLogo,
  "Google Sheets": googleSheetsLogo,
  "Google Forms": googleFormsLogo,
  "Google Slides": googleSlidesLogo,
  "Google Drive": googleDriveLogo,
  "Google Meet": googleMeetLogo,
  Gmail: gmailLogo,
  "Google Keep": googleKeepLogo,
  NotebookLM: notebookLMLogo,
  Kahoot: kahootLogo,
  Suno: sunoLogo,
  Moodle: moodleLogo,
};

export function ToolLogo({ name }: { name: string }) {
  if (inlineLogos[name]) return <>{inlineLogos[name]}</>;
  const src = imgLogos[name];
  if (src) return <img src={src} alt={name} width={S} height={S} className="shrink-0" />;
  return null;
}
