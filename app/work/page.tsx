import Link from "next/link";
import type { Metadata } from "next";
import ContributionHeatmap from "@/app/components/ContributionHeatmap";
import CountUp from "@/app/components/CountUp";
import WorkTimeline from "@/app/components/WorkTimeline";
import { YEAR_SPLIT } from "@/app/data/work";
import { getContributions } from "@/app/lib/contributions";

export const metadata: Metadata = {
  title: "work | Roshan Desai",
  description: "What I've shipped.",
};

export default async function WorkPage() {
  const contributions = await getContributions();

  return (
    <div className="px-6 py-12 md:py-20">
      <div className="mx-auto max-w-4xl">
        <header className="rise">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">work</h1>
          <p className="mt-4 max-w-[60ch] text-lg text-gray-600 md:text-xl">
            what i&apos;ve shipped
          </p>
        </header>

        {/* The year of work as one instrument. */}
        <section
          aria-label="GitHub contributions in the last year"
          className="rise mt-14 md:mt-20"
          style={{ animationDelay: "120ms" }}
        >
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
            <h2 className="flex items-baseline gap-3">
              <CountUp
                value={contributions.total}
                className="font-mono text-5xl font-semibold tabular-nums leading-none text-gray-900 md:text-7xl"
              />
              <span className="text-base text-gray-500 md:text-lg">
                contributions in the last year
              </span>
            </h2>

            <dl className="flex gap-6 md:gap-8">
              {YEAR_SPLIT.map((s) => (
                <div key={s.label}>
                  <dd className="font-mono text-base font-semibold tabular-nums text-gray-900">
                    {s.pct}%
                  </dd>
                  <dt className="text-[11px] text-gray-500">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-8">
            <ContributionHeatmap data={contributions} />
          </div>
        </section>

        <div className="mt-16 md:mt-24">
          <WorkTimeline />
        </div>

        <footer className="mt-20 border-t border-gray-100 pt-8">
          <Link
            href="/"
            className="text-sm text-gray-500 transition-colors duration-200 hover:text-gray-900"
          >
            ← back home
          </Link>
        </footer>
      </div>
    </div>
  );
}
