"use client"

import { useEffect, useRef } from "react"
import { Target, Users } from "lucide-react"

export function MissionCultureSection() {
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

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="fade-in-element font-serif text-4xl md:text-5xl font-light text-[#3a4455] mb-8 text-center">
          We Help Clients Improve Financial Performance
        </h2>

        <div className="fade-in-element w-16 h-0.5 bg-[#c9a961] mx-auto mb-16" />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="fade-in-element group bg-[#f8f7f4] p-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#c9a961]/10 rounded-lg group-hover:bg-[#c9a961]/20 transition-colors">
                <Target className="w-6 h-6 text-[#c9a961]" />
              </div>
              <h3 className="font-serif text-2xl font-light text-[#3a4455]">Mission</h3>
            </div>
            <p className="text-[#3a4455]/80 leading-relaxed">
              RKR Epsilon helps clients improve their financial performance and achieve their strategic initiatives. Our
              broad range of services combined with our teams' expert advice enables us to build long-term,
              mutually-beneficial relationships. We consider ourselves an extension of each client's team and view their
              goals as our own.
            </p>
          </div>

          {/* Culture Card */}
          <div className="fade-in-element group bg-[#f8f7f4] p-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#c9a961]/10 rounded-lg group-hover:bg-[#c9a961]/20 transition-colors">
                <Users className="w-6 h-6 text-[#c9a961]" />
              </div>
              <h3 className="font-serif text-2xl font-light text-[#3a4455]">Culture</h3>
            </div>
            <p className="text-[#3a4455]/80 leading-relaxed">
              Our corporate culture is based on trust, integrity, and doing what is in the best interest of our clients.
              To perpetuate that culture, we hire and train talented people who share our principles and are committed
              to following the Chartered Financial Analyst Code of Ethics.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
