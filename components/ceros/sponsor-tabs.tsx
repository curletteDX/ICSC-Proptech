import { useState } from "react"

const sponsors = {
  premier: [
    { name: "TechCorp", logo: "TC" },
  ],
  platinum: [
    { name: "ESRI", logo: "ES" },
  ],
  gold: [
    { name: "DataWorks", logo: "DW" },
    { name: "CloudNet", logo: "CN" },
  ],
  silver: [
    { name: "Placer.AI", logo: "PA" },
    { name: "PropLogic", logo: "PL" },
    { name: "RealtyTech", logo: "RT" },
  ],
}

const tabs = [
  { id: "premier", label: "PREMIER INNOVATION\nPARTNER SPONSOR" },
  { id: "platinum", label: "PLATINUM SPONSOR" },
  { id: "gold", label: "GOLD SPONSORS" },
  { id: "silver", label: "SILVER SPONSORS" },
]

export function SponsorTabs() {
  const [activeTab, setActiveTab] = useState("premier")

  return (
    <div className="w-full">
      <div className="flex flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 min-w-[200px] py-4 px-6 text-sm font-bold tracking-wider text-center transition-all duration-300 whitespace-pre-line ${
              activeTab === tab.id
                ? "bg-[#6b9dff] text-white"
                : "bg-[#4040bf] text-white hover:bg-[#5050cf]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="py-16 flex flex-wrap justify-center gap-12">
        {sponsors[activeTab as keyof typeof sponsors].map((sponsor, index) => (
          <div
            key={sponsor.name}
            className="flex flex-col items-center animate-[fadeIn_0.5s_ease-out]"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-32 h-32 rounded-full border-2 border-[#c4ece6] flex items-center justify-center mb-4 hover:border-[#6b9dff] transition-colors duration-300">
              <span className="text-2xl font-bold text-[#4040bf]">{sponsor.logo}</span>
            </div>
            <a href="#" className="text-[#4040bf] font-semibold hover:underline uppercase tracking-wide text-sm">
              {sponsor.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
