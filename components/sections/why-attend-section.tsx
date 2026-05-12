import { AnimatedLine } from "@/components/ceros/animated-line"
import { DecorativeCurves } from "@/components/ceros/decorative-curves"
import { FeatureCircle } from "@/components/ceros/feature-circle"
import { FadeInSection } from "@/components/ceros/fade-in-section"
import { InnovationIcon, NetworkIcon, ShowcaseIcon } from "@/components/ceros/icons"
import { ReactNode } from "react"

interface WhyAttendSectionProps {
  title?: string
  subtitle?: string
  description?: string
  bubblesSlot?: ReactNode
}

const defaultBubbles = (
  <>
    <FeatureCircle
      icon={<InnovationIcon />}
      title="Discover the Latest Innovations"
      description="Learn from the founders and gain insights into the latest AI-driven leasing and business tools, smart buildings, property management software, tenant engagement platforms and more."
      delay={0}
    />
    <FeatureCircle
      icon={<NetworkIcon />}
      title="Build Your Network"
      description="Connect with industry leaders, tech founders, and decision makers to expand your professional network and discover new partnerships."
      delay={200}
    />
    <FeatureCircle
      icon={<ShowcaseIcon />}
      title="Showcase Your Solutions"
      description="Present your innovative solutions to thousands of potential buyers and partners in the commercial real estate industry."
      delay={400}
    />
  </>
)

export function WhyAttendSection({ 
  title = "WHY",
  subtitle = "ATTEND",
  description = "ICSC+PROPTECH connects industry decisionmakers with technology innovators who can help match your business with the right tech solutions. Discover what's revolutionizing retail spaces, explore new tools and join curated 1:1 meetings.",
  bubblesSlot
}: WhyAttendSectionProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      <DecorativeCurves className="top-0 h-full" variant="right" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-16">
          <FadeInSection>
            <AnimatedLine width={80} height={4} color="#6b9dff" className="mb-6" />
          </FadeInSection>

          <FadeInSection delay={200}>
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a2e] mb-6">
              {title} <span className="font-bold text-[#1a1a2e]">{subtitle}</span>
            </h2>
          </FadeInSection>

          <FadeInSection delay={400}>
            <p className="text-[#6b7280] text-lg leading-relaxed">
              {description}
            </p>
          </FadeInSection>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 place-items-center">
          {bubblesSlot || defaultBubbles}
        </div>
      </div>
    </section>
  )
}
