// GitHub figures come from the API + each repo's Insights → Contributors graph.
// Window for the Onyx repo stats: 2025-12-01 → present (last pulled 2026-08-16).
// Refresh with `gh api graphql` / `gh api search/...` before restating any of these.
//
// ── Adding a role ────────────────────────────────────────────────────────────
// Append to ROLES (newest first). `detailHref` is optional: set it only once a
// matching page exists under app/work/<id>/page.tsx, otherwise the timeline
// entry renders as plain text instead of a link.

export type RepoStat = {
  repo: string;
  href: string;
  visibility: "public" | "private";
  blurb: string;
  rank: string;
  commits: number;
  additions: number;
  deletions: number;
  prsMerged: number;
  prsReviewed: number;
  insightsImage: string;
};

export type Role = {
  id: string;
  org: string;
  title: string;
  period: string;
  current: boolean;
  summary: string;
  facts: { value: string; label: string }[];
  detailHref?: string;
};

// The trailing-year total and the calendar itself are fetched live in
// app/lib/contributions.ts. Don't hardcode them here.
export const YEAR_SPLIT = [
  { label: "commits", pct: 62 },
  { label: "pull requests", pct: 21 },
  { label: "code review", pct: 16 },
  { label: "issues", pct: 1 },
];

export const ONYX_REPOS: RepoStat[] = [
  {
    repo: "onyx-dot-app/onyx",
    href: "https://github.com/onyx-dot-app/onyx",
    visibility: "public",
    blurb: "the core platform: enterprise search and agents",
    rank: "#9 of all contributors",
    commits: 275,
    additions: 159890,
    deletions: 73783,
    prsMerged: 315,
    prsReviewed: 442,
    insightsImage: "/img/work/insights-onyx-rohoswagger.png",
  },
  {
    repo: "onyx-dot-app/onyx-website",
    href: "https://github.com/onyx-dot-app/onyx-website",
    visibility: "private",
    blurb: "onyx.app: landing, docs, leaderboards, comparison pages",
    rank: "#1 contributor",
    commits: 98,
    additions: 43307,
    deletions: 9643,
    prsMerged: 83,
    prsReviewed: 27,
    insightsImage: "/img/work/insights-onyx-website-rohoswagger.png",
  },
];

export const ONYX_TOTALS = ONYX_REPOS.reduce(
  (a, r) => ({
    commits: a.commits + r.commits,
    merged: a.merged + r.prsMerged,
    reviewed: a.reviewed + r.prsReviewed,
    additions: a.additions + r.additions,
    deletions: a.deletions + r.deletions,
  }),
  { commits: 0, merged: 0, reviewed: 0, additions: 0, deletions: 0 }
);

/** Growth numbers. `from` and `to` are the start and current values. */
export const GROWTH = [
  { multiple: "22x", label: "weekly visits", from: "3k", to: "~65k" },
  { multiple: "10x", label: "github stars / day", from: "10", to: "~100" },
  { multiple: "2.5x", label: "demos / week", from: "8", to: "~20" },
];

export const ROLES: Role[] = [
  {
    id: "onyx",
    org: "onyx",
    title: "founding growth",
    period: "Dec 2025 to Present",
    current: true,
    summary:
      "building onyx craft, our ai coworker, plus the chrome extension, website widget and cli. the other half of the job is seo and answer engine work, which now brings in 80% of our inbound.",
    facts: [
      { value: "80%", label: "of inbound from answer engines" },
      { value: "22x", label: "weekly visits" },
      { value: "3M+", label: "reddit views" },
    ],
    detailHref: "/work/onyx",
  },
  {
    id: "hackathons",
    org: "college hackathons",
    title: "organizer",
    period: "college",
    current: false,
    summary:
      "ran hackathons in college: sponsors, venue, judging, and the thousand small things that make a weekend actually work for the people who showed up.",
    facts: [{ value: "1200+", label: "attendees" }],
  },
];
