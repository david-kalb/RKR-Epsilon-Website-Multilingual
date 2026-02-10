"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"

interface TeamMember {
  id: string
  imageSrc: string
}

const teamMembers: TeamMember[] = [
  { id: "ceo", imageSrc: "/team/ceo-v2.png" },
  { id: "cio", imageSrc: "/team/cio-v2.png" },
  { id: "cfo", imageSrc: "/team/cfo-v2.png" },
  { id: "director", imageSrc: "/team/director-v2.png" },
]

export function TeamSection() {
  const t = useTranslations("aboutPage")

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Leadership Section */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            {t("teamSection.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("teamSection.description")}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-[var(--navy-dark)] to-[var(--navy-light)]">
                <Image
                  src={member.imageSrc}
                  alt={t(`teamSection.members.${member.id}.name`)}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0" />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif text-xl text-foreground mb-1 group-hover:text-[var(--gold-accent)] transition-colors">
                  {t(`teamSection.members.${member.id}.name`)}
                </h3>
                <p className="text-sm text-[var(--gold-accent)] font-medium mb-3">
                  {t(`teamSection.members.${member.id}.role`)}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`teamSection.members.${member.id}.bio`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-br from-[var(--navy-dark)] via-[var(--navy-primary)] to-[var(--navy-light)] rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">{t("teamSection.values.title")}</h2>
            <p className="text-lg text-[var(--off-white)]/80 max-w-2xl mx-auto">
              {t("teamSection.values.description")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--gold-accent)]/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--gold-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-2">{t("teamSection.values.integrity.title")}</h3>
              <p className="text-sm text-[var(--off-white)]/70">{t("teamSection.values.integrity.description")}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--gold-accent)]/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--gold-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-2">{t("teamSection.values.excellence.title")}</h3>
              <p className="text-sm text-[var(--off-white)]/70">{t("teamSection.values.excellence.description")}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--gold-accent)]/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--gold-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-2">{t("teamSection.values.collaboration.title")}</h3>
              <p className="text-sm text-[var(--off-white)]/70">{t("teamSection.values.collaboration.description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
