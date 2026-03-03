import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-brand-200 px-6 py-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-xs text-brand-400">{footer.smallprint}</p>
        <div className="flex gap-4">
          {footer.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-brand-400 transition-colors hover:text-brand-600"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
