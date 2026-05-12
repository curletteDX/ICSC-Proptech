import { ComponentProps, registerUniformComponent } from "@uniformdev/canvas-react";
import { FeatureCircle } from "@/components/ceros/feature-circle";
import Image from "next/image";
import { InnovationIcon } from "@/components/ceros/icons";

type AssetType = Array<{ url?: string; fields?: { url?: { value?: string } } }>;

type FeatureBubbleProps = ComponentProps<{
  icon?: AssetType;
  heading?: string;
  text?: string;
}>;

function getAssetUrl(asset?: AssetType): string | undefined {
  const assetItem = asset?.[0];
  return assetItem?.url || assetItem?.fields?.url?.value;
}

function FeatureBubbleCanvas({ icon, heading, text }: FeatureBubbleProps) {
  const iconUrl = getAssetUrl(icon);
  
  const iconElement = iconUrl ? (
    <Image 
      src={iconUrl} 
      alt={heading || "Feature icon"} 
      width={48} 
      height={48}
      className="w-12 h-12 object-contain"
    />
  ) : <InnovationIcon />;

  return (
    <FeatureCircle
      icon={iconElement}
      title={heading || ""}
      description={text || ""}
      delay={0}
    />
  );
}

registerUniformComponent({
  type: "featureBubble",
  component: FeatureBubbleCanvas,
});

export default FeatureBubbleCanvas;
