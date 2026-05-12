import { CountUp } from "@/components/ceros/count-up"
import { FadeInSection } from "@/components/ceros/fade-in-section"

interface StatsSectionProps {
  title?: string
  attendees?: number
  speakers?: number
  exhibitors?: number
  techBuyers?: number
  footnote?: string
  learnMoreLink?: string
  learnMoreText?: string
}

export function StatsSection({ 
  title = "ICSC LAS VEGAS",
  attendees = 25000,
  speakers = 100,
  exhibitors = 600,
  techBuyers = 200,
  footnote = "Figures represent combined totals from ICSC LAS VEGAS and ICSC+PROPTECH",
  learnMoreLink = "#",
  learnMoreText = "Learn more about ICSC LAS VEGAS"
}: StatsSectionProps) {
  const stats = [
    { value: attendees, suffix: "+", label: "ATTENDEES" },
    { value: speakers, suffix: "+", label: "SPEAKERS" },
    { value: exhibitors, suffix: "+", label: "EXHIBITORS" },
    { value: techBuyers, suffix: "+", label: "TECH BUYERS" },
  ]

  return (
    <section className="relative bg-[#4040bf] py-20 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-3 bg-[#6b7aab]" />

      <div className="container mx-auto px-6">
        <FadeInSection>
          <h3 className="text-white text-2xl md:text-3xl font-light mb-12 tracking-wide">{title}</h3>
        </FadeInSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <FadeInSection key={stat.label} delay={200 + index * 200} className="text-center">
              <div className="text-[#7ed4c8] text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={stat.value} suffix={stat.suffix || ""} />
              </div>
              <p className="text-white tracking-widest text-sm">{stat.label}</p>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={1000}>
          <p className="text-white/70 text-sm">
            {footnote}
          </p>
          <a href={learnMoreLink} className="text-white underline text-sm hover:text-white/80 transition-colors">
            {learnMoreText}
          </a>
        </FadeInSection>
      </div>
    </section>
  )
}
