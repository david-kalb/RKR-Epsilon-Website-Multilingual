"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { getSlugFromPageKey } from "@/config/slugs"
import { useParams } from "next/navigation"

export function Footer() {
  const t = useTranslations("footer")
  const params = useParams()
  const locale = (params.locale as "en" | "de") || "en"

  return (
    <footer className="bg-[var(--navy-dark)] py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 mb-6 pb-6 border-b border-[var(--silver-accent)]/20">
          <div className="text-[var(--off-white)]/60 text-sm">{t("copyright")}</div>

          <div className="flex items-center space-x-6">
            <Link
              href={`/${getSlugFromPageKey("privacy", locale)}`}
              className="text-[var(--off-white)]/60 hover:text-[var(--gold-accent)] transition-colors text-sm"
            >
              {t("privacy")}
            </Link>
            <Link
              href={`/${getSlugFromPageKey("terms", locale)}`}
              className="text-[var(--off-white)]/60 hover:text-[var(--gold-accent)] transition-colors text-sm"
            >
              {t("terms")}
            </Link>
            <Link
              href={`/${getSlugFromPageKey("imprint", locale)}`}
              className="text-[var(--off-white)]/60 hover:text-[var(--gold-accent)] transition-colors text-sm"
            >
              {t("disclosures")}
            </Link>
          </div>
        </div>

        <div className="w-full">
          <p className="text-[var(--off-white)]/70 text-xs leading-relaxed">{t("disclaimer")}</p>
        </div>
      </div>
    </footer>
  )
}
