import { site } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight">關於我們</h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {site.intro}
        </p>
      </div>
    </section>
  );
}
