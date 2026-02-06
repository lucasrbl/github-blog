import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type InfoItemProps = {
    text: string;
    icon: IconProp
}

export function InfoItem({ text, icon }: InfoItemProps) {
  return (
    <div>
      <FontAwesomeIcon icon={icon} className="text-base-label mr-2" />
      <span className="text-base-text text-medium">{text}</span>
    </div>
  )
}
