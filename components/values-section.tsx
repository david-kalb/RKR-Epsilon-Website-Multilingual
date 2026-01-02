"use client"

import { useEffect, useRef } from "react"
import { Shield, Award, TrendingUp, Heart } from "lucide-react"

export function ValuesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-in-element")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We uphold the highest ethical standards in every interaction, ensuring transparency and honesty guide all our decisions.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Our commitment to excellence drives us to deliver superior results and exceed client expectations consistently.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description:
        "We embrace innovative solutions and cutting-edge strategies to stay ahead in an ever-evolving financial landscape.",
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description:
        "Your success is our priority. We build lasting relationships based on trust, understanding, and mutual respect.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[#f8f7f4]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="fade-in-element font-serif text-4xl md:text-5xl font-light text-[#3a4455] mb-8 text-center">
          Our Core Values
        </h2>

        <div className="fade-in-element w-16 h-0.5 bg-[#c9a961] mx-auto mb-16" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="fade-in-element group text-center p-6 bg-white rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#c9a961]/10 rounded-full mb-6 group-hover:bg-[#c9a961]/20 transition-colors">
                <value.icon className="w-8 h-8 text-[#c9a961]" />
              </div>
              <h3 className="font-serif text-xl font-light text-[#3a4455] mb-4">{value.title}</h3>
              <p className="text-[#3a4455]/70 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
