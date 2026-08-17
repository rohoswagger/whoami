import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import CountUp from "@/app/components/CountUp";
import Figure from "@/app/components/Figure";
import { GROWTH, ONYX_REPOS, ONYX_TOTALS, type RepoStat } from "@/app/data/work";

export const metadata: Metadata = {
  title: "onyx | Roshan Desai",
  description:
    "What I work on at Onyx: leading Onyx Craft, building the extension, widget and CLI, and running the SEO and answer engine work that drives 80% of inbound.",
};

const n = (v: number) => v.toLocaleString("en-US");

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <h2 className="text-sm font-medium text-gray-500">{children}</h2>;
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-700 underline decoration-blue-200 underline-offset-4 transition-colors duration-200 hover:decoration-blue-600"
    >
      {children}
    </a>
  );
}

function RepoCard({ repo }: { repo: RepoStat }) {
  return (
    <article className="reveal flex flex-col rounded-xl border border-gray-200 p-5 md:p-6">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <ExternalLink href={repo.href}>
          <span className="font-mono text-sm">{repo.repo}</span>
        </ExternalLink>
        {repo.visibility === "private" && (
          <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400">
            private
          </span>
        )}
      </div>
      <p className="mt-1.5 text-sm text-gray-500">{repo.blurb}</p>

      <Image
        src={repo.insightsImage}
        alt={`GitHub contributor graph for rohoswagger in ${repo.repo}`}
        width={1760}
        height={864}
        className="mt-5 w-full rounded-lg border border-gray-100"
      />

      {/* mt-auto keeps the stat row flush with the bottom of both cards even
          when the blurbs wrap to different heights */}
      <dl className="mt-auto grid grid-cols-3 gap-4 pt-6 font-mono">
        {[
          { k: "commits", v: repo.commits },
          { k: "merged", v: repo.prsMerged },
          { k: "reviewed", v: repo.prsReviewed },
        ].map((s) => (
          <div key={s.k}>
            <dd className="text-2xl font-semibold tabular-nums text-gray-900">{n(s.v)}</dd>
            <dt className="mt-0.5 text-[11px] text-gray-500">{s.k}</dt>
          </div>
        ))}
      </dl>

      <p className="mt-4 border-t border-gray-100 pt-3 font-mono text-[11px] leading-relaxed text-gray-400">
        {repo.rank} · +{n(repo.additions)} / −{n(repo.deletions)} lines
      </p>
    </article>
  );
}

const SURFACES = [
  { name: "chrome extension", note: "onyx in the browser, on whatever page you're already on" },
  { name: "website widget", note: "drop-in search and chat for a company's own site" },
  { name: "cli and tui", note: "onyx from the terminal, for people who live there" },
];

export default function OnyxPage() {
  return (
    <div className="px-6 py-12 md:py-20">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="rise">
          <Link
            href="/work"
            className="group inline-flex items-center gap-1.5 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-900"
          >
            <span
              aria-hidden
              className="transition-transform duration-300 ease-expo group-hover:-translate-x-1"
            >
              ←
            </span>
            work
          </Link>

          <header className="mt-8">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">onyx</h1>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-blue-700">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                now
              </span>
            </div>
            <p className="mt-3 font-mono text-sm text-gray-400">
              founding growth · Dec 2025 to Present
            </p>
            <p className="mt-6 max-w-[68ch] text-lg leading-relaxed text-gray-600">
              my title says growth, but most of my week is spent writing code. i lead onyx craft,
              and i built the chrome extension, the website widget, and the cli. the other half of
              the job is getting people to onyx in the first place, which is mostly seo and
              answer engine work.
            </p>
          </header>
        </div>

        {/* Craft */}
        <section aria-label="Onyx Craft" className="mt-16 md:mt-20">
          <SectionLabel>onyx craft</SectionLabel>
          <h3 className="reveal mt-4 max-w-[22ch] text-2xl font-semibold leading-tight text-gray-900 md:text-3xl">
            an ai coworker with deep company context
          </h3>
          <div className="reveal mt-4 max-w-[68ch] space-y-4 text-base leading-relaxed text-gray-600">
            <p>
              craft is the product i lead. you give it a task, it pulls the context it needs from
              across the company, and it does the work.
            </p>
            <p>
              almost all my time there goes to two things. the first is the harness, which is the
              logic around the model: what context gets pulled in, which tools get called in what
              order, how many steps a run gets, and when it should stop and ask a human. the
              second is artifact quality. a draft that is 90% right still costs you the full hour
              to fix, so most of the work is closing that last stretch.
            </p>
          </div>
        </section>

        {/* Other surfaces */}
        <section aria-label="Other surfaces" className="mt-16 md:mt-20">
          <SectionLabel>what else i built</SectionLabel>
          <p className="mt-4 max-w-[68ch] text-base leading-relaxed text-gray-600">
            onyx is only useful if you can reach it from where you already work, so i built the
            other ways in.
          </p>
          <dl className="reveal mt-6 divide-y divide-gray-100 border-y border-gray-200">
            {SURFACES.map((s) => (
              <div key={s.name} className="grid gap-1 py-4 sm:grid-cols-[14rem_minmax(0,1fr)] sm:gap-6">
                <dt className="font-mono text-sm text-gray-900">{s.name}</dt>
                <dd className="text-sm text-gray-600">{s.note}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* GitHub */}
        <section aria-label="GitHub contributions" className="mt-16 md:mt-20">
          <SectionLabel>on github</SectionLabel>
          <p className="mt-4 max-w-[68ch] text-base leading-relaxed text-gray-600">
            almost all of it ships through two repos. the review number is the one i care about
            most, since a lot of the job is unblocking other people.
          </p>

          <div
            className="rise mt-8 grid gap-8 border-y border-gray-200 py-8 sm:grid-cols-3"
            style={{ animationDelay: "80ms" }}
          >
            {[
              { value: ONYX_TOTALS.commits, label: "commits to main" },
              { value: ONYX_TOTALS.merged, label: "pull requests merged" },
              { value: ONYX_TOTALS.reviewed, label: "pull requests reviewed" },
            ].map((s) => (
              <div key={s.label}>
                <CountUp
                  value={s.value}
                  className="block font-mono text-4xl font-semibold tabular-nums leading-none text-gray-900 md:text-5xl"
                />
                <div className="mt-2 text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>

          <p className="mt-4 font-mono text-xs text-gray-400">
            +{n(ONYX_TOTALS.additions)} / −{n(ONYX_TOTALS.deletions)} lines across both repos
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {ONYX_REPOS.map((r) => (
              <RepoCard key={r.repo} repo={r} />
            ))}
          </div>
        </section>

        {/* SEO and GEO */}
        <section aria-label="SEO and answer engines" className="mt-16 md:mt-20">
          <SectionLabel>seo and geo</SectionLabel>
          <div className="mt-4 max-w-[68ch] space-y-4 text-base leading-relaxed text-gray-600">
            <p>
              the bet i made early was that people had started asking chatgpt and perplexity which
              tool to use instead of googling it and opening ten tabs. if that was true, then the
              thing worth owning was being the source those models quote, not the tenth blue link.
            </p>
            <p>
              so we wrote for the questions people actually type, and published the benchmarks and
              leaderboards they were already looking for. most of it lives at{" "}
              <ExternalLink href="https://onyx.app/insights">onyx.app/insights</ExternalLink>. it
              paid off:{" "}
              <strong className="font-semibold text-gray-900">
                80% of our inbound now comes through it
              </strong>
              .
            </p>
          </div>

          <div className="rise mt-8 grid gap-8 border-y border-gray-200 py-8 sm:grid-cols-3">
            {GROWTH.map((g) => (
              <div key={g.label}>
                <div className="font-mono text-4xl font-semibold tabular-nums leading-none text-gray-900 md:text-5xl">
                  {g.multiple}
                </div>
                <div className="mt-2 text-sm text-gray-600">{g.label}</div>
                <div className="mt-1 font-mono text-xs text-gray-400">
                  {g.from} <span aria-hidden>→</span> {g.to}
                </div>
              </div>
            ))}
          </div>

          <div className="reveal mt-8">
            <Figure
              src="/img/work/gsc-search-performance.png"
              alt="Google Search Console showing 194K total clicks and 11.4M total impressions at 1.7% CTR and average position 6.5"
              width={2998}
              height={984}
              priority
              caption="google search console · 194K clicks, 11.4M impressions, 1.7% ctr, avg position 6.5 · Nov 2025 to Apr 2026"
            />
          </div>

          <div className="reveal mt-8 grid gap-8 md:grid-cols-2">
            <Figure
              src="/img/work/web-search-clicks.png"
              alt="Chart showing 144,168 total web search clicks between January and April 2026"
              width={1742}
              height={574}
              caption="144,168 web search clicks, Jan to Apr 2026"
            />
            <Figure
              src="/img/work/ai-search-impressions.png"
              alt="Chart showing 688K total impressions from AI search between May and August 2026"
              width={3012}
              height={960}
              caption="ai search · 688K impressions, May to Aug 2026"
            />
          </div>
        </section>

        {/* Influencer marketing */}
        <section aria-label="Influencer marketing" className="mt-16 md:mt-20">
          <SectionLabel>influencer marketing</SectionLabel>
          <p className="mt-4 max-w-[68ch] text-base leading-relaxed text-gray-600">
            the leaderboards were the hook. i wrote the reddit posts myself and shipped the pages
            behind them, then worked with creators on x to time launches with their audiences.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="reveal flex flex-col rounded-xl border border-gray-200 p-5 md:p-6">
              <h3 className="font-mono text-sm text-gray-900">reddit</h3>
              <p className="mt-1.5 text-sm text-gray-500">
                posts i wrote, pointing at leaderboards i shipped
              </p>
              {/* flex-1 lets both cards absorb their leftover height here, so the
                  stat rows below line up even though the two screenshots differ
                  in aspect ratio */}
              <div className="mt-5 flex flex-1 items-start">
                <div className="w-full overflow-hidden rounded-lg border border-gray-100">
                  <Image
                    src="/img/work/reddit-llm-leaderboard.png"
                    alt="Reddit post in r/LocalLLM titled Self Hosted LLM Leaderboard with 832 upvotes, 122 comments and 322K views"
                    width={1532}
                    height={1424}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="pt-6">
                <div className="font-mono text-4xl font-semibold tabular-nums leading-none text-gray-900 md:text-5xl">
                  <CountUp value={3} />
                  M+
                </div>
                <div className="mt-2 text-sm text-gray-600">views across the posts</div>
              </div>
              <p className="mt-4 min-h-[48px] border-t border-gray-100 pt-3 font-mono text-[11px] leading-relaxed text-gray-400">
                pictured:{" "}
                <ExternalLink href="https://www.reddit.com/r/LocalLLM/s/ijTl0zvKXW">
                  r/LocalLLM
                </ExternalLink>{" "}
                · 832 upvotes, 122 comments, 322K views
              </p>
            </article>

            <article className="reveal flex flex-col rounded-xl border border-gray-200 p-5 md:p-6">
              <h3 className="font-mono text-sm text-gray-900">x</h3>
              <p className="mt-1.5 text-sm text-gray-500">
                launches timed with creators and their audiences
              </p>
              <div className="mt-5 flex flex-1 items-start">
                <div className="w-full overflow-hidden rounded-lg border border-gray-100">
                  <Image
                    src="/img/work/x-post-avichawla.png"
                    alt="X post showing an Onyx demo video with 671.3K views on 1 April 2026"
                    width={888}
                    height={930}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="pt-6">
                <div className="font-mono text-4xl font-semibold tabular-nums leading-none text-gray-900 md:text-5xl">
                  671.3K
                </div>
                <div className="mt-2 text-sm text-gray-600">views on the launch post</div>
              </div>
              <p className="mt-4 min-h-[48px] border-t border-gray-100 pt-3 font-mono text-[11px] leading-relaxed text-gray-400">
                with{" "}
                <ExternalLink href="https://x.com/_avichawla/status/2039598698548850949?s=20">
                  @_avichawla
                </ExternalLink>{" "}
                · Apr 1, 2026
              </p>
            </article>
          </div>
        </section>

        {/* Research */}
        <section aria-label="EnterpriseRAG-Bench" className="mt-16 md:mt-20">
          <SectionLabel>research</SectionLabel>
          <h3 className="reveal mt-4 text-2xl font-semibold text-gray-900 md:text-3xl">
            EnterpriseRAG-Bench
          </h3>
          <p className="reveal mt-4 max-w-[68ch] text-base leading-relaxed text-gray-600">
            most rag benchmarks run on clean public documents. company data is not like that. it
            is duplicated, half of it is out of date, plenty of it contradicts itself, and who can
            see what matters. this benchmark tries to measure retrieval under those conditions.
          </p>
          <div className="reveal mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
            <ExternalLink href="https://github.com/onyx-dot-app/EnterpriseRAG-Bench">
              github.com/onyx-dot-app/EnterpriseRAG-Bench
            </ExternalLink>
            <ExternalLink href="https://arxiv.org/abs/2605.05253">arxiv:2605.05253</ExternalLink>
          </div>
        </section>

        <footer className="mt-20 border-t border-gray-100 pt-8">
          <Link
            href="/work"
            className="text-sm text-gray-500 transition-colors duration-200 hover:text-gray-900"
          >
            ← back to work
          </Link>
        </footer>
      </div>
    </div>
  );
}
