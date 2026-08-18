import { Clock, Globe, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">聯絡我們</h2>
        <p className="mt-3 text-muted-foreground">
          歡迎查詢課程或預約免費試堂
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
        <div className="flex items-center gap-4 rounded-2xl border bg-card p-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">地址</p>
            <p className="text-sm font-medium">{site.address}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border bg-card p-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">電話</p>
            <p className="text-sm font-medium">{site.phone}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border bg-card p-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <MessageCircle className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">WhatsApp</p>
            <p className="text-sm font-medium">{site.whatsapp}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border bg-card p-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">電郵</p>
            <p className="text-sm font-medium">{site.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border bg-card p-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Globe className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">網站</p>
            <p className="text-sm font-medium">{site.website}</p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-2xl border bg-card p-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">營業時間</p>
            {site.hours.map((h) => (
              <p key={h.day} className="text-sm font-medium">
                {h.day}：{h.time}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
