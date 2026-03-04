import { bookACall } from "@/lib/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FormField } from "@/components/ui/FormField";
import BookACallForm from "@/components/sections/BookACallForm";

export function BookACall() {
  return (
    <SectionWrapper id="book">
      <SectionHeading title={bookACall.h2} intro={bookACall.subhead} />
      <BookACallForm>
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
      </BookACallForm>
    </SectionWrapper>
  );
}
