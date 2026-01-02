"use client"

import type React from "react"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Lock, Sparkles } from "lucide-react"

const CORRECT_PASSWORD = "Rkr#2025"

export function ComingSoonContent() {
  const t = useTranslations("comingSoon")
  const [password, setPassword] = useState("")
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === CORRECT_PASSWORD) {
      setIsUnlocked(true)
      setError(false)
    } else {
      setError(true)
      setTimeout(() => setError(false), 3000)
    }
  }

  if (isUnlocked) {
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

  return (
    <div className="min-h-screen bg-[var(--navy-dark)] flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--gold-accent)]/20 border-2 border-[var(--gold-accent)] mb-4">
            <Lock className="w-10 h-10 text-[var(--gold-accent)]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">{t("title")}</h1>
          <p className="text-xl text-muted-foreground">{t("subtitle")}</p>
          <p className="text-muted-foreground">{t("description")}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="password"
              placeholder={t("passwordPlaceholder")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 bg-[var(--navy-primary)]/50 border-[var(--navy-light)] text-foreground placeholder:text-muted-foreground focus:border-[var(--gold-accent)] focus:ring-[var(--gold-accent)]/20"
            />
            {error && <p className="text-destructive text-sm animate-in fade-in duration-300">{t("error")}</p>}
          </div>
          <Button
            type="submit"
            className="w-full h-12 bg-[var(--gold-accent)] hover:bg-[var(--gold-muted)] text-[var(--navy-dark)] font-semibold transition-all duration-300 hover:scale-105"
          >
            {t("submit")}
          </Button>
        </form>

        <div className="text-center pt-8">
          <div className="inline-flex items-center gap-2 text-muted-foreground text-sm">
            <div className="w-2 h-2 rounded-full bg-[var(--gold-accent)] animate-pulse" />
            <span>RKR Epsilon</span>
          </div>
        </div>
      </div>
    </div>
  )
}
