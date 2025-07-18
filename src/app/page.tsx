import HeroSection from "./(withheader-footer)/HeroSection";
import PixelBloomSection from "./(withheader-footer)/PixelBloom";
import EngineeringIntelligent from "./(withheader-footer)/Engineering Intelligent";
import BenifitDrive from "./(withheader-footer)/Benifit Drive";
import CraftingInnovative from "./(withheader-footer)/Crafting Innovative";
import ValueDriven from "./(withheader-footer)/Value Driven";
import FrequentlyAsked from "./(withheader-footer)/FrequentlyAsked";
import SatisfiedClients from "./(withheader-footer)/Satisfied Clients";
import ContactUs from "./(withheader-footer)/Contact Us";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PixelBloomSection />
      <EngineeringIntelligent />
      <BenifitDrive />
      <CraftingInnovative />
      <ValueDriven />
      <FrequentlyAsked />
      <SatisfiedClients />
      <ContactUs />
    </main>
  );
}
