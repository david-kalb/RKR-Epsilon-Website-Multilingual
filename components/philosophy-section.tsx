"use client"

import { useEffect, useRef } from "react"
import { useTranslations } from "next-intl"

const philosophyKeys = ["vision", "strategy", "service"] as const

export function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const t = useTranslations("philosophy")

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
    <section id="philosophy" ref={sectionRef} className="py-24 md:py-32 bg-[#3a4455] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(30deg, #c9a961 1px, transparent 1px),
                           linear-gradient(-30deg, #c9a961 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="fade-in-element font-serif text-4xl md:text-5xl font-light text-[#f8f7f4] mb-8 text-center">
          {t("title")}
        </h2>

        <div className="fade-in-element w-16 h-0.5 bg-[#c9a961] mx-auto mb-12" />

        <div className="space-y-8">
          {philosophyKeys.map((key) => (
            <div key={key} className="fade-in-element bg-[#2a3240]/50 backdrop-blur-sm p-8 border border-[#c9a961]/20">
              <h3 className="font-serif text-2xl font-medium text-[#c9a961] mb-4">{t(`items.${key}.title`)}</h3>
              <p className="text-[#f8f7f4]/80 leading-relaxed">{t(`items.${key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
