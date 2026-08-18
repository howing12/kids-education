import { teachers } from "@/lib/data";

export function Teachers() {
  return (
    <section id="teachers" className="bg-secondary/50 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">師資介紹</h2>
          <p className="mt-3 text-muted-foreground">
            專業、有愛心嘅教學團隊
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {teachers.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl border bg-card p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-primary/10">
                {t.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-2xl font-bold text-primary">
                    {t.name.charAt(0)}
                  </span>
                )}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{t.name}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{t.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t.bio}
              </p>
            </div>
          ))}

          <div className="flex flex-col justify-center rounded-2xl border bg-card p-6 text-center shadow-sm">
            <h3 className="text-lg font-semibold">教學團隊</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              所有導師均具備教育熱誠及相關經驗，並經專業培訓，懂得如何與小朋友溝通及引導學習。我們重視耐心與鼓勵，讓每位孩子都能安心學習。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
