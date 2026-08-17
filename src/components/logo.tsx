import Image from "next/image";
import Link from "next/link";

export function Logo({
  className = "",
  imgClassName = "h-9 w-auto sm:h-10",
}: {
  className?: string;
  imgClassName?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="LACE Network home"
      className={`inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-void rounded-sm ${className}`}
    >
      <Image
        src="/lace-logo-white.png"
        alt="LACE Network"
        width={1304}
        height={460}
        priority
        className={imgClassName}
      />
    </Link>
  );
}
