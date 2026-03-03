import { services } from "@/lib/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function Services() {
  return (
    <SectionWrapper id="services" muted>
      <SectionHeading title={services.h2} />
      <div className="mb-10 space-y-4">
        {services.intro.split("\n\n").map((paragraph, i) => (
          <p key={i} className="text-brand-600 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {services.cards.map((card) => (
          <Card key={card.title} title={card.title}>
            <p className="text-sm text-brand-500 leading-relaxed">{card.text}</p>
            <ul className="mt-4 space-y-2">
              {card.examples.map((example) => (
                <li
                  key={example}
                  className="flex items-start gap-2 text-sm text-brand-600"
                >
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-brand-300" />
                  {example}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
