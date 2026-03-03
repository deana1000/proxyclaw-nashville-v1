import { whoThisIsFor } from "@/lib/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function WhoThisIsFor() {
  return (
    <SectionWrapper id="fit" muted>
      <SectionHeading title={whoThisIsFor.h2} />

      <div className="grid gap-4 sm:grid-cols-2">
        {whoThisIsFor.personas.map((persona) => (
          <div key={persona.title} className="rounded-lg border border-brand-200 bg-white p-4">
            <h3 className="mb-1 font-semibold text-brand-900">{persona.title}</h3>
            <p className="text-sm text-brand-500 leading-relaxed">{persona.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 border-t border-brand-200 pt-10">
        <p className="mb-6 text-brand-600 leading-relaxed">
          {whoThisIsFor.teamIntro}
        </p>
        <div className="rounded-xl border border-brand-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-brand-900">
            {whoThisIsFor.founder.name}
          </h3>
          <p className="mb-3 text-sm font-medium text-accent">
            {whoThisIsFor.founder.title}
          </p>
          <a
            href={whoThisIsFor.founder.linkedIn}
            target="_blank"
            rel="noreferrer"
            className="mb-4 inline-block text-sm font-medium text-accent hover:underline"
          >
            Connect on LinkedIn
          </a>
          <div className="space-y-3">
            {whoThisIsFor.founder.bio.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-sm text-brand-500 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {whoThisIsFor.badges.map((badge) => (
          <Badge key={badge}>{badge}</Badge>
        ))}
      </div>
    </SectionWrapper>
  );
}
