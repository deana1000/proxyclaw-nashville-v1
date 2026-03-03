interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-block rounded-full border border-brand-200 bg-brand-100 px-3 py-1 text-xs font-medium text-brand-600">
      {children}
    </span>
  );
}
