"use client"

import { useTranslations } from "next-intl"
import { Sparkles } from "lucide-react"

export function ComingSoonContent() {
  const t = useTranslations("comingSoon")

  return (
    <div className="min-h-screen bg-[var(--navy-dark)] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in duration-700">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--gold-accent)]/20 border-2 border-[var(--gold-accent)] mb-4">
          <Sparkles className="w-10 h-10 text-[var(--gold-accent)]" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">{t("content.title")}</h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">{t("content.description")}</p>
        <div className="pt-8">
          <p className="text-[var(--gold-accent)] font-semibold text-lg">{t("welcome")}</p>
        </div>
      </div>
    </div>
  )
}
