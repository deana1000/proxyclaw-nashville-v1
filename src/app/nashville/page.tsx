import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "AI Agents Nashville TN | Managed OpenClaw Deployment | ProxyClaw",
  description:
    "ProxyClaw is Nashville's only white-glove OpenClaw deployment service. We install, integrate, and manage AI agents for Nashville and Middle Tennessee businesses with 1–100 employees. On-site setup, local team.",
  keywords: [
    "AI agents Nashville",
    "AI automation Nashville TN",
    "OpenClaw Nashville",
    "managed OpenClaw Nashville",
    "AI agent deployment Nashville",
    "business automation Nashville",
    "Nashville AI consulting",
    "Middle Tennessee AI agents",
    "Nashville workflow automation",
    "hire AI agent Nashville",
  ],
  alternates: {
    canonical: "/nashville",
  },
  openGraph: {
    title: "AI Agents Nashville TN | ProxyClaw Nashville",
    description:
      "Nashville's white-glove OpenClaw deployment service. On-site setup for founders, operators, and exec teams across Nashville and Middle Tennessee.",
    type: "website",
    url: `${siteConfig.url}/nashville`,
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${siteConfig.url}/nashville#business`,
  name: "ProxyClaw Nashville",
  description:
    "ProxyClaw Nashville is a managed OpenClaw deployment service that installs, integrates, and maintains AI agents for businesses with 1–100 employees in Nashville and Middle Tennessee. ProxyClaw provides white-glove setup, security hardening, and ongoing managed care so teams get AI-powered automation without technical complexity.",
  url: `${siteConfig.url}/nashville`,
  email: siteConfig.email,
  areaServed: [
    { "@type": "City", name: "Nashville", containedInPlace: { "@type": "State", name: "Tennessee" } },
    { "@type": "City", name: "Franklin", containedInPlace: { "@type": "State", name: "Tennessee" } },
    { "@type": "City", name: "Brentwood", containedInPlace: { "@type": "State", name: "Tennessee" } },
    { "@type": "City", name: "Murfreesboro", containedInPlace: { "@type": "State", name: "Tennessee" } },
    { "@type": "AdministrativeArea", name: "Middle Tennessee" },
  ],
  serviceType: [
    "OpenClaw deployment",
    "AI agent implementation",
    "AI workflow automation",
    "Business automation consulting",
    "Managed AI agent services",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who can help me deploy AI agents in Nashville?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ProxyClaw Nashville is Nashville's only white-glove OpenClaw deployment service. We install, integrate, and maintain AI agents for businesses with 1–100 employees across Nashville and Middle Tennessee. We do on-site setup and provide a local team for ongoing support.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a managed OpenClaw service in Nashville?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ProxyClaw Nashville provides end-to-end managed OpenClaw deployment: infrastructure provisioning, OpenClaw installation, tool integrations, security hardening, and ongoing managed care. We handle everything so Nashville business teams can get the benefits of AI agents without technical complexity.",
      },
    },
    {
      "@type": "Question",
      name: "What AI automation services are available in Nashville TN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ProxyClaw Nashville offers OpenClaw AI agent deployment for revenue and pipeline automation, marketing and communications workflows, operations and support automation, and internal knowledge management. We serve Nashville, Franklin, Brentwood, Murfreesboro, and surrounding Middle Tennessee areas.",
      },
    },
    {
      "@type": "Question",
      name: "How much does AI agent deployment cost in Nashville?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ProxyClaw's Starter package is $3,000 for Nashville and Franklin, which includes one OpenClaw agent deployed on your infrastructure, up to 3 workflow integrations, security hardening, and a 14-day support window. Ongoing managed care is $500/month.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Nashville", item: `${siteConfig.url}/nashville` },
  ],
};

const localFaqs = [
  {
    q: "Who can help me deploy AI agents in Nashville?",
    a: "ProxyClaw Nashville is Nashville's only white-glove OpenClaw deployment service. We install, integrate, and maintain AI agents for businesses with 1–100 employees across Nashville and Middle Tennessee. We do on-site setup and provide a local team for ongoing support.",
  },
  {
    q: "Is there a managed OpenClaw service in Nashville?",
    a: "Yes. ProxyClaw provides end-to-end managed OpenClaw deployment: infrastructure provisioning, installation, tool integrations, security hardening, and ongoing managed care — everything to get your team up and running without technical complexity.",
  },
  {
    q: "What AI automation services are available in Nashville TN?",
    a: "ProxyClaw offers OpenClaw AI agent deployment for revenue and pipeline automation, marketing and comms workflows, operations and support automation, and internal knowledge management. We serve Nashville, Franklin, Brentwood, Murfreesboro, and surrounding Middle Tennessee.",
  },
  {
    q: "How much does AI agent deployment cost in Nashville?",
    a: "Our Starter package is $3,000 for Nashville and Franklin — one OpenClaw agent, up to 3 workflow integrations, security hardening, and a 14-day support window. Ongoing managed care is $500/month.",
  },
];

const areas = [
  "Nashville",
  "Franklin",
  "Brentwood",
  "Murfreesboro",
  "Smyrna",
  "Hendersonville",
  "Mt. Juliet",
  "Nolensville",
  "Gallatin",
  "Spring Hill",
];

const reasons = [
  {
    title: "Local team, on-site setup",
    body: "We come to your office. Every OpenClaw deployment includes hands-on, in-person setup with your team in Nashville and Middle Tennessee. No remote-only vendors.",
  },
  {
    title: "OpenClaw specialists",
    body: "OpenClaw is one of the fastest-growing open-source AI frameworks in history. We specialize in it — not as a side offering, but as our entire business. You get a team who lives and breathes this technology.",
  },
  {
    title: "Built for 1–100 employee teams",
    body: "We don't serve enterprise. We serve the founders, operators, and exec teams running Nashville businesses who need leverage without adding headcount and without a 6-month IT project.",
  },
  {
    title: "Fixed pricing, clear scope",
    body: "No hourly billing. No scope creep surprises. Every engagement starts with a free strategy call and a fixed quote before any work begins.",
  },
];

export default function NashvillePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <header className="bg-white border-b border-gray-100 px-6 py-4">
        <Link href="/" className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors">
          ← ProxyClaw Nashville
        </Link>
      </header>

      <main>
        {/* Hero */}
        <section className="bg-gray-950 text-white px-6 py-20 md:py-28">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium text-amber-400 mb-4 uppercase tracking-wide">
              Nashville, TN · Middle Tennessee · On-site setup
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              AI Agents for Nashville Businesses.
              <br />
              <span className="text-amber-400">Deployed On-Site. Managed Locally.</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl">
              ProxyClaw Nashville is Middle Tennessee's only white-glove OpenClaw deployment service. We install, integrate, and maintain AI agents for founders, operators, and exec teams with 1–100 employees — so your team gets AI-powered automation without the technical complexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#book"
                className="inline-block bg-amber-400 text-gray-950 font-semibold px-6 py-3 rounded-lg hover:bg-amber-300 transition-colors text-center"
              >
                Book a free strategy call
              </Link>
              <Link
                href="/#pricing"
                className="inline-block border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:border-white/60 transition-colors text-center"
              >
                See pricing
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-500">Limited onboarding slots each month.</p>
          </div>
        </section>

        {/* What is ProxyClaw Nashville */}
        <section className="bg-white px-6 py-16 md:py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              What is ProxyClaw Nashville?
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              ProxyClaw Nashville is a managed OpenClaw deployment service that installs, integrates, and maintains AI agents for businesses with 1–100 employees in Nashville and Middle Tennessee. We provide white-glove setup, security hardening, and ongoing managed care so teams get AI-powered automation without technical complexity.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              OpenClaw is one of the fastest-growing open-source AI frameworks ever built, crossing 100,000 GitHub stars in early 2026. The technology is powerful — but setting it up correctly, connecting your tools, and keeping it secure is a technical project most business teams don't have time for.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We do that work. You get a deployed, working AI agent that runs inside your existing tools — Slack, HubSpot, Google Workspace, Salesforce, Airtable — operating 24/7 on the workflows that matter most to your business.
            </p>
          </div>
        </section>

        {/* Why Nashville businesses choose ProxyClaw */}
        <section className="bg-gray-50 px-6 py-16 md:py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
              Why Nashville businesses choose ProxyClaw
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {reasons.map((r) => (
                <div key={r.title} className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{r.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas Served */}
        <section className="bg-white px-6 py-16 md:py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Areas we serve in Middle Tennessee
            </h2>
            <p className="text-gray-600 mb-8">
              We provide on-site OpenClaw deployment and AI agent setup across Nashville and surrounding communities. Our Starter package covers Nashville and Franklin. Reach out for other areas — we'll tell you what's possible.
            </p>
            <div className="flex flex-wrap gap-3">
              {areas.map((area) => (
                <span
                  key={area}
                  className="bg-gray-100 text-gray-800 text-sm font-medium px-4 py-2 rounded-full"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Nashville FAQ */}
        <section className="bg-gray-50 px-6 py-16 md:py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
              Common questions from Nashville business owners
            </h2>
            <div className="space-y-8">
              {localFaqs.map((item) => (
                <div key={item.q}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-950 text-white px-6 py-16 md:py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to deploy your first AI agent in Nashville?
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Book a free 30-minute strategy call. We'll come prepared with a practical first automation and a clear plan — no technical knowledge required on your end.
            </p>
            <Link
              href="/#book"
              className="inline-block bg-amber-400 text-gray-950 font-semibold px-8 py-4 rounded-lg hover:bg-amber-300 transition-colors text-lg"
            >
              Book a free strategy call
            </Link>
            <p className="mt-4 text-sm text-gray-500">Limited onboarding slots each month.</p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-500 px-6 py-8 text-center text-sm">
        <p>© ProxyClaw Nashville · On-site AI automation in Nashville and Middle Tennessee</p>
        <div className="mt-2 flex justify-center gap-4">
          <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms</Link>
        </div>
      </footer>
    </>
  );
}
