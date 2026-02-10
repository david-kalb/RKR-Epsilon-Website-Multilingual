"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"

export function ServicesPageHero() {
  const t = useTranslations("servicesPage")

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[var(--navy-dark)] via-[var(--navy-primary)] to-[var(--navy-light)] text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/financial-data-analysis.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy-dark)]/60 via-transparent to-[var(--navy-dark)]/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-20">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-balance">{t("hero.title")}</h1>
        <div className="w-24 h-0.5 bg-[var(--gold-accent)] mx-auto mb-8" />
        <p className="text-xl md:text-2xl text-[var(--off-white)]/90 max-w-3xl mx-auto leading-relaxed text-pretty">
          {t("hero.description")}
        </p>
      </div>
    </section>
  )
}
