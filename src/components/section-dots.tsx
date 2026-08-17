export function SectionDots({
  className = "",
  position = "top",
}: {
  className?: string;
  position?: "top" | "bottom";
}) {
  const mask =
    position === "top"
      ? "[mask-image:radial-gradient(ellipse_60%_100%_at_50%_0%,black,transparent)] top-0"
      : "[mask-image:radial-gradient(ellipse_60%_100%_at_50%_100%,black,transparent)] bottom-0";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 z-0 h-40 sm:h-56 [background-image:radial-gradient(circle,rgba(176,141,87,0.18)_1px,transparent_1px)] [background-size:26px_26px] ${mask} ${className}`}
    />
  );
}
