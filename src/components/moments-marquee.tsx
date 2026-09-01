import Image from "next/image";

const rowOne = [
  { src: "/gallery/marquee-01.jpg", alt: "LACE Network apprenticeship workshop session" },
  { src: "/gallery/marquee-02.jpg", alt: "LACE Network team at a school talk" },
  { src: "/gallery/marquee-03.jpg", alt: "LACE Network speaker addressing a school assembly" },
  { src: "/gallery/marquee-04.jpg", alt: "Apprentices at a LACE Network social event" },
  { src: "/gallery/marquee-05.jpg", alt: "LACE Network stand at a careers fair" },
  { src: "/gallery/marquee-06.jpg", alt: "Students learning about employers offering apprenticeships" },
];

const rowTwo = [
  { src: "/gallery/marquee-07.jpg", alt: "LACE Network speaker presenting to apprentices" },
  { src: "/gallery/marquee-08.jpg", alt: "LACE Network x Weightmans CV workshop" },
  { src: "/gallery/marquee-09.jpg", alt: "LACE Network x Weightmans event space" },
  { src: "/gallery/marquee-10.jpg", alt: "LACE Network x Cisco apprentice panel discussion" },
  { src: "/gallery/marquee-11.jpg", alt: "LACE Network x Cisco CV workshop" },
  { src: "/gallery/marquee-12.jpg", alt: "LACE Network x Cisco event registration" },
];

function MarqueeRow({
  images,
  direction,
}: {
  images: { src: string; alt: string }[];
  direction: "left" | "right";
}) {
  const doubled = [...images, ...images];
  return (
    <div className="flex w-max gap-4 sm:gap-6">
      <div
        className={`flex shrink-0 gap-4 sm:gap-6 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {doubled.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="relative h-40 w-56 shrink-0 overflow-hidden rounded-xl border border-line-brass/30 sm:h-52 sm:w-72"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              loading="eager"
              className="object-cover"
              sizes="(max-width: 640px) 224px, 288px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function MomentsMarquee() {
  return (
    <div
      className="space-y-4 overflow-hidden sm:space-y-6 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      aria-hidden="true"
    >
      <MarqueeRow images={rowOne} direction="left" />
      <MarqueeRow images={rowTwo} direction="right" />
    </div>
  );
}
