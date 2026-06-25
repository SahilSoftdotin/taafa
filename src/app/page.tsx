import { Hero } from "@/features/home/Hero";
import { TrustBar } from "@/features/home/TrustBar";
import { ServicesEcosystem } from "@/features/home/ServicesEcosystem";
import { CommandCenter } from "@/features/home/CommandCenter";
import { WhyTaaf } from "@/features/home/WhyTaaf";
import { SuccessJourney } from "@/features/home/SuccessJourney";
import { Locations } from "@/features/home/Locations";
import { Reviews } from "@/features/home/Reviews";
import { InsightsHub } from "@/features/home/InsightsHub";
import { BookConsultation } from "@/features/home/BookConsultation";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesEcosystem />
      <CommandCenter />
      <WhyTaaf />
      <SuccessJourney />
      <Locations />
      <Reviews />
      <InsightsHub />
      <BookConsultation />
    </>
  );
}
