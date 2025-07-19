import Image from "next/image";
import Button, { BookCallButton, ContactUsButton } from "@/components/ui/Button";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const pricingPlans = [
  {
    title: "Ideal for Small Businesses and Startups",
    price: "$ 3,000/mo",
    features: [
      "Full suite/feature options for AI models.",
      "Handles small-medium scale workloads.",
      "Standard AI-driven support.",
      "Integration with a limited number of 3rd party tools.",
    ],
    badge: "Basic",
  },
  {
    title: "Great for Scaling Businesses & Ventures",
    price: "$ 8,000/mo",
    features: [
      "Full suite/feature options tailored to specific business needs.",
      "Handles large-scale workloads and advanced processing.",
      "High-priority AI-driven support.",
      "Integration with a wide range of 3rd party tools.",
    ],
    badge: "Premium",
  },
];

export default function ValueDriven() {
  return (
    <section className="w-full bg-gray-50 flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 rounded-3xl mb-26">
      <div className="max-w-6xl w-full mx-auto">
        <ScrollFadeIn>
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <span className="flex items-center border bg-white border-gray-200 text-black text-sm font-medium px-6 py-3 rounded-full">
              <Image src="/icon.svg" alt="Logo" width={32} height={32} />
              Pricing Plans
            </span>
          </div>
        </ScrollFadeIn>
        <ScrollFadeIn>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold text-black leading-tight">Value-Driven</h1>
              <h2 className="text-3xl md:text-5xl font-medium text-gray-400 leading-tight">Pricing</h2>
            </div>
            <BookCallButton />
          </div>
        </ScrollFadeIn>
        {/* Pricing Cards */}
        {pricingPlans.map((plan, idx) => (
          <ScrollFadeIn key={plan.title} yOffset={30} delay={0.1 * idx}>
            <div
              className="bg-white rounded-2xl border border-gray-200 -sm flex flex-col p-6 relative"
            >
              <Image src="/sparkles.svg" alt="Sparkle" width={28} height={28} className="mb-5" />
              <span className="absolute top-6 right-6 bg-white text-black text-xs font-medium px-3 py-1 rounded-full border border-gray-300">
                {plan.badge}
              </span>
              <h3 className="text-2xl font-medium text-black mb-2 leading-snug">{plan.title}</h3>
              <div className="flex items-end mb-4">
                <span className="text-3xl sm:text-4xl font-medium text-black mr-1">
                  {plan.price.split("/")[0]}
                </span>
                <span className="text-base text-gray-400 font-medium mb-1">/mo</span>
              </div>
              <ul className="flex flex-col gap-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700 text-base">
                    <Image src="/check-mark.svg" alt="Check" width={20} height={20} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="black" size="lg" className="w-full flex items-center justify-center gap-2">
                <Image src="/Rocket Launch.svg" alt="Get Started" width={20} height={20} />
                Get Started
              </Button>
            </div>
          </ScrollFadeIn>
        ))}
        <ScrollFadeIn>
          <span className="text-base text-gray-700 font-medium text-center sm:text-left">
            Need a custom solution for your needs?
          </span>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto sm:justify-end">
            <BookCallButton />
            <ContactUsButton />
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
