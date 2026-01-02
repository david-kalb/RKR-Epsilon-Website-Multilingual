"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"

export function AboutDetailSection() {
  const t = useTranslations("aboutPage")

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
            <Image src="/modern-corporate-office.jpg" alt="RKR Epsilon Office" fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-6">{t("story.title")}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">{t("story.paragraph1")}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("story.paragraph2")}</p>
          </div>
        </div>

        {/* Our Team */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-6">{t("team.title")}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">{t("team.paragraph1")}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("team.paragraph2")}</p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl order-1 md:order-2">
            <Image src="/team-collaboration.jpg" alt="RKR Epsilon Team" fill className="object-cover" />
          </div>
        </div>

        {/* Our Approach */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
            <Image src="/strategic-planning.jpg" alt="Our Approach" fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-6">{t("approach.title")}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">{t("approach.paragraph1")}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("approach.paragraph2")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
