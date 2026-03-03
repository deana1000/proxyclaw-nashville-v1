import { faq } from "@/lib/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AccordionItem } from "@/components/ui/AccordionItem";

export function Faq() {
  return (
    <SectionWrapper id="faq" muted>
      <SectionHeading title={faq.h2} />
      <div className="divide-y divide-brand-200 border-t border-brand-200">
        {faq.items.map((item) => (
          <AccordionItem key={item.q} question={item.q} answer={item.a} />
        ))}
      </div>
    </SectionWrapper>
  );
}
