import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Blog | OpenClaw & AI Automation Guides | ProxyClaw Nashville",
  description:
    "Practical guides, case studies, and deep dives on OpenClaw deployment, AI agents for small businesses, and workflow automation in Nashville and Middle Tennessee.",
  keywords: [
    "OpenClaw guides",
    "AI automation blog",
    "OpenClaw for business",
    "AI agents small business",
    "OpenClaw setup guide",
    "business automation Nashville",
    "OpenClaw tutorials",
    "workflow automation guides",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | OpenClaw & AI Automation Guides | ProxyClaw Nashville",
    description:
      "Practical guides and deep dives on OpenClaw deployment, AI agents for small businesses, and workflow automation from the ProxyClaw Nashville team.",
    type: "website",
    url: `${siteConfig.url}/blog`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
  ],
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "ProxyClaw Nashville Blog",
  description:
    "Practical guides, case studies, and deep dives on OpenClaw deployment, AI agents for small businesses, and workflow automation.",
  url: `${siteConfig.url}/blog`,
  publisher: {
    "@type": "Organization",
    name: "ProxyClaw Nashville",
    url: siteConfig.url,
  },
};

const publishedPosts = [
  {
    slug: "what-is-openclaw",
    title: "What Is OpenClaw? A Business Owner's Guide",
    description:
      "OpenClaw crossed 100,000 GitHub stars in early 2026. Here's what it actually is, what it can do for your business, and how it's different from ChatGPT — no tech background required.",
    keyword: "OpenClaw for business",
    tag: "Guide",
    publishedAt: "March 5, 2026",
  },
  {
    slug: "openclaw-vs-chatgpt",
    title: "OpenClaw vs ChatGPT: Why Agents Beat Chatbots",
    description:
      "ChatGPT is a chat interface. OpenClaw is an operator. The difference determines whether AI saves your team hours or just answers questions — we break it down clearly.",
    keyword: "OpenClaw vs ChatGPT",
    tag: "Comparison",
    publishedAt: "March 5, 2026",
  },
];

// Upcoming posts seeded from the 90-day content calendar
const upcomingPosts = [
  {
    title: "5 Workflows Every Nashville Founder Should Automate",
    description:
      "From call summaries to lead triage to weekly ops reporting — these are the five high-leverage automations we deploy first for almost every Nashville business client.",
    keyword: "AI automation Nashville",
    tag: "Nashville",
    comingSoon: true,
  },
  {
    title: "The True Cost of DIY OpenClaw Setup",
    description:
      "OpenClaw is open-source and free to download. But between infrastructure, integrations, security hardening, and ongoing maintenance — DIY deployment has a real cost. We break it down honestly.",
    keyword: "OpenClaw setup cost",
    tag: "Cost Analysis",
    comingSoon: true,
  },
  {
    title: "OpenClaw + HubSpot: Automated Pipeline Management",
    description:
      "Your AI agent can log call summaries, draft follow-up emails, flag stale deals, and fill missing fields in HubSpot — automatically. Here's how we wire it up.",
    keyword: "OpenClaw HubSpot integration",
    tag: "Integration",
    comingSoon: true,
  },
  {
    title: "How We Secured an OpenClaw Instance (And Why It Matters)",
    description:
      "Security hardening isn't optional when an AI agent has access to your CRM, inbox, and internal tools. Here's the exact checklist we use for every ProxyClaw deployment.",
    keyword: "OpenClaw security",
    tag: "Security",
    comingSoon: true,
  },
];

const tagColors: Record<string, string> = {
  Guide: "bg-blue-100 text-blue-800",
  Comparison: "bg-purple-100 text-purple-800",
  Nashville: "bg-amber-100 text-amber-800",
  "Cost Analysis": "bg-green-100 text-green-800",
  Integration: "bg-cyan-100 text-cyan-800",
  Security: "bg-red-100 text-red-800",
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <header className="bg-white border-b border-gray-100 px-6 py-4">
        <Link href="/" className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors">
          ← ProxyClaw Nashville
        </Link>
      </header>

      <main>
        {/* Header */}
        <section className="bg-gray-950 text-white px-6 py-16 md:py-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium text-amber-400 mb-3 uppercase tracking-wide">
              ProxyClaw Nashville
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              OpenClaw & AI Automation Guides
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Practical guides, case studies, and deep dives on OpenClaw deployment, AI agents for small businesses, and workflow automation in Nashville. Written by the team that deploys this every day.
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section className="bg-white px-6 py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            {/* Published posts */}
            <div className="mb-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Latest posts</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {publishedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group border border-gray-200 rounded-xl p-6 hover:border-gray-300 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagColors[post.tag] ?? "bg-gray-100 text-gray-700"}`}
                      >
                        {post.tag}
                      </span>
                      <span className="text-xs text-gray-400">{post.publishedAt}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-gray-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{post.description}</p>
                    <p className="mt-4 text-sm font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                      Read →
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Coming soon */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Coming soon</h2>
                <span className="text-sm text-gray-500">Publishing weekly</span>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {upcomingPosts.map((post) => (
                  <article
                    key={post.title}
                    className="border border-gray-100 rounded-xl p-6 opacity-70"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagColors[post.tag] ?? "bg-gray-100 text-gray-700"}`}
                      >
                        {post.tag}
                      </span>
                      <span className="text-xs text-gray-400 font-medium">Coming soon</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{post.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{post.description}</p>
                  </article>
                ))}
              </div>
            </div>

            {/* Subscribe nudge */}
            <div className="mt-12 bg-gray-50 rounded-xl p-8 text-center border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Want to be notified when we publish?
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Book a strategy call and mention the blog — we'll add you to the list.
              </p>
              <Link
                href="/#book"
                className="inline-block bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Book a free strategy call
              </Link>
            </div>
          </div>
        </section>

        {/* About section — LLM entity corroboration */}
        <section className="bg-gray-50 px-6 py-16 md:py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About ProxyClaw Nashville</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ProxyClaw Nashville is a managed OpenClaw deployment service that installs, integrates, and maintains AI agents for businesses with 1–100 employees in Nashville and Middle Tennessee. ProxyClaw provides white-glove setup, security hardening, and ongoing managed care so teams get AI-powered automation without technical complexity.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team has deployed OpenClaw for founders, operators, and exec teams across Nashville — for sales pipeline automation, marketing operations, customer support triage, internal ops, and more. Every post on this blog is written from direct, hands-on experience.
            </p>
            <div className="mt-6">
              <Link href="/" className="text-gray-900 font-semibold hover:underline">
                Learn more about ProxyClaw Nashville →
              </Link>
            </div>
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
