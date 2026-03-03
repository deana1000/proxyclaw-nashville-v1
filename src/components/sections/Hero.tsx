import { hero } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="hero" className="px-6 pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-medium tracking-wide text-brand-400 uppercase">
          {hero.eyebrow}
        </p>
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-brand-900 md:text-5xl md:leading-tight">
          {hero.h1}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-brand-500 md:text-xl">
          {hero.subhead}
        </p>

        {hero.bullets.length > 0 && (
          <ul className="mt-8 space-y-3">
            {hero.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-brand-600">
                <svg
                  className="mt-1 h-4 w-4 shrink-0 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {bullet}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Button variant="primary" href={hero.ctaPrimary.href}>
            {hero.ctaPrimary.label}
          </Button>
          <Button variant="secondary" href={hero.ctaSecondary.href}>
            {hero.ctaSecondary.label}
          </Button>
        </div>

        <p className="mt-6 text-sm font-medium text-brand-500">
          {hero.capacityNote}
        </p>
      </div>
    </section>
  );
}
