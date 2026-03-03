import { pricing } from "@/lib/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Pricing() {
  return (
    <SectionWrapper id="pricing">
      <SectionHeading title={pricing.h2} />
      <div className="grid gap-6 md:grid-cols-2">
        {pricing.tiers.map((tier, i) => (
          <div
            key={tier.name}
            className={`rounded-xl border p-6 ${i === 0 ? "md:col-span-2" : ""} ${
              tier.recommended
                ? "border-accent bg-accent/5"
                : "border-brand-200 bg-white"
            }`}
          >
            <div className="mb-3 flex items-baseline justify-between">
              <h3 className="text-lg font-semibold text-brand-900">
                {tier.name}
              </h3>
              <span className="text-xl font-bold text-brand-900">
                {tier.price}
              </span>
            </div>
            {tier.recommended && (
              <span className="mb-3 inline-block rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-white">
                Recommended
              </span>
            )}
            <p className="text-sm text-brand-500 leading-relaxed">
              {tier.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
