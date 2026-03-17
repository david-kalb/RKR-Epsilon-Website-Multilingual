export type PageKey =
  | "home"
  | "about"
  | "services"
  | "contact"
  | "privacy"
  | "terms"
  | "imprint"
  | "coming-soon"
  | "faq"
  | "maintenance"
  | "depot-application-terms"
  | "consumer-information-ffg"
  | "contract-copy-and-price-sheet"
  | "opening-and-acceptance-times"
  | "price-sheet"

export const slugMap: Record<PageKey, Record<"en" | "de", string>> = {
  home: {
    en: "home",
    de: "startseite",
  },
  about: {
    en: "about-us",
    de: "ueber-uns",
  },
  services: {
    en: "services",
    de: "dienstleistungen",
  },
  contact: {
    en: "contact",
    de: "kontakt",
  },
  privacy: {
    en: "privacy-policy",
    de: "datenschutz",
  },
  terms: {
    en: "terms-of-service",
    de: "nutzungsbedingungen",
  },
  maintenance: {
    en: "maintenance",
    de: "wartungsarbeiten",
  },
  imprint: {
    en: "disclosures",
    de: "impressum",
  },
  "coming-soon": {
    en: "coming-soon",
    de: "bald-verfuegbar",
  },
  faq: {
    en: "faq",
    de: "haeufige-fragen",
  },
  "depot-application-terms": {
    en: "depot-application-terms",
    de: "agb-depotantrag",
  },
  "consumer-information-ffg": {
    en: "consumer-information-ffg",
    de: "verbraucherinformation-ffg",
  },
  "contract-copy-and-price-sheet": {
    en: "contract-copy-and-price-sheet",
    de: "vertragsausfertigung-und-preisblatt",
  },
  "opening-and-acceptance-times": {
    en: "opening-and-acceptance-times",
    de: "oeffnungs-und-annahmezeiten",
  },
  "price-sheet": {
    en: "price-sheet",
    de: "preisverzeichnis",
  },
}

export function getPageKeyFromSlug(slug: string, locale: "en" | "de"): PageKey | null {
  for (const [key, slugs] of Object.entries(slugMap)) {
    if (slugs[locale] === slug) {
      return key as PageKey
    }
  }
  return null
}

export function getSlugFromPageKey(pageKey: PageKey, locale: "en" | "de"): string {
  return slugMap[pageKey][locale]
}

export function getAlternateSlug(currentSlug: string, currentLocale: "en" | "de", targetLocale: "en" | "de"): string {
  const pageKey = getPageKeyFromSlug(currentSlug, currentLocale)
  if (!pageKey) return currentSlug
  return slugMap[pageKey][targetLocale]
}
