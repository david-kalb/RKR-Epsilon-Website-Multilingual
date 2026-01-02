"use client"

import { useTranslations } from "next-intl"

export function IntroSection() {
  const t = useTranslations("intro")

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">{t("title")}</h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">{t("description")}</p>
      </div>
    </section>
  )
}
