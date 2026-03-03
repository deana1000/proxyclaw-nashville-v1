import { howItWorks } from "@/lib/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorks() {
  return (
    <SectionWrapper id="how">
      <SectionHeading title={howItWorks.h2} />
      <div className="space-y-8">
        {howItWorks.steps.map((step, i) => (
          <div key={step.title} className="flex gap-5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
              {i + 1}
            </div>
            <div>
              <h3 className="text-base font-semibold text-brand-900">{step.title}</h3>
              <p className="mt-1 text-brand-500 leading-relaxed">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-10 text-sm text-brand-400">{howItWorks.toolingNote}</p>
    </SectionWrapper>
  );
}
