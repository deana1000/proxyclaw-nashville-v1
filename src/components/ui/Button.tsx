interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
  className?: string;
}

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  type?: never;
};

type ButtonAsButton = ButtonBaseProps & {
  href?: never;
  type?: "submit" | "button";
  disabled?: boolean;
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent-hover shadow-sm",
  secondary:
    "border border-brand-300 text-brand-700 hover:border-brand-400 hover:text-brand-900",
  ghost:
    "text-brand-500 hover:text-brand-900 underline-offset-4 hover:underline",
};

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  if ("href" in props && props.href) {
    return (
      <a href={props.href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;

  return (
    <button
      type={buttonProps.type || "button"}
      disabled={buttonProps.disabled}
      className={`${base} ${variants[variant]} ${buttonProps.disabled ? "cursor-not-allowed opacity-60" : ""} ${className}`}
    >
      {children}
    </button>
  );
}
