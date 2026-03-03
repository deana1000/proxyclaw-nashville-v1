interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  muted?: boolean;
}

export function SectionWrapper({
  id,
  children,
  className = "",
  muted = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 px-6 py-20 md:py-28 ${muted ? "bg-brand-100" : ""} ${className}`}
    >
      <div className="mx-auto max-w-3xl">{children}</div>
    </section>
  );
}
