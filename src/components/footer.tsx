import { site, BASE_PATH } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${BASE_PATH}/logo.png`}
            alt={site.name}
            className="h-10 w-10 rounded-lg object-contain"
          />
          <div>
            <p className="font-semibold">{site.name}</p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {site.tagline}
            </p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. 版權所有。
        </p>
      </div>
    </footer>
  );
}
