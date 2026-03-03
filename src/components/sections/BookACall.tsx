import { bookACall } from "@/lib/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FormField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";

export function BookACall() {
  return (
    <SectionWrapper id="book">
      <SectionHeading title={bookACall.h2} intro={bookACall.subhead} />
      <form className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          {bookACall.fields
            .filter((f) => f.type !== "textarea")
            .map((field) => (
              <FormField
                key={field.name}
                name={field.name}
                label={field.label}
                type={field.type}
                required={field.required}
                placeholder={field.placeholder}
              />
            ))}
        </div>
        {bookACall.fields
          .filter((f) => f.type === "textarea")
          .map((field) => (
            <FormField
              key={field.name}
              name={field.name}
              label={field.label}
              type={field.type}
              required={field.required}
              placeholder={field.placeholder}
            />
          ))}
        <div className="pt-2">
          <Button variant="primary" type="submit">
            {bookACall.submitLabel}
          </Button>
        </div>
        <p className="text-xs text-brand-400">{bookACall.privacyNote}</p>
      </form>
    </SectionWrapper>
  );
}
