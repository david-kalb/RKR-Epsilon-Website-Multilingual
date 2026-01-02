"use client"

import { useEffect, useRef } from "react"
import { Building2, LineChart, Briefcase, Globe } from "lucide-react"

export function ExpertiseSection() {
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

  const expertise = [
    {
      icon: Building2,
      title: "Corporate Finance",
      description:
        "Strategic advisory services for mergers, acquisitions, and corporate restructuring to maximize shareholder value.",
    },
    {
      icon: LineChart,
      title: "Investment Management",
      description:
        "Sophisticated portfolio management strategies tailored to your risk profile and long-term financial objectives.",
    },
    {
      icon: Briefcase,
      title: "Wealth Planning",
      description:
        "Comprehensive wealth preservation and succession planning for high-net-worth individuals and families.",
    },
    {
      icon: Globe,
      title: "Global Markets",
      description:
        "Access to international investment opportunities with deep expertise in emerging and developed markets.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="fade-in-element font-serif text-4xl md:text-5xl font-light text-[#3a4455] mb-8 text-center">
          Areas of Expertise
        </h2>

        <div className="fade-in-element w-16 h-0.5 bg-[#c9a961] mx-auto mb-16" />

        <div className="grid md:grid-cols-2 gap-8">
          {expertise.map((area, index) => (
            <div
              key={index}
              className="fade-in-element group flex gap-6 p-8 bg-[#f8f7f4] rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-[#c9a961]/10 rounded-lg flex items-center justify-center group-hover:bg-[#c9a961]/20 transition-colors">
                  <area.icon className="w-7 h-7 text-[#c9a961]" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-light text-[#3a4455] mb-3">{area.title}</h3>
                <p className="text-[#3a4455]/70 leading-relaxed">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
