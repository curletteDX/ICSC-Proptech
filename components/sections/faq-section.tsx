import { useState } from "react"
import { cn } from "@/lib/utils"
import { FadeInSection } from "@/components/ceros/fade-in-section"
import { AnimatedLine } from "@/components/ceros/animated-line"
import type { ReactNode } from "react"

interface FAQ {
  question: string
  answer: string | ReactNode
}

interface FAQSectionProps {
  title?: string
  subtitle?: string
  description?: string
  contactName?: string
  contactEmail?: string
  faqs?: FAQ[]
}

const defaultFaqs: FAQ[] = [
  {
    question: "CAN I REGISTER FOR AN EVENT OVER THE PHONE?",
    answer: "Yes. Please contact Membership at +1 844 728 ICSC (U.S./Canada) or +1 646 728 3800 (worldwide).",
  },
  {
    question: "HOW DO I CONFIRM MY EVENT REGISTRATION?",
    answer: "ICSC Members may log into My ICSC to view their registered events. All event registrants may also confirm by contacting us at +1 844 728 ICSC (US/Canada) or +1 646 728 3800 (worldwide) or membership@ICSC.com.",
  },
  {
    question: "HOW DO I CANCEL MY REGISTRATION?",
    answer: "To cancel your registration, please log into My ICSC or contact Membership at +1 844 728 ICSC (US/Canada) or +1 646 728 3800 (worldwide). Cancellation policies vary by event.",
  },
  {
    question: "HOW DO I GET MY EVENT BADGE?",
    answer: "Event badges can be picked up at the registration desk upon arrival. Please bring a valid photo ID that matches your registration name.",
  },
  {
    question: "HOW CAN I FIND OUT WHO ELSE IS ATTENDING AN EVENT?",
    answer: "Members and registered attendees can view who is attending an event by logging in and going to the event details page.",
  },
  {
    question: "WHERE CAN I FIND EXHIBITOR LISTS?",
    answer: "Every event with a trade show component will have a link to Exhibitors on that event page when the list becomes available. This list is available to everyone, searchable, and has a link to the floor plan.",
  },
  {
    question: "WHO DO I CONTACT FOR BOOTH INFORMATION AT ICSC+PROPTECH?",
    answer: "For booth information, please contact our exhibitions team at exhibits@ICSC.com or call +1 646 728 3800.",
  },
]

export function FAQSection({
  title = "EVENT",
  subtitle = "FAQs",
  description = "The goal of ICSC events is to provide a welcoming, congenial atmosphere for Marketplaces Industry professionals to connect with peers, conduct business and learn more about relevant topics.",
  contactName = "Kevin Hewitt",
  contactEmail = "khewitt@ICSC.com",
  faqs = defaultFaqs
}: FAQSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(1)

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - Title and Questions */}
          <div>
            <FadeInSection>
              <AnimatedLine width={80} height={4} color="#6b9dff" className="mb-6" />
            </FadeInSection>

            <FadeInSection delay={200}>
              <h2 className="text-4xl md:text-5xl mb-6">
                <span className="font-light text-[#1a1a2e]">{title}</span>{" "}
                <span className="font-bold text-[#1a1a2e]">{subtitle}</span>
              </h2>
            </FadeInSection>

            <FadeInSection delay={400}>
              <p className="text-[#6b7280] text-lg leading-relaxed mb-12">
                {description}
              </p>
            </FadeInSection>

            {/* FAQ Questions */}
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <FadeInSection key={index} delay={500 + index * 50}>
                  <button
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className={cn(
                      "w-full text-left py-5 border-b-2 border-[#d1d5db] flex items-center justify-between group transition-all duration-300",
                      activeIndex === index ? "bg-[#f5f5f7]" : ""
                    )}
                  >
                    <span
                      className={cn(
                        "font-bold text-sm md:text-base tracking-wide transition-colors duration-300 pr-4",
                        activeIndex === index ? "text-[#4040bf]" : "text-[#1a1a2e] group-hover:text-[#4040bf]"
                      )}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        "text-2xl font-light flex-shrink-0 transition-transform duration-300",
                        activeIndex === index ? "text-[#1a1a2e]" : "text-[#1a1a2e]"
                      )}
                    >
                      {activeIndex === index ? "×" : "+"}
                    </span>
                  </button>
                </FadeInSection>
              ))}
            </div>
          </div>

          {/* Right side - Answer and Contact */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <FadeInSection delay={300}>
              <h3 className="text-[#4040bf] text-xl font-bold mb-4 tracking-wider underline underline-offset-4">
                NEED MORE INFORMATION?
              </h3>
              <p className="text-[#6b7280] mb-12">
                Please contact {contactName}{" "}
                <a href={`mailto:${contactEmail}`} className="text-[#4040bf] hover:underline">
                  {contactEmail}
                </a>
              </p>
            </FadeInSection>

            {/* Active Answer */}
            {activeIndex !== null && (
              <FadeInSection delay={0} key={activeIndex}>
                <div className="bg-white text-[#1a1a2e] leading-relaxed">
                  {faqs[activeIndex].answer}
                </div>
              </FadeInSection>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
