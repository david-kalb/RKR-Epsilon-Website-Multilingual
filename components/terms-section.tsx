"use client"

import { useTranslations } from "next-intl"
import { FileCheck, AlertCircle, Scale, RefreshCw } from "lucide-react"

export function TermsSection() {
  const t = useTranslations("terms")

  return (
    <section className="bg-[var(--background)] py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="space-y-12">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-[var(--foreground)]/80 leading-relaxed text-lg">{t("intro")}</p>
          </div>

          {/* Acceptance of Terms */}
          <div className="border-l-4 border-[var(--gold-accent)] pl-6">
            <div className="flex items-start gap-4 mb-4">
              <FileCheck className="w-6 h-6 text-[var(--gold-accent)] mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-serif text-2xl font-bold text-[var(--navy-dark)] mb-3">{t("acceptance.title")}</h2>
                <p className="text-[var(--foreground)]/80 leading-relaxed">{t("acceptance.content")}</p>
              </div>
            </div>
          </div>

          {/* Services Description */}
          <div className="border-l-4 border-[var(--gold-accent)] pl-6">
            <div className="flex items-start gap-4 mb-4">
              <Scale className="w-6 h-6 text-[var(--gold-accent)] mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-serif text-2xl font-bold text-[var(--navy-dark)] mb-3">{t("services.title")}</h2>
                <p className="text-[var(--foreground)]/80 leading-relaxed">{t("services.content")}</p>
              </div>
            </div>
          </div>

          {/* Limitations */}
          <div className="border-l-4 border-[var(--gold-accent)] pl-6">
            <div className="flex items-start gap-4 mb-4">
              <AlertCircle className="w-6 h-6 text-[var(--gold-accent)] mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-serif text-2xl font-bold text-[var(--navy-dark)] mb-3">{t("limitations.title")}</h2>
                <p className="text-[var(--foreground)]/80 leading-relaxed">{t("limitations.content")}</p>
              </div>
            </div>
          </div>

          {/* Modifications */}
          <div className="border-l-4 border-[var(--gold-accent)] pl-6">
            <div className="flex items-start gap-4 mb-4">
              <RefreshCw className="w-6 h-6 text-[var(--gold-accent)] mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-serif text-2xl font-bold text-[var(--navy-dark)] mb-3">
                  {t("modifications.title")}
                </h2>
                <p className="text-[var(--foreground)]/80 leading-relaxed">{t("modifications.content")}</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-[var(--navy-dark)]/5 rounded-lg p-8 mt-12">
            <h3 className="font-serif text-xl font-bold text-[var(--navy-dark)] mb-3">{t("contact.title")}</h3>
            <p className="text-[var(--foreground)]/80 leading-relaxed">{t("contact.content")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
