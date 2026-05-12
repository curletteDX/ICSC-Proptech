import { ComponentProps, registerUniformComponent } from "@uniformdev/canvas-react";
import { WhyAttendSection } from "@/components/sections/why-attend-section";

type WhyAttendSectionProps = ComponentProps<{
  title?: string;
  subtitle?: string;
  description?: string;
}>;

function WhyAttendSectionCanvas({ title, subtitle, description }: WhyAttendSectionProps) {
  return (
    <WhyAttendSection
      title={title}
      subtitle={subtitle}
      description={description}
    />
  );
}

registerUniformComponent({
  type: "whyAttendSection",
  component: WhyAttendSectionCanvas,
});

export default WhyAttendSectionCanvas;
