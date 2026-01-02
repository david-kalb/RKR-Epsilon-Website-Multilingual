"use client"

import { useEffect, useRef } from "react"
import { useTranslations } from "next-intl"
import { TrendingUp, Building2, PieChart, LineChart } from "lucide-react"

const serviceIcons = [TrendingUp, Building2, PieChart, LineChart]
const serviceKeys = ["investment", "advisory", "asset", "strategy"] as const

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const t = useTranslations("services")

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
    <section id="services" ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="fade-in-element font-serif text-4xl md:text-5xl font-light text-[#3a4455] mb-8 text-center">
          {t("title")}
        </h2>

        <div className="fade-in-element w-16 h-0.5 bg-[#c9a961] mx-auto mb-16" />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {serviceKeys.map((key, index) => {
            const Icon = serviceIcons[index]
            return (
              <div
                key={key}
                className="fade-in-element group p-8 border border-[#3a4455]/10 hover:border-[#c9a961]/30 transition-all duration-300 bg-[#f8f7f4]/30"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#3a4455] group-hover:bg-[#c9a961] transition-colors duration-300 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#f8f7f4]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl md:text-2xl font-medium text-[#3a4455] mb-3">
                      {t(`items.${key}.title`)}
                    </h3>
                    <p className="text-[#3a4455]/70 leading-relaxed">{t(`items.${key}.description`)}</p>
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
