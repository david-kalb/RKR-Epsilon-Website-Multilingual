"use client"

import { useTranslations } from "next-intl"
import { Building2, Mail, Phone, Shield } from "lucide-react"

export function ImprintSection() {
  const t = useTranslations("imprint")

  return (
    <section className="bg-[var(--background)] py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="space-y-12">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-[var(--foreground)]/80 leading-relaxed text-lg">{t("intro")}</p>
          </div>

          {/* Company Information */}
          <div className="border-l-4 border-[var(--gold-accent)] pl-6">
            <div className="flex items-start gap-4 mb-4">
              <Building2 className="w-6 h-6 text-[var(--gold-accent)] mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-serif text-2xl font-bold text-[var(--navy-dark)] mb-3">{t("company.title")}</h2>
                <p className="text-[var(--foreground)]/80 leading-relaxed whitespace-pre-line">
                  {t("company.content")}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-[var(--gold-accent)] pl-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[var(--gold-accent)] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl font-bold text-[var(--navy-dark)] mb-2">
                    {t("contactInfo.email.title")}
                  </h3>
                  <p className="text-[var(--foreground)]/80">{t("contactInfo.email.content")}</p>
                </div>
              </div>
            </div>
            <div className="border-l-4 border-[var(--gold-accent)] pl-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[var(--gold-accent)] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl font-bold text-[var(--navy-dark)] mb-2">
                    {t("contactInfo.phone.title")}
                  </h3>
                  <p className="text-[var(--foreground)]/80">{t("contactInfo.phone.content")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Regulatory Information */}
          <div className="border-l-4 border-[var(--gold-accent)] pl-6">
            <div className="flex items-start gap-4 mb-4">
              <Shield className="w-6 h-6 text-[var(--gold-accent)] mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-serif text-2xl font-bold text-[var(--navy-dark)] mb-3">{t("regulatory.title")}</h2>
                <div className="text-[var(--foreground)]/80 leading-relaxed">
                  <p className="whitespace-pre-line">{t("regulatory.content")}</p>
                  <p className="mt-4">
                    {t("regulatory.bafin_registration_label")}{" "}
                    <a 
                      href={t("regulatory.bafin_link_url")} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[var(--gold-accent)] hover:underline"
                    >
                      {t("regulatory.bafin_link_text")}
                    </a>
                  </p>
                  <p className="whitespace-pre-line mt-4">{t("regulatory.content_continued")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-[var(--navy-dark)]/5 rounded-lg p-8 mt-12">
            <h3 className="font-serif text-xl font-bold text-[var(--navy-dark)] mb-3">{t("disclaimer.title")}</h3>
            <p className="text-[var(--foreground)]/80 leading-relaxed">{t("disclaimer.content")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
