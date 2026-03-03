import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { WhoThisIsFor } from "@/components/sections/WhoThisIsFor";
import { Examples } from "@/components/sections/Examples";
import { Faq } from "@/components/sections/Faq";
import { BookACall } from "@/components/sections/BookACall";
import { Footer } from "@/components/sections/Footer";
import { siteConfig } from "@/config/site";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    areaServed: ["Nashville", "Middle Tennessee", "Tennessee"],
    serviceType: [
      "OpenClaw deployment",
      "AI agent implementation",
      "AI workflow automation",
    ],
    description: siteConfig.description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <WhatWeDo />
        <Services />
        <HowItWorks />
        <Pricing />
        <WhoThisIsFor />
        <Examples />
        <Faq />
        <BookACall />
      </main>
      <Footer />
    </>
  );
}
