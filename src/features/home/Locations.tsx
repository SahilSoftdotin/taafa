import { Container } from "@/components/ui/Aurora";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LocationCard } from "@/components/ui/LocationCard";
import { Reveal } from "@/components/ui/Reveal";
import { locations } from "@/content/company";

export function Locations() {
  const headOffice = locations.find((l) => l.primary) ?? locations[0];
  const mapQuery = encodeURIComponent(`${headOffice.name} ${headOffice.address}`);

  return (
    <section id="locations" className="relative py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Where to find us"
          title={
            <>
              Local offices across{" "}
              <span className="text-gradient">the region</span>
            </>
          }
          intro="Drop in to our Toukley or Newcastle office, or meet remotely — whatever suits you best."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {locations.map((loc, i) => (
            <Reveal key={loc.name} delay={i}>
              <LocationCard
                imageUrl={loc.image ?? "/images/locations/toukley.jpg"}
                location={loc.name}
                address={loc.address}
                href={loc.mapUrl}
                tag={loc.primary ? "Head office" : "Office"}
              />
            </Reveal>
          ))}

          <Reveal delay={2}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-sm">
              <iframe
                title={`${headOffice.name} office map`}
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
