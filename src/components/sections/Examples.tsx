import { examples } from "@/lib/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Examples() {
  return (
    <SectionWrapper id="examples">
      <SectionHeading title={examples.h2} intro={examples.intro} />
      <ul className="space-y-4">
        {examples.items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-brand-600">
            <svg
              className="mt-1 h-4 w-4 shrink-0 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-10 text-base font-medium text-brand-700">
        {examples.closingLine}
      </p>
    </SectionWrapper>
  );
}
