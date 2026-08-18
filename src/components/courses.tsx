import { ArrowRight } from "lucide-react";
import { courses } from "@/lib/data";

export function Courses() {
  return (
    <section id="courses" className="mx-auto max-w-6xl px-4 py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">我們的課程</h2>
        <p className="mt-3 text-muted-foreground">
          多元課程，助孩子全方位發展
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((c) => (
          <div
            key={c.id}
            className="group flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.image}
                alt={c.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground">
                {c.age}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold">{c.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {c.description}
              </p>
              <p className="mt-4 text-sm font-semibold text-primary">{c.fee}</p>
              <a
                href={c.link}
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
