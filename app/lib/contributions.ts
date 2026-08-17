import snapshot from "@/public/data/contributions.json";

export type ContributionDay = { date: string; count: number; level: number };

export type ContributionYear = {
  total: number;
  from: string;
  to: string;
  days: ContributionDay[];
  /** false when the live fetch failed and the committed snapshot is being served. */
  live: boolean;
};

const GITHUB_USER = "rohoswagger";

// GitHub's own profile-calendar partial. No token, no scraping of a rendered
// page. It's the same endpoint the profile itself calls, so the number here is
// exactly the one a visitor sees on github.com/rohoswagger.
const ENDPOINT = `https://github.com/users/${GITHUB_USER}/contributions`;

function parse(html: string): ContributionYear | null {
  const total = html.match(/<h2[^>]*>\s*([\d,]+)\s+contributions/i);
  const range = html.match(/data-from="([\d-]+)[^"]*"\s+data-to="([\d-]+)/);
  if (!total) return null;

  // id -> count, read off the screen-reader tooltips ("11 contributions on August 17th.")
  const counts = new Map<string, number>();
  const tips = Array.from(html.matchAll(/<tool-tip[^>]*\bfor="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g));
  for (const [, id, text] of tips) {
    const m = text.match(/^([\d,]+)\s+contribution/i);
    counts.set(id, m ? Number(m[1].replace(/,/g, "")) : 0);
  }

  const days: ContributionDay[] = [];
  const cells = Array.from(
    html.matchAll(/<td\b[^>]*class="[^"]*ContributionCalendar-day[^"]*"[^>]*>/g)
  );
  for (const [tag] of cells) {
    const date = tag.match(/data-date="([\d-]+)"/)?.[1];
    if (!date) continue;
    const id = tag.match(/\bid="([^"]+)"/)?.[1] ?? "";
    const level = Number(tag.match(/data-level="(\d+)"/)?.[1] ?? 0);
    days.push({ date, count: counts.get(id) ?? 0, level });
  }

  if (days.length < 300) return null;
  days.sort((a, b) => a.date.localeCompare(b.date));

  return {
    total: Number(total[1].replace(/,/g, "")),
    from: range?.[1] ?? days[0].date,
    to: range?.[2] ?? days[days.length - 1].date,
    days,
    live: true,
  };
}

function fallback(): ContributionYear {
  const days = (snapshot.days as { d: string; c: number }[]).map((x) => ({
    date: x.d,
    count: x.c,
    // Approximate GitHub's 0–4 banding for the committed snapshot.
    level: x.c === 0 ? 0 : x.c <= 4 ? 1 : x.c <= 9 ? 2 : x.c <= 19 ? 3 : 4,
  }));
  return {
    total: snapshot.publicTotal ?? snapshot.total,
    from: snapshot.from,
    to: snapshot.to,
    days,
    live: false,
  };
}

export async function getContributions(): Promise<ContributionYear> {
  try {
    const res = await fetch(ENDPOINT, {
      headers: {
        // Without a UA GitHub sometimes serves a trimmed response.
        "User-Agent": "whoami-site (+https://rohoswagger.com)",
        Accept: "text/html",
      },
      // Re-pull hourly; the page stays static between revalidations.
      next: { revalidate: 3600 },
    });
    if (!res.ok) return fallback();
    return parse(await res.text()) ?? fallback();
  } catch {
    return fallback();
  }
}
