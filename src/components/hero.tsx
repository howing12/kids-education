import { Sparkles } from "lucide-react";
import { site, BASE_PATH } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="bg-gradient-to-br from-primary/10 via-secondary to-accent/10 px-4 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl bg-background shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${BASE_PATH}/logo.png`}
            alt={site.name}
            className="h-full w-full object-contain"
          />
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
          {site.name}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
          {site.tagline}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#courses"
            className="w-full rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
          >
            探索課程
          </a>
          <a
            href="#contact"
            className="w-full rounded-xl border bg-background/70 px-6 py-3 font-medium transition-colors hover:bg-muted sm:w-auto"
          >
            預約試堂
          </a>
        </div>
      </div>
    </section>
  );
}
