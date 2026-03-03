import { whatWeDo } from "@/lib/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhatWeDo() {
  return (
    <SectionWrapper id="what">
      <SectionHeading title={whatWeDo.h2} />
      <div className="space-y-4">
        {whatWeDo.body.map((paragraph, i) => (
          <p key={i} className="text-brand-600 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="mt-10 rounded-xl border-l-4 border-accent bg-accent-light px-6 py-5">
        <p className="text-sm font-semibold text-accent">{whatWeDo.callout.title}</p>
        <p className="mt-1 text-brand-700">{whatWeDo.callout.text}</p>
      </div>
    </SectionWrapper>
  );
}
