import type { ContributionYear } from "@/app/lib/contributions";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// GitHub hands us a 0–4 level per day; we only restyle it into our own ramp.
const FILL = [
  "bg-[var(--data-0)]",
  "bg-[var(--data-1)]",
  "bg-[var(--data-2)]",
  "bg-[var(--data-3)]",
  "bg-[var(--data-4)]",
];

const fmt = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

export default function ContributionHeatmap({ data }: { data: ContributionYear }) {
  const { days } = data;
  if (!days.length) return null;

  // Pad to a Sunday-aligned grid, then chunk into columns of 7.
  const lead = new Date(days[0].date + "T00:00:00Z").getUTCDay();
  const cells: (typeof days[number] | null)[] = [...Array(lead).fill(null), ...days];
  const weeks: (typeof days[number] | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

  const monthLabels = weeks.map((w, i) => {
    const first = w.find(Boolean);
    if (!first) return null;
    const d = new Date(first.date + "T00:00:00Z");
    if (d.getUTCDate() > 7) return null;
    const prev = weeks[i - 1]?.find(Boolean);
    if (prev && new Date(prev.date + "T00:00:00Z").getUTCMonth() === d.getUTCMonth()) return null;
    return MONTHS[d.getUTCMonth()];
  });

  return (
    <figure className="m-0">
      <div className="overflow-x-auto pb-1 [scrollbar-width:thin]">
        <div className="inline-block min-w-full">
          <div className="flex gap-[3px] pl-9">
            {monthLabels.map((m, i) => (
              <div key={i} className="w-[11px] shrink-0 font-mono text-[10px] text-gray-400">
                {m ? <span className="whitespace-nowrap">{m}</span> : null}
              </div>
            ))}
          </div>

          <div className="mt-1.5 flex">
            <div className="flex w-9 shrink-0 flex-col justify-between py-[1px] pr-2 font-mono text-[10px] text-gray-400">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>

            <div className="flex gap-[3px]">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {Array.from({ length: 7 }).map((_, di) => {
                    const day = week[di];
                    if (!day) return <div key={di} className="h-[11px] w-[11px]" />;
                    return (
                      <div
                        key={di}
                        title={`${day.count || "No"} contribution${day.count === 1 ? "" : "s"} on ${fmt(day.date)}`}
                        className={`cell-in h-[11px] w-[11px] rounded-[2px] ${FILL[day.level] ?? FILL[0]}`}
                        style={{ animationDelay: `${wi * 12}ms` }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <span className="text-xs text-gray-500">
          every commit, pull request and review · {fmt(data.from)} → {fmt(data.to)}
          {!data.live && " · cached snapshot"}
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] text-gray-400">
          less
          {FILL.map((f, i) => (
            <span key={i} className={`h-[11px] w-[11px] rounded-[2px] ${f}`} />
          ))}
          more
        </span>
      </figcaption>
    </figure>
  );
}
