"use client"

import { useTranslations } from "next-intl"
import { Shield, Lock, Eye, FileText } from "lucide-react"

export function PrivacySection() {
  const t = useTranslations("privacy")

  return (
    <section className="bg-[var(--background)] py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="space-y-12">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-[var(--foreground)]/80 leading-relaxed text-lg">{t("intro")}</p>
          </div>

          {/* Data Collection */}
          <div className="border-l-4 border-[var(--gold-accent)] pl-6">
            <div className="flex items-start gap-4 mb-4">
              <FileText className="w-6 h-6 text-[var(--gold-accent)] mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-serif text-2xl font-bold text-[var(--navy-dark)] mb-3">
                  {t("dataCollection.title")}
                </h2>
                <p className="text-[var(--foreground)]/80 leading-relaxed">{t("dataCollection.content")}</p>
              </div>
            </div>
          </div>

          {/* Data Usage */}
          <div className="border-l-4 border-[var(--gold-accent)] pl-6">
            <div className="flex items-start gap-4 mb-4">
              <Eye className="w-6 h-6 text-[var(--gold-accent)] mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-serif text-2xl font-bold text-[var(--navy-dark)] mb-3">{t("dataUsage.title")}</h2>
                <p className="text-[var(--foreground)]/80 leading-relaxed">{t("dataUsage.content")}</p>
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div className="border-l-4 border-[var(--gold-accent)] pl-6">
            <div className="flex items-start gap-4 mb-4">
              <Lock className="w-6 h-6 text-[var(--gold-accent)] mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-serif text-2xl font-bold text-[var(--navy-dark)] mb-3">
                  {t("dataSecurity.title")}
                </h2>
                <p className="text-[var(--foreground)]/80 leading-relaxed">{t("dataSecurity.content")}</p>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="border-l-4 border-[var(--gold-accent)] pl-6">
            <div className="flex items-start gap-4 mb-4">
              <Shield className="w-6 h-6 text-[var(--gold-accent)] mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-serif text-2xl font-bold text-[var(--navy-dark)] mb-3">{t("yourRights.title")}</h2>
                <p className="text-[var(--foreground)]/80 leading-relaxed">{t("yourRights.content")}</p>
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
