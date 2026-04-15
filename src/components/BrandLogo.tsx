type BrandLogoVariant = "header" | "hero" | "footer";
type BrandLogoTheme = "light" | "dark";

interface BrandLogoProps {
  className?: string;
  theme?: BrandLogoTheme;
  variant?: BrandLogoVariant;
}

const variantStyles: Record<
  BrandLogoVariant,
  {
    line: string;
    name: string;
    rail: string;
    shell: string;
    subtitle: string;
  }
> = {
  header: {
    shell: "gap-1.5",
    rail: "h-6 w-3",
    name: "text-sm sm:text-base",
    line: "hidden",
    subtitle: "hidden",
  },
  hero: {
    shell: "gap-2 sm:gap-3 lg:gap-4",
    rail: "h-12 w-4 sm:h-14 sm:w-5 lg:h-16 lg:w-6",
    name: "text-3xl sm:text-4xl lg:text-5xl",
    line: "mt-2 h-px",
    subtitle: "mt-1 text-xs sm:text-sm lg:text-base",
  },
  footer: {
    shell: "gap-2",
    rail: "h-10 w-4 sm:h-12 sm:w-5",
    name: "text-xl sm:text-2xl",
    line: "mt-1.5 h-px",
    subtitle: "mt-1 text-xs sm:text-sm",
  },
};

const themeStyles: Record<
  BrandLogoTheme,
  {
    line: string;
    name: string;
    rail: string;
    subtitle: string;
  }
> = {
  light: {
    name: "text-primary",
    subtitle: "text-gold",
    rail: "border-gold/70",
    line: "bg-gold/70",
  },
  dark: {
    name: "text-primary-foreground",
    subtitle: "text-gold",
    rail: "border-gold/70",
    line: "bg-gold/70",
  },
};

export function BrandLogo({ className = "", theme = "light", variant = "hero" }: BrandLogoProps) {
  const size = variantStyles[variant];
  const palette = themeStyles[theme];

  return (
    <div
      dir="rtl"
      lang="he"
      aria-label="מיכל זיו — מתמטיקה מחוץ לסוגריים"
      className={`inline-flex items-center justify-center ${size.shell} ${className}`.trim()}
    >
      <span
        aria-hidden="true"
        className={`${size.rail} rounded-full border-y border-r ${palette.rail}`}
      />
      <div className="text-center leading-none">
        <div className={`font-display whitespace-nowrap font-bold ${size.name} ${palette.name}`}>
          מיכל זיו
        </div>
        {variant !== "header" ? (
          <>
            <div className={`${size.line} w-full ${palette.line}`} />
            <div className={`whitespace-nowrap font-medium ${size.subtitle} ${palette.subtitle}`}>
              מתמטיקה מחוץ לסוגריים
            </div>
          </>
        ) : null}
      </div>
      <span
        aria-hidden="true"
        className={`${size.rail} rounded-full border-y border-l ${palette.rail}`}
      />
    </div>
  );
}
