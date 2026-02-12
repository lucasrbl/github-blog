import { faBuilding, faGithub, faUserGroup } from "../../components/icons";
import { Link } from "../Link";
import { InfoItem } from "../InfoItem";
import { useUserContext } from "../../contexts/UserContext";

export function Header() {
  const { user } = useUserContext();

  console.log(user);
  

  return (
    <header className="bg-base-profile rounded-[10px] w-full">
      <div className="p-8 flex gap-8 items-center">
        <img src={user?.avatar_url} alt="" className="size-[148px] rounded-lg" />
        
        <div className="flex-1">
          <div className="flex items-center mb-2">
              <span className="text-title-large text-base-title font-bold">{user?.name}</span>
              <Link href="#" className="ml-auto">GITHUB</Link>
          </div>

          <p className="text-base-text text-medium">{user?.bio}</p>

          <div className="flex gap-6 mt-6">
            <InfoItem text={user?.blog ?? 'Não informado'} icon={faGithub} />
            <InfoItem text={user?.company ?? 'Não informado'} icon={faBuilding} />
            <InfoItem text={`${user?.followers ?? 0} seguidores`} icon={faUserGroup} />
          </div>
        </div>
      </div>
    </header>
  )
}
