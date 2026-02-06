import { faBuilding, faGithub, faUserGroup } from "../../components/icons";

import { Link } from "../Link";
import { InfoItem } from "../InfoItem";

export function Header() {
  return (
    <header className="bg-base-profile rounded-[10px] w-[50%]">
      <div className="p-8">
        <div className="flex items-center justify-between mb-2">
            <span className="text-title-large text-base-title font-bold">Cameron Williamson</span>
            <Link href="#">GITHUB</Link>
        </div>

        <p className="text-base-text text-medium">Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

        <div className="flex gap-6 mt-6">
          <InfoItem text="cameronwilliams" icon={faGithub} />
          <InfoItem text="Rocketseat" icon={faBuilding} />
          <InfoItem text="10 seguidores" icon={faUserGroup} />
        </div>
      </div>
    </header>
  )
}
