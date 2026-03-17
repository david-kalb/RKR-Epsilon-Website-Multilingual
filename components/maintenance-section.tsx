"use client"

import { useTranslations } from "next-intl"
import { Wrench } from "lucide-react"

export function MaintenanceSection() {
  const t = useTranslations("maintenance")

  return (
    <section className="bg-[var(--background)] py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="space-y-12">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-[var(--foreground)]/80 leading-relaxed text-lg">{t("intro")}</p>
          </div>

          {/* Maintenance Information */}
          <div className="border-l-4 border-[var(--gold-accent)] pl-6">
            <div className="flex items-start gap-4 mb-4">
              <Wrench className="w-6 h-6 text-[var(--gold-accent)] mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-serif text-2xl font-bold text-[var(--navy-dark)] mb-3">{t("info.title")}</h2>
                <p className="text-[var(--foreground)]/80 leading-relaxed whitespace-pre-line">
                  {t("info.content")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
