export const nav = {
  logoText: "ProxyClaw Nashville",
  links: [
    { label: "Services", href: "#services" },
    { label: "How it works", href: "#how" },
    { label: "Pricing", href: "#pricing" },
    { label: "Examples", href: "#examples" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: { label: "Book a free strategy call", href: "#book" },
} as const;

export const hero = {
  eyebrow: "On-site in Nashville \u2022 Local Team \u2022 Managed AI agents",
  h1: "Your next hire is an AI agent that works 24/7.",
  subhead:
    "White-glove OpenClaw deployment for founders, operators, and exec teams in Nashville. No technical lift required. We install, integrate, and maintain proactive AI agents that run revenue, marketing, support, and internal ops workflows so your team gets leverage without adding headcount. Built for 1\u2013100 employee teams.",
  bullets: [] as readonly string[],
  ctaPrimary: { label: "Book a free strategy call", href: "#book" },
  ctaSecondary: { label: "Tell us what to automate", href: "#book" },
  capacityNote: "Limited onboarding slots each month.",
} as const;

export const whatWeDo = {
  h2: "What we do",
  body: [
    "We deploy OpenClaw, the open-source AI agent framework, inside your business. Your agent connects to the tools you already use (Google Workspace, Slack, HubSpot, Salesforce, Shopify, Notion, Airtable, and more), runs on dedicated infrastructure, and works around the clock.",
    "Unlike chatbots you have to remember to prompt, an OpenClaw agent is proactive. It monitors inboxes and queues, routes requests, drafts responses, updates systems of record, produces summaries, and delivers reporting on a schedule. Your team doesn\u2019t have to \u201cuse AI.\u201d The work just gets done.",
    "OpenClaw is open-source. You could set it up yourself. But between integrations, permissions, security hardening, and ongoing maintenance, most teams end up with a project instead of a reliable system. We handle the install, the guardrails, and the care plan so you go live quickly and stay live. Most teams go live with their first agent in 1\u20132 weeks.",
  ],
  callout: {
    title: "Plain-English promise",
    text: "If it doesn\u2019t save time, reduce errors, or speed up the work, we don\u2019t build it.",
  },
} as const;

export const services = {
  h2: "Working. Always.",
  intro:
    "1 agent = 1 OpenClaw instance built around one role or identity. Every agent we deploy is designed around a specific role inside your company. Not a general \u201cAI helper.\u201d A focused operator with defined tasks, tool access, and a schedule.\n\nTalking to it is as simple as sending a message. Slack is typical. We can also support iMessage, WhatsApp, Discord or Telegram if that\u2019s already how your team works.\n\nOnce the first agent is steady, we expand. We add new workflows, integrations, and automations based on what will move the numbers next.",
  cards: [
    {
      title: "Revenue & Pipeline",
      text: "Your agent keeps revenue moving and prevents dropped balls.",
      examples: [
        "Call summaries auto-logged to HubSpot or Salesforce with next steps",
        "Follow-up email drafts based on context and deal stage",
        "Lead triage, routing, and \u201cnext action\u201d nudges so nothing goes cold",
        "Pipeline hygiene: stale deals flagged, missing fields filled, reminders scheduled",
      ],
    },
    {
      title: "Marketing & Comms",
      text: "Your agent turns raw inputs into consistent output, then tracks performance.",
      examples: [
        "Draft generation for emails, social content, newsletters, and client comms",
        "Repurposing workflows: one interview into multiple usable assets",
        "Content ops on a schedule: briefs, drafts, approvals, posting checklists",
        "Performance snapshots and \u201cwhat to test next\u201d delivered to Slack weekly",
      ],
    },
    {
      title: "Ops, Support & Admin",
      text: "Your agent turns chaos into structured work without adding headcount.",
      examples: [
        "Inbound intake that converts messy emails into structured tickets + routing",
        "Customer support triage: tag, prioritize, draft responses, escalate properly",
        "Weekly leadership summary with KPIs, blockers, and open loops",
        'Internal "how do we do X?" assistants for SOPs and policies',
      ],
    },
  ],
} as const;

export const howItWorks = {
  h2: "How it works",
  steps: [
    {
      title: "Kickoff call (30 min, free)",
      text: "You tell us what\u2019s eating your team\u2019s time, what outcomes matter, and which tools you use. We\u2019ll propose the first agent workflow, define boundaries, and give you a fixed quote.",
    },
    {
      title: "Setup (1\u20132 weeks)",
      text: "We provision your infrastructure, install OpenClaw, connect your tools, configure workflows, and harden security. Your first agent goes live, and we test it together with real examples. All onsite at your office.",
    },
    {
      title: "Training + handoff",
      text: "We help onboard your team, and hand over documentation. From there, you can run it yourself or keep us on for ongoing managed care and optimization.",
    },
  ],
  toolingNote:
    "Common tools: Google Workspace, Microsoft 365/Teams, Slack, HubSpot, Salesforce, Notion, Airtable, Shopify.",
} as const;

export const pricing = {
  h2: "Pricing",
  tiers: [
    {
      name: "Starter",
      price: "$3k",
      recommended: true,
      description:
        "Nashville and Franklin only. One OpenClaw agent deployed on your infrastructure. Up to 3 workflow integrations. Security hardening, guardrails, and documentation. 14-day support window after go-live.",
    },
    {
      name: "Managed Care",
      price: "$500/mo",
      recommended: false,
      description:
        "Ongoing monitoring, OpenClaw updates, integration maintenance, and an open chat channel with our team. Includes monthly workflow tuning so the system improves instead of drifting.",
    },
    {
      name: "Workflow Expansion, White Glove Support",
      price: "$2k\u2013$3k",
      recommended: false,
      description:
        "Add new integrations or automations to an existing agent after initial setup. Best when you want to expand from one workflow into multiple teams.",
    },
  ],
} as const;

export const whoThisIsFor = {
  h2: "Who we build for",
  personas: [
    {
      title: "Founders & Owners",
      text: "Wearing every hat, buried in inbox and DMs, need leverage without hiring",
    },
    {
      title: "Ops & Revenue Leads",
      text: "Pipeline hygiene, follow-ups, reporting, and internal requests handled automatically",
    },
    {
      title: "Service Businesses",
      text: "Intake, scheduling workflows, client updates, and weekly reporting without manual chasing",
    },
    {
      title: "Professional Services",
      text: "Client onboarding, recurring comms, deliverable tracking, and meeting-to-action loops",
    },
    {
      title: "Creative Services",
      text: "Brief intake, client comms, asset requests, content repurposing, and reporting",
    },
    {
      title: "Ecommerce Operations",
      text: "Support triage, returns, supplier comms, inventory alerts, and KPI summaries",
    },
  ],
  teamIntro:
    "Our team is comprised of senior operators who\u2019ve owned growth, revenue, and operations and know what it takes to move the numbers.",
  founder: {
    name: "Susanna Kohly Jacobson",
    title: "AI Strategist & Co-Founder",
    bio: "Susanna is an AI Strategist and entrepreneur who spent 13 years at Google, where she built programs and products at the intersection of emerging technology and the businesses that needed it most. As an AI Strategist at Google, she led the development of AI education programs and automated product strategy designed specifically for small businesses.\n\nHer career at Google was defined by taking transformative technology into environments where trust, simplicity, and real-world outcomes mattered most: from co-founding Google\u2019s Cuba team to expand internet access for 11 million citizens, to launching a $5 million fund for Latino startup founders.\n\nAs co-founder of ProxyClaw, she leads client strategy and implementation, helping teams define exactly what their agents should do, how they\u2019ll be measured, and how to keep them safe and reliable.",
    linkedIn: "https://www.linkedin.com/in/susanna-kohly-jacobson-76321033/",
  },
  badges: [
    "Local only",
    "On-site setup",
    "OpenClaw experts",
    "Practical AI automation",
  ],
} as const;

export const examples = {
  h2: "Example automations we can set up quickly",
  intro:
    "These are real-world, high-leverage workflows we see constantly. We tailor each one to your stack and approvals.",
  items: [
    "Call summaries that auto-log to HubSpot or Salesforce with next steps",
    "Follow-up email drafts based on call context and deal stage",
    "Inbound lead triage: enrichment, routing, and instant \u201cnext step\u201d drafting",
    "Inbound ops intake: messy emails \u2192 structured tickets \u2192 routed to the right owner",
    "Weekly leadership summary: revenue, marketing, ops, and top blockers in one Slack message",
    "A searchable \u201ccompany brain\u201d for SOPs, policies, and internal FAQs",
    "A team-specific Slack assistant (sales, ops, support) with tight boundaries and escalation rules",
    "Marketing repurposing: one interview \u2192 multiple drafts and a posting checklist on schedule",
  ],
  closingLine:
    "Tell us your biggest time-waster and we\u2019ll propose the first workflow to automate.",
} as const;

export const faq = {
  h2: "FAQ",
  items: [
    {
      q: "Do we need to already be using AI?",
      a: "No. Most teams aren\u2019t. We set the agent up so it works inside the tools you already use and delivers results without your team needing to learn a new workflow.",
    },
    {
      q: "Is this just ChatGPT prompts?",
      a: "No. Prompts are one piece. OpenClaw agents run scheduled workflows, connect to your systems, follow rules, log actions, and can require approvals before taking sensitive actions. Think \u201coperator,\u201d not \u201cchat.\u201d",
    },
    {
      q: "What is OpenClaw?",
      a: "OpenClaw is an open-source framework for deploying AI agents that can use tools, run workflows, and operate with guardrails. We install it, connect your integrations, and maintain it so it\u2019s reliable and secure.",
    },
    {
      q: "Is there a service that will install OpenClaw for me?",
      a: "Yes \u2014 that\u2019s exactly what ProxyClaw does. We provide end-to-end managed OpenClaw deployment for Nashville and Middle Tennessee businesses: infrastructure, installation, integrations, security hardening, and ongoing care. You don\u2019t touch the technical side.",
    },
    {
      q: "How much does it cost to deploy OpenClaw?",
      a: "Our Starter package is $3,000 for Nashville and Franklin \u2014 one OpenClaw agent, up to 3 workflow integrations, security hardening, and a 14-day post-launch support window. Ongoing managed care is $500/month. Workflow expansions are $2,000\u2013$3,000 per project.",
    },
    {
      q: "How do I set up OpenClaw for my business?",
      a: "You can self-host OpenClaw, but between infrastructure setup, integrations, security hardening, and ongoing maintenance, most business teams end up with a project instead of a reliable system. ProxyClaw handles the entire setup on-site at your office, typically in 1\u20132 weeks, so you go live quickly without a technical lift.",
    },
    {
      q: "OpenClaw vs hiring a virtual assistant \u2014 which is better?",
      a: "An OpenClaw agent works 24/7, never calls in sick, and costs a fraction of a full-time hire. For structured, repeatable workflows \u2014 CRM updates, follow-up drafts, reporting, intake triage \u2014 an AI agent consistently outperforms a VA. Most ProxyClaw clients use agents for structured ops work and free their human team for higher-judgment tasks.",
    },
    {
      q: "What can OpenClaw automate in a sales workflow?",
      a: "Call summaries auto-logged to HubSpot or Salesforce with next steps, follow-up email drafts based on deal context, lead triage and routing, pipeline hygiene (stale deal flags, missing field fills, follow-up reminders). Most sales teams recover 5\u201310 hours per week from these workflows alone.",
    },
    {
      q: "Is OpenClaw secure enough for my business?",
      a: "With proper hardening \u2014 which ProxyClaw handles as part of every deployment \u2014 yes. We configure defined permissions, guardrails, and approval workflows for sensitive agent actions. OpenClaw runs on infrastructure you control, which means your data doesn\u2019t pass through a third-party AI platform.",
    },
    {
      q: "Do you work outside Nashville?",
      a: "Nashville-first. We serve Middle Tennessee and do on-site setups in Nashville and surrounding areas. If you\u2019re outside the region, reach out and we\u2019ll tell you what\u2019s possible.",
    },
    {
      q: "What\u2019s included in the setup fee?",
      a: "Infrastructure provisioning, OpenClaw installation, tool integrations, workflow configuration, security hardening, testing, documentation, and a short support window after go-live.",
    },
    {
      q: "Can you work with healthcare data?",
      a: "We avoid HIPAA-regulated workflows. If your use case touches PHI, we\u2019ll either scope it out safely or pass.",
    },
  ],
} as const;

export const bookACall = {
  h2: "Book a kickoff call",
  subhead:
    "Tell us your main pain point. We\u2019ll come prepared with a practical first automation and a clear plan for how we\u2019d measure success.",
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text" as const,
      required: true,
      placeholder: "Your name",
    },
    {
      name: "email",
      label: "Email",
      type: "email" as const,
      required: true,
      placeholder: "you@company.com",
    },
    {
      name: "company",
      label: "Company",
      type: "text" as const,
      required: false,
      placeholder: "Company name (optional)",
    },
    {
      name: "website",
      label: "Website",
      type: "text" as const,
      required: false,
      placeholder: "company.com (optional)",
    },
    {
      name: "pain_point",
      label: "What\u2019s the #1 thing you want to automate?",
      type: "textarea" as const,
      required: true,
      placeholder:
        "Example: lead follow-up, call notes, intake triage, weekly reporting...",
    },
    {
      name: "tools",
      label: "Tools you use (optional)",
      type: "text" as const,
      required: false,
      placeholder: "Example: Google Workspace, Slack, HubSpot, Salesforce",
    },
  ],
  submitLabel: "Request a call",
  successMessage: "Got it. We\u2019ll reply by email to schedule a time.",
  privacyNote: "We\u2019ll only use this info to respond and set up the call.",
} as const;

export const footer = {
  smallprint:
    "\u00a9 ProxyClaw Nashville \u2022 On-site AI automation in Nashville and Middle Tennessee",
  links: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
} as const;
