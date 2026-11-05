const stats = [
  { value: "12", label: "Stakeholder networks", sublabel: "on one shared talent graph" },
  { value: "13", label: "Purpose-built workspaces", sublabel: "one secure login plane" },
  { value: "7", label: "Lifecycle stages", sublabel: "orchestrated end-to-end by AI" },
  { value: "7+", label: "Shared platform services", sublabel: "AI, workflow, payments and more" },
]

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-ink-foreground">
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero opacity-70" />
      <div className="container-site relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-flame">Built for scale</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Transforming talent at <span className="text-gradient-brand">scale</span>
          </h2>
          <p className="mt-4 text-lg text-white/65">
            Bridging the skill-employability gap with AI-powered talent orchestration.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center">
              <p className="font-display text-5xl font-extrabold text-gradient-brand">{s.value}</p>
              <p className="mt-3 font-semibold text-white">{s.label}</p>
              <p className="mt-1 text-sm text-white/55">{s.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
