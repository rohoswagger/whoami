import Image from "next/image";

// One framing for every piece of evidence on the page: hairline border, soft
// corners, mono caption. Keeps screenshots from four different tools reading as
// one set rather than four pasted rectangles.
export default function Figure({
  src,
  alt,
  width,
  height,
  caption,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={`m-0 ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="w-full rounded-xl border border-gray-200"
      />
      <figcaption className="mt-2.5 font-mono text-[11px] leading-relaxed text-gray-400">
        {caption}
      </figcaption>
    </figure>
  );
}
