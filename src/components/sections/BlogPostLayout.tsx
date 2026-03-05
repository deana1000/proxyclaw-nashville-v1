import Link from "next/link";
import { siteConfig } from "@/config/site";

interface BlogPostLayoutProps {
  title: string;
  description: string;
  publishedAt: string;
  tag: string;
  keyword: string;
  children: React.ReactNode;
}

export function BlogPostLayout({
  title,
  description,
  publishedAt,
  tag,
  keyword,
  children,
}: BlogPostLayoutProps) {
  return (
    <>
      <header className="bg-white border-b border-gray-100 px-6 py-4">
        <Link href="/blog" className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors">
          ← Blog
        </Link>
      </header>

      <main>
        {/* Post header */}
        <section className="bg-gray-950 text-white px-6 py-16 md:py-20">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold bg-amber-400 text-gray-950 px-2.5 py-1 rounded-full">
                {tag}
              </span>
              <span className="text-xs text-gray-500">{publishedAt}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{title}</h1>
            <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
            <p className="mt-4 text-xs text-gray-600">
              By <span className="text-gray-400">ProxyClaw Nashville</span> · Topic:{" "}
              <span className="italic text-gray-500">{keyword}</span>
            </p>
          </div>
        </section>

        {/* Post body */}
        <section className="bg-white px-6 py-12 md:py-16">
          <div className="max-w-2xl mx-auto prose prose-gray prose-lg max-w-none">
            {children}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-50 px-6 py-12 border-t border-gray-100">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
              ProxyClaw Nashville
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to deploy your first AI agent?
            </h2>
            <p className="text-gray-600 mb-6">
              We handle the full OpenClaw setup on-site at your Nashville or Middle Tennessee office. Free 30-minute strategy call — no technical knowledge required.
            </p>
            <Link
              href="/#book"
              className="inline-block bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Book a free strategy call
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-500 px-6 py-8 text-center text-sm">
        <p>© ProxyClaw Nashville · On-site AI automation in Nashville and Middle Tennessee</p>
        <div className="mt-2 flex justify-center gap-4">
          <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
          <Link href="/blog" className="hover:text-gray-300 transition-colors">Blog</Link>
          <Link href="/nashville" className="hover:text-gray-300 transition-colors">Nashville</Link>
        </div>
      </footer>
    </>
  );
}

// Reusable prose components for consistent post formatting
export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">{children}</h2>;
}

export function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">{children}</h3>;
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="text-gray-700 leading-relaxed mb-4">{children}</p>;
}

export function UL({ items }: { items: string[] }) {
  return (
    <ul className="my-4 space-y-2 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-gray-700">
          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 border-l-4 border-amber-400 bg-amber-50 px-6 py-4 rounded-r-lg">
      <p className="text-gray-800 leading-relaxed font-medium">{children}</p>
    </div>
  );
}

export function CompareTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-950 text-white">
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 text-left font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-gray-700 leading-relaxed">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function InlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-900 font-medium underline underline-offset-2 hover:text-gray-600 transition-colors">
      {children}
    </Link>
  );
}
