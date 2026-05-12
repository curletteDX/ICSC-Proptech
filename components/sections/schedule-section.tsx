import { useState } from "react"
import { cn } from "@/lib/utils"
import { FadeInSection } from "@/components/ceros/fade-in-section"
import { AnimatedLine } from "@/components/ceros/animated-line"

interface Event {
  title: string
  location: string
  description?: string
  link?: string
  linkText?: string
}

interface DaySchedule {
  day: string
  date: string
  highlight?: boolean
  events: Event[]
}

interface ScheduleSectionProps {
  schedule?: DaySchedule[]
}

const defaultSchedule: DaySchedule[] = [
  {
    day: "DAY 1",
    date: "SUN, MAY 17",
    highlight: true,
    events: [
      {
        title: "ICSC+PROPTECH OPENING RECEPTION",
        location: "WYNN LAS VEGAS",
        description: "5:30 PM – 7:00 PM",
        link: "#",
        linkText: "Sponsored by Placer.ai",
      },
    ],
  },
  {
    day: "DAY 2",
    date: "MON, MAY 18",
    events: [
      {
        title: "BADGE PICKUP & REGISTRATION",
        location: "WYNN HOTEL LAS VEGAS",
        description: "Badge Pickup & Registration",
      },
      {
        title: "CONTENT SESSIONS",
        location: "WYNN HOTEL LAS VEGAS",
        description:
          "A powerful professional development program exploring cutting-edge tech, capital-market intelligence, and new opportunities shaping the future of CRE.",
        link: "#",
        linkText: "Cutting-edge Content Sessions",
      },
      {
        title: "KEYNOTE PRESENTATION AND AWARDS BRUNCH",
        location: "WYNN HOTEL LAS VEGAS",
        description: "Speaker: Randi Zuckerberg, Founder & CEO, Zuckerberg Media\nLimited Seating Available",
      },
    ],
  },
  {
    day: "DAY 3",
    date: "TUE, MAY 19",
    events: [
      {
        title: "EXHIBITION",
        location: "LAS VEGAS CONVENTION CENTER",
        description: "ICSC+PROPTECH Exhibition",
      },
      {
        title: "1:1 MEETINGS",
        location: "LAS VEGAS CONVENTION CENTER",
        description: "1:1 Meetings With Pre-Qualified Buyers",
      },
    ],
  },
  {
    day: "DAY 4",
    date: "WED, MAY 20",
    events: [
      {
        title: "EXHIBITION CONTINUES",
        location: "LAS VEGAS CONVENTION CENTER",
        description: "Continue exploring ICSC+PROPTECH Exhibition",
      },
      {
        title: "NETWORKING SESSIONS",
        location: "LAS VEGAS CONVENTION CENTER",
        description: "Final networking opportunities and closing remarks",
      },
    ],
  },
]

export function ScheduleSection({ schedule = defaultSchedule }: ScheduleSectionProps) {
  const [activeDay, setActiveDay] = useState(0)
  const [expandedEvents, setExpandedEvents] = useState<Record<number, boolean>>({})

  const toggleEvent = (index: number) => {
    setExpandedEvents((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <section className="relative py-24 bg-[#f5f5f7] overflow-hidden">
      {/* Large decorative curves */}
      <svg
        className="absolute right-0 top-1/2 -translate-y-1/2 h-[120%] w-[400px] md:w-[600px] opacity-60"
        viewBox="0 0 300 600"
        fill="none"
      >
        <path
          d="M 300 0 Q -100 150 -100 300 Q -100 450 300 600"
          stroke="#d1d5e8"
          strokeWidth="60"
          fill="none"
        />
        <path
          d="M 300 80 Q 0 180 0 300 Q 0 420 300 520"
          stroke="#c5cfe8"
          strokeWidth="50"
          fill="none"
        />
        <path
          d="M 300 150 Q 80 220 80 300 Q 80 380 300 450"
          stroke="#b8c4e0"
          strokeWidth="40"
          fill="none"
        />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - Title and Day Selector */}
          <div>
            <FadeInSection>
              <AnimatedLine width={60} height={4} color="#6b9dff" className="mb-6" />
            </FadeInSection>

            <FadeInSection delay={200}>
              <h2 className="text-4xl md:text-5xl font-light text-[#1a1a2e] mb-2">SCHEDULE</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-6">AT-A-GLANCE</h3>
              <p className="text-[#6b7280] mb-12">Select a day to explore activities.</p>
            </FadeInSection>

            {/* Day Tabs */}
            <div className="space-y-4">
              {schedule.map((day, index) => (
                <FadeInSection key={day.day} delay={300 + index * 100}>
                  <button
                    onClick={() => setActiveDay(index)}
                    className={cn(
                      "w-full max-w-md flex items-center justify-between px-6 py-4 transition-all duration-300 group",
                      activeDay === index
                        ? day.highlight
                          ? "bg-[#6b9dff] text-white"
                          : "bg-[#4040bf] text-white"
                        : "bg-[#4040bf]/80 text-white hover:bg-[#4040bf]"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-white/70 text-sm font-medium">{day.day}</span>
                      <span className="text-white/50">—</span>
                      <span className="font-bold tracking-wide">{day.date}</span>
                    </div>
                    <span
                      className={cn(
                        "text-2xl transition-transform duration-300",
                        activeDay === index ? "rotate-45" : ""
                      )}
                    >
                      +
                    </span>
                  </button>
                </FadeInSection>
              ))}

              <FadeInSection delay={700}>
                <button className="w-full max-w-md bg-[#7ed4c8] text-[#1a1a2e] font-bold px-6 py-4 tracking-wider hover:bg-[#6bc4b8] transition-colors">
                  SEE FULL SCHEDULE
                </button>
              </FadeInSection>
            </div>
          </div>

          {/* Right side - Events */}
          <div className="space-y-6">
            {schedule[activeDay].events.map((event, index) => (
              <FadeInSection key={event.title + index} delay={index * 100}>
                <div className="border-b border-[#e5e7eb] pb-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="text-[#4040bf] font-bold text-lg tracking-wide mb-2">{event.title}</h4>
                      <p className="text-[#6b7280] font-medium text-sm tracking-wider mb-2">{event.location}</p>
                      {event.description && (
                        <p className="text-[#6b7280] text-sm whitespace-pre-line">{event.description}</p>
                      )}
                      {event.link && (
                        <a href={event.link} className="text-[#6b9dff] text-sm hover:underline mt-2 inline-block">
                          {event.linkText}
                        </a>
                      )}
                    </div>
                    <button
                      onClick={() => toggleEvent(index)}
                      className="text-[#6b7280] text-2xl ml-4 hover:text-[#4040bf] transition-colors"
                    >
                      {expandedEvents[index] ? "−" : "+"}
                    </button>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
