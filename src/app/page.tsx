import { Hero } from "@/features/home/Hero";
import { TrustBar } from "@/features/home/TrustBar";
import { PartnersMarquee } from "@/features/home/PartnersMarquee";
import { ServicesEcosystem } from "@/features/home/ServicesEcosystem";
import { VideoShowcase } from "@/features/home/VideoShowcase";
import { CommandCenter } from "@/features/home/CommandCenter";
import { WhyTaaf } from "@/features/home/WhyTaaf";
import { SuccessJourney } from "@/features/home/SuccessJourney";
import { TeamShowcase } from "@/features/home/TeamShowcase";
import { Locations } from "@/features/home/Locations";
import { Reviews } from "@/features/home/Reviews";
import { InsightsHub } from "@/features/home/InsightsHub";
import { BookConsultation } from "@/features/home/BookConsultation";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <PartnersMarquee />
      <ServicesEcosystem />
      <VideoShowcase />
      <CommandCenter />
      <WhyTaaf />
      <SuccessJourney />
      <TeamShowcase />
      <Locations />
      <Reviews />
      <InsightsHub />
      <BookConsultation />
    </>
  );
}
