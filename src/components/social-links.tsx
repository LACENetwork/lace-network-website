import { LinkedinLogo, TiktokLogo } from "@phosphor-icons/react/dist/ssr";

const links = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@lace_network?_r=1&_t=ZN-98w4gfv5Bjy",
    icon: TiktokLogo,
    note: null as string | null,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/lace-network/",
    icon: LinkedinLogo,
    note: null as string | null,
  },
];

export function SocialLinks({
  className = "",
  variant = "pill",
}: {
  className?: string;
  variant?: "pill" | "icon";
}) {
  if (variant === "icon") {
    return (
      <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
        {links.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line-brass text-bone transition-colors duration-fast hover:border-gold hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-void"
              aria-label={label}
            >
              <Icon size={16} weight="fill" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {links.map(({ label, href, icon: Icon, note }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-line-brass px-4 py-2 text-sm font-medium text-bone transition-colors duration-fast hover:border-gold hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-void"
            aria-label={note ? `${label}: ${note}` : label}
          >
            <Icon size={18} weight="fill" aria-hidden="true" />
            <span>{label}</span>
            {note && (
              <span className="hidden sm:inline text-xs font-normal text-bone-soft/70">
                ({note})
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
