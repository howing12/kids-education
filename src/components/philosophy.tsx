import { site } from "@/lib/data";

export function Philosophy() {
  return (
    <section id="philosophy" className="bg-secondary/50 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">教學理念</h2>
          <p className="mt-3 text-muted-foreground">
            我們相信，每個孩子都是獨一無二的。
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {site.philosophy.map((p, i) => (
            <div
              key={p.title}
              className="rounded-2xl border bg-card p-6 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-xl font-bold text-primary">
                {i + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
