"use client"

import { useEffect, useRef, useState } from "react"
import { useTranslations } from "next-intl"
import Image from "next/image"

interface ParallaxSectionProps {
  namespace?: string
}

export function ParallaxSection({ namespace = "parallax" }: ParallaxSectionProps) {
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const t = useTranslations(namespace)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const scrollProgress = -rect.top / (rect.height + window.innerHeight)
        setScrollY(scrollProgress * 100)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="w-[90%] mx-auto my-16">
      <section ref={sectionRef} className="relative min-h-[300px] overflow-visible w-full">
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="absolute inset-0 bg-[#2a3240]/90 z-10" />
          <Image src="/business-meeting.jpg" alt="Background" fill className="object-cover" priority />
        </div>

        <div className="relative z-20 max-w-6xl mx-auto px-6 lg:px-8 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">{t("heading")}</h2>
              <p className="text-lg leading-relaxed text-gray-200">{t("text")}</p>
            </div>

            <div className="relative h-[550px] md:h-[650px] -my-20 md:-my-28 drop-shadow-2xl">
              <Image
                src="/partnership-handshake.jpg"
                alt="Business partnership"
                fill
                className="object-cover rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
