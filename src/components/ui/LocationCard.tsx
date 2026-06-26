import { Send } from "lucide-react";

export interface LocationCardProps {
  imageUrl: string;
  location: string;
  address: string;
  href: string;
  tag?: string;
}

/** Full-bleed location card: iconic image background, hover lift, and a
 *  "Directions" button that swaps to a Send icon on hover (CSS only). */
export function LocationCard({
  imageUrl,
  location,
  address,
  href,
  tag,
}: LocationCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-sm transition-transform duration-300 hover:-translate-y-1"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl}
        alt={location}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
      {tag && (
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-black backdrop-blur">
          {tag}
        </span>
      )}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
        <div className="min-w-0">
          <h3 className="text-xl font-semibold text-white">{location}</h3>
          <p className="mt-0.5 truncate text-sm text-white/75">{address}</p>
        </div>
        <span className="relative flex h-10 w-32 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white text-sm font-medium text-black">
          <span className="absolute transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0">
            Directions
          </span>
          <span className="absolute translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <Send size={16} />
          </span>
        </span>
      </div>
    </a>
  );
}
