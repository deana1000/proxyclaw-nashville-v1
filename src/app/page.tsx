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
import { faq } from "@/lib/content";

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.canonicalDescription,
    url: siteConfig.url,
    email: siteConfig.email,
    areaServed: [
      { "@type": "City", name: "Nashville", containedInPlace: { "@type": "State", name: "Tennessee" } },
      { "@type": "AdministrativeArea", name: "Middle Tennessee" },
      { "@type": "State", name: "Tennessee" },
    ],
    serviceType: [
      "OpenClaw deployment",
      "Managed OpenClaw setup",
      "AI agent implementation",
      "AI workflow automation",
      "Business automation consulting",
    ],
    knowsAbout: [
      "OpenClaw",
      "AI agents",
      "Workflow automation",
      "OpenClaw security hardening",
      "HubSpot AI integration",
      "Slack AI integration",
      "Salesforce AI integration",
    ],
    founder: {
      "@type": "Person",
      "@id": `${siteConfig.url}/#founder`,
      name: "Susanna Kohly Jacobson",
      jobTitle: "AI Strategist & Co-Founder",
      description:
        "AI Strategist and entrepreneur with 13 years at Google, specializing in AI education programs and automated product strategy for small businesses.",
      sameAs: ["https://www.linkedin.com/in/susanna-kohly-jacobson-76321033/"],
    },
    sameAs: [
      `${siteConfig.url}`,
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: "ProxyClaw Nashville — Managed OpenClaw AI Agent Deployment",
    description: siteConfig.canonicalDescription,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#business` },
    primaryImageOfPage: { "@id": `${siteConfig.url}/#logo` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
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
