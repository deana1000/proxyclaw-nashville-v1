interface FormFieldProps {
  name: string;
  label: string;
  type: "text" | "email" | "url" | "textarea";
  required?: boolean;
  placeholder?: string;
}

export function FormField({
  name,
  label,
  type,
  required = false,
  placeholder,
}: FormFieldProps) {
  const inputClasses =
    "mt-1 block w-full rounded-lg border border-brand-200 bg-white px-4 py-3 text-brand-800 placeholder:text-brand-400 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-brand-700">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          required={required}
          placeholder={placeholder}
          rows={4}
          className={`${inputClasses} resize-y`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={inputClasses}
        />
      )}
    </div>
  );
}
