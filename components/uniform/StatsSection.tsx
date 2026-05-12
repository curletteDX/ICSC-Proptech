import { ComponentProps, registerUniformComponent } from "@uniformdev/canvas-react";
import { StatsSection } from "@/components/sections/stats-section";

type StatsSectionProps = ComponentProps<{
  title?: string;
  attendees?: number;
  speakers?: number;
  exhibitors?: number;
  techBuyers?: number;
  footnote?: string;
  learnMoreLink?: { path: string };
  learnMoreText?: string;
}>;

function StatsSectionCanvas({ title, attendees, speakers, exhibitors, techBuyers, footnote, learnMoreLink, learnMoreText }: StatsSectionProps) {
  return (
    <StatsSection
      title={title}
      attendees={attendees}
      speakers={speakers}
      exhibitors={exhibitors}
      techBuyers={techBuyers}
      footnote={footnote}
      learnMoreLink={learnMoreLink?.path || "#"}
      learnMoreText={learnMoreText}
    />
  );
}

registerUniformComponent({
  type: "statsSection",
  component: StatsSectionCanvas,
});

export default StatsSectionCanvas;
