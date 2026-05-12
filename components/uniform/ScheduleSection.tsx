import { ComponentProps, registerUniformComponent } from "@uniformdev/canvas-react";
import { ScheduleSection } from "@/components/sections/schedule-section";

type ScheduleSectionProps = ComponentProps<{
  scheduleData?: Array<{
    day: string;
    date: string;
    highlight?: boolean;
    events: Array<{
      title: string;
      location: string;
      description?: string;
      link?: string;
      linkText?: string;
    }>;
  }>;
}>;

function ScheduleSectionCanvas({ scheduleData }: ScheduleSectionProps) {
  return <ScheduleSection schedule={scheduleData} />;
}

registerUniformComponent({
  type: "scheduleSection",
  component: ScheduleSectionCanvas,
});

export default ScheduleSectionCanvas;
