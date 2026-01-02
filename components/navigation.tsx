"use client"

import { useState, useEffect, useMemo } from "react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { useParams, usePathname } from "next/navigation"
import { getSlugFromPageKey } from "@/config/slugs"
import { LanguageSwitcher } from "./language-switcher"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const t = useTranslations("navigation")
  const params = useParams()
  const pathname = usePathname()

  const locale = (params.locale as "en" | "de") || "en"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Memoize slug calculations to prevent unnecessary recalculations
  const navSlugs = useMemo(() => ({
    home: getSlugFromPageKey("home", locale),
    about: getSlugFromPageKey("about", locale),
    services: getSlugFromPageKey("services", locale),
    faq: getSlugFromPageKey("faq", locale),
    contact: getSlugFromPageKey("contact", locale),
  }), [locale])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#3a4455]/95 backdrop-blur-md shadow-xl border-b border-[#c9a961]/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href={`/${navSlugs.home}`}
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <span className="font-serif text-2xl font-semibold text-[#f8f7f4] tracking-wide transition-all duration-300 group-hover:text-[#c9a961] group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(201,169,97,0.5)]">
              {t("brand")}
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href={`/${navSlugs.about}`}
              className={`relative transition-all duration-300 text-sm font-medium tracking-wide group px-3 py-2 cursor-pointer ${
                pathname.includes(navSlugs.about) ? "text-[#c9a961]" : "text-[#f8f7f4]/90 hover:text-[#c9a961]"
              }`}
            >
              {t("about")}
              <span
                className={`absolute bottom-1 left-0 h-0.5 bg-[#c9a961] transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(201,169,97,0.8)] ${pathname.includes(navSlugs.about) ? "w-full" : "w-0"}`}
              />
            </Link>
            <Link
              href={`/${navSlugs.services}`}
              className={`relative transition-all duration-300 text-sm font-medium tracking-wide group px-3 py-2 cursor-pointer ${
                pathname.includes(navSlugs.services) ? "text-[#c9a961]" : "text-[#f8f7f4]/90 hover:text-[#c9a961]"
              }`}
            >
              {t("services")}
              <span
                className={`absolute bottom-1 left-0 h-0.5 bg-[#c9a961] transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(201,169,97,0.8)] ${pathname.includes(navSlugs.services) ? "w-full" : "w-0"}`}
              />
            </Link>
            <Link
              href={`/${navSlugs.faq}`}
              className={`relative transition-all duration-300 text-sm font-medium tracking-wide group px-3 py-2 cursor-pointer ${
                pathname.includes(navSlugs.faq) ? "text-[#c9a961]" : "text-[#f8f7f4]/90 hover:text-[#c9a961]"
              }`}
            >
              FAQ
              <span
                className={`absolute bottom-1 left-0 h-0.5 bg-[#c9a961] transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(201,169,97,0.8)] ${pathname.includes(navSlugs.faq) ? "w-full" : "w-0"}`}
              />
            </Link>
            <Link
              href={`/${navSlugs.contact}`}
              className={`relative transition-all duration-300 text-sm font-medium tracking-wide group px-3 py-2 cursor-pointer ${
                pathname.includes(navSlugs.contact) ? "text-[#c9a961]" : "text-[#f8f7f4]/90 hover:text-[#c9a961]"
              }`}
            >
              {t("contact")}
              <span
                className={`absolute bottom-1 left-0 h-0.5 bg-[#c9a961] transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(201,169,97,0.8)] ${pathname.includes(navSlugs.contact) ? "w-full" : "w-0"}`}
              />
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  )
}
