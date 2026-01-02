"use client"

import { useParams } from "next/navigation"
import { useRouter, usePathname } from "@/i18n/routing"
import { getAlternateSlug } from "@/config/slugs"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const params = useParams()
  const router = useRouter()
  const pathname = usePathname()

  const currentLocale = (params.locale as "en" | "de") || "en"
  const currentSlug = (params.slug as string) || "home"

  const switchLanguage = () => {
    const targetLocale = currentLocale === "en" ? "de" : "en"
    const targetSlug = getAlternateSlug(currentSlug, currentLocale, targetLocale)

    router.push(`/${targetSlug}`, { locale: targetLocale })
  }

  return (
    <Button
      onClick={switchLanguage}
      variant="ghost"
      size="sm"
      className="group relative text-[#f8f7f4]/90 hover:text-[#c9a961] hover:bg-transparent transition-colors duration-300 cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#c9a961] after:to-[#b89a55] after:transition-all after:duration-300 after:shadow-[0_0_8px_rgba(201,169,97,0.5)] hover:after:w-full"
    >
      <Globe className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
      {currentLocale === "en" ? "DE" : "EN"}
    </Button>
  )
}
