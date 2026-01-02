"use client"

import { useTranslations } from "next-intl"

export function IntroSection() {
  const t = useTranslations("intro")

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">{t("title")}</h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">{t("description")}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="space-y-2">
            <div className="text-4xl font-serif text-[#c9a961]">{t("stats.experience.value")}</div>
            <div className="text-sm uppercase tracking-wider text-muted-foreground">{t("stats.experience.label")}</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-serif text-[#c9a961]">{t("stats.clients.value")}</div>
            <div className="text-sm uppercase tracking-wider text-muted-foreground">{t("stats.clients.label")}</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-serif text-[#c9a961]">{t("stats.assets.value")}</div>
            <div className="text-sm uppercase tracking-wider text-muted-foreground">{t("stats.assets.label")}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
