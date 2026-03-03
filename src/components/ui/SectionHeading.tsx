interface SectionHeadingProps {
  title: string;
  intro?: string;
}

export function SectionHeading({ title, intro }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold tracking-tight text-brand-900 md:text-3xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-3 text-lg text-brand-500">{intro}</p>
      )}
    </div>
  );
}
