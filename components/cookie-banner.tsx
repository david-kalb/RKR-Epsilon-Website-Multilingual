"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieBanner() {
  const t = useTranslations("cookies")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-[var(--navy-primary)] rounded-lg shadow-2xl border-2 border-[var(--gold-accent)]/30 max-w-sm">
        <div className="p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="text-base font-semibold text-[var(--off-white)]">{t("title")}</h3>
            <button
              onClick={handleDecline}
              className="text-[var(--gold-accent)] hover:text-[var(--gold-muted)] hover:scale-110 hover:rotate-90 transition-all duration-300"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-[var(--off-white)]/90 leading-relaxed mb-4">{t("description")}</p>
          <div className="flex items-center gap-2">
            <Button
              onClick={handleDecline}
              variant="outline"
              className="flex-1 border-[var(--gold-accent)] text-[var(--gold-accent)] hover:bg-[var(--gold-accent)] hover:text-[var(--navy-dark)] hover:scale-105 hover:shadow-lg hover:shadow-[var(--gold-accent)]/20 hover:border-[var(--gold-accent)] transition-all duration-300 bg-transparent"
            >
              {t("decline")}
            </Button>
            <Button
              onClick={handleAccept}
              className="flex-1 bg-[var(--gold-accent)] text-[var(--navy-dark)] hover:bg-[var(--gold-muted)] hover:scale-110 hover:shadow-xl hover:shadow-[var(--gold-accent)]/40 hover:brightness-110 transition-all duration-300 font-semibold"
            >
              {t("accept")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
