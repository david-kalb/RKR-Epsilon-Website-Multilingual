import { redirect } from "next/navigation"
import { getSlugFromPageKey } from "@/config/slugs"

type Props = {
  params: Promise<{
    locale: "en" | "de"
  }>
}

export default async function LocaleRoot({ params }: Props) {
  const { locale } = await params
  const homeSlug = getSlugFromPageKey("home", locale)

  redirect(`/${locale}/${homeSlug}`)
}
