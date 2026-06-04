import { Facebook } from "@/components/icons/Facebook";
import { siteConfig } from "@/lib/site-data";

type SocialLinksProps = {
  variant?: "default" | "light";
  className?: string;
};

export default function SocialLinks({ variant = "default", className = "" }: SocialLinksProps) {
  const isLight = variant === "light";

  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      <a
        href={siteConfig.social.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow Bright Future Admission on Facebook"
        className={
          isLight
            ? "flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-[#1877F2] hover:text-white"
            : "flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold-light text-[#1877F2] transition hover:bg-[#1877F2] hover:text-white"
        }
      >
        <Facebook className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
      </a>
    </div>
  );
}
