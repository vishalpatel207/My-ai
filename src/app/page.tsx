import dynamic from "next/dynamic";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const HeroSection = dynamic(() => import("./(withheader-footer)/HeroSection"));
const PixelBloomSection = dynamic(() => import("./(withheader-footer)/PixelBloom"));
const EngineeringIntelligent = dynamic(() => import("./(withheader-footer)/Engineering Intelligent"));
const BenifitDrive = dynamic(() => import("./(withheader-footer)/Benifit Drive"));
const CraftingInnovative = dynamic(() => import("./(withheader-footer)/Crafting Innovative"));
const ValueDriven = dynamic(() => import("./(withheader-footer)/Value Driven"));
const FrequentlyAsked = dynamic(() => import("./(withheader-footer)/FrequentlyAsked"));
const SatisfiedClients = dynamic(() => import("./(withheader-footer)/Satisfied Clients"));
const ContactUs = dynamic(() => import("./(withheader-footer)/Contact Us"));

export default function Home() {
  return (
    <main>
      <ScrollFadeIn><HeroSection /></ScrollFadeIn>
      <ScrollFadeIn><PixelBloomSection /></ScrollFadeIn>
      <ScrollFadeIn><EngineeringIntelligent /></ScrollFadeIn>
      <ScrollFadeIn><BenifitDrive /></ScrollFadeIn>
      <ScrollFadeIn><CraftingInnovative /></ScrollFadeIn>
      <ScrollFadeIn><ValueDriven /></ScrollFadeIn>
      <ScrollFadeIn><FrequentlyAsked /></ScrollFadeIn>
      <ScrollFadeIn><SatisfiedClients /></ScrollFadeIn>
      <ScrollFadeIn><ContactUs /></ScrollFadeIn>
    </main>
  );
}
