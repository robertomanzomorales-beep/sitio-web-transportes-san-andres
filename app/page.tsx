import Hero from "@/components/home/Hero";
import QuickQuote from "@/components/home/QuickQuote";
import Intro from "@/components/home/Intro";
import ServicesHighlights from "@/components/home/ServicesHighlights";
import Coverage from "@/components/home/Coverage";
import FleetGallery from "@/components/home/FleetGallery";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <QuickQuote />
      <Intro />
      <ServicesHighlights />
      <Coverage />
      <FleetGallery />
      <WhyChooseUs />
      <FinalCTA />
    </main>
  );
}