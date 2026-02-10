"use client"

import { useEffect, useRef } from "react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { TrendingUp, Building2, PieChart, LineChart, CheckCircle } from "lucide-react"

const serviceIcons = [TrendingUp, Building2, PieChart, LineChart]
const serviceKeys = ["investment", "advisory", "asset", "strategy"] as const

const serviceImages: Record<(typeof serviceKeys)[number], string> = {
  investment: "/business-meeting.jpg",
  advisory: "/images/consultation.jpg",
  asset: "/financial-data-analysis.jpg",
  strategy: "/strategic-planning.jpg",
}

export function ServicesDetailSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const t = useTranslations("servicesPage")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-in-element")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[var(--off-white)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="fade-in-element font-serif text-4xl md:text-5xl font-light text-[var(--navy-dark)] mb-6">
            {t("detail.title")}
          </h2>
          <div className="fade-in-element w-16 h-0.5 bg-[var(--gold-accent)] mx-auto mb-6" />
          <p className="fade-in-element text-lg text-[var(--navy-primary)]/70 max-w-3xl mx-auto">
            {t("detail.subtitle")}
          </p>
        </div>

        <div className="space-y-16">
          {serviceKeys.map((key, index) => {
            const Icon = serviceIcons[index]
            const isEven = index % 2 === 0

            return (
              <div
                key={key}
                className={`fade-in-element flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-[var(--navy-dark)] flex items-center justify-center">
                      <Icon className="w-8 h-8 text-[var(--gold-accent)]" />
                    </div>
                    <h3 className="font-serif text-3xl md:text-4xl font-medium text-[var(--navy-dark)]">
                      {t(`services.${key}.title`)}
                    </h3>
                  </div>

                  <p className="text-lg text-[var(--navy-primary)]/80 leading-relaxed mb-6">
                    {t(`services.${key}.fullDescription`)}
                  </p>

                  <ul className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[var(--gold-accent)] flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--navy-primary)]/70">{t(`services.${key}.features.${i}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl ring-1 ring-[var(--navy-dark)]/10">
                    <Image
                      src={serviceImages[key]}
                      alt={t(`services.${key}.title`)}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
