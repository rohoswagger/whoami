import Link from "next/link";
import { ROLES, type Role } from "@/app/data/work";

function Facts({ role }: { role: Role }) {
  return (
    <div className="mt-5 flex flex-wrap gap-x-10 gap-y-4">
      {role.facts.map((f) => (
        <div key={f.label}>
          <div className="font-mono text-xl font-semibold tabular-nums text-gray-900 md:text-2xl">
            {f.value}
          </div>
          <div className="mt-0.5 text-xs text-gray-500">{f.label}</div>
        </div>
      ))}
    </div>
  );
}

function Body({ role }: { role: Role }) {
  return (
    <>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="text-2xl font-semibold text-gray-900 md:text-3xl">{role.org}</h3>
        <span className="text-sm text-gray-500 md:text-base">{role.title}</span>
        {role.current && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-blue-700">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            now
          </span>
        )}
      </div>

      <p className="mt-1 font-mono text-xs text-gray-400">{role.period}</p>

      <p className="mt-4 max-w-[68ch] text-base leading-relaxed text-gray-600">{role.summary}</p>

      <Facts role={role} />
    </>
  );
}

function Entry({ role }: { role: Role }) {
  return (
    <li className="relative pb-14 pl-8 last:pb-0 md:pl-12">
      <span
        aria-hidden
        className={`absolute left-0 top-[9px] h-[9px] w-[9px] -translate-x-1/2 rounded-full ${
          role.current ? "bg-blue-600 ring-4 ring-blue-100" : "bg-gray-300"
        }`}
      />

      {role.detailHref ? (
        <Link
          href={role.detailHref}
          className="reveal group block rounded-xl outline-none ring-offset-4 transition-transform duration-300 ease-expo hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-blue-600"
        >
          <Body role={role} />
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-blue-700">
            see the breakdown
            <span
              aria-hidden
              className="transition-transform duration-300 ease-expo group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </Link>
      ) : (
        <div className="reveal">
          <Body role={role} />
        </div>
      )}
    </li>
  );
}

export default function WorkTimeline() {
  return (
    <section aria-label="Experience">
      <h2 className="text-sm font-medium text-gray-500">experience</h2>

      <ol className="relative mt-8 list-none">
        <span
          aria-hidden
          className="spine absolute bottom-0 left-0 top-2 w-px bg-gradient-to-b from-gray-300 to-gray-100"
        />
        {ROLES.map((role) => (
          <Entry key={role.id} role={role} />
        ))}
      </ol>
    </section>
  );
}
