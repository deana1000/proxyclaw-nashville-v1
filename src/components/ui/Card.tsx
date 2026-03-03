interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Card({ title, children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-brand-200 bg-white p-6 ${className}`}
    >
      <h3 className="mb-3 text-lg font-semibold text-brand-900">{title}</h3>
      {children}
    </div>
  );
}
