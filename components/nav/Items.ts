import { IconType } from "react-icons";
import { FiHome, FiCompass } from "react-icons/fi";
import { MdFamilyRestroom } from "react-icons/md";
interface LinkItemProps {
  name: string;
  icon: IconType;
  route: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, route: "/" },
  { name: "Residents", icon: MdFamilyRestroom, route: "/residents" },
  { name: "Activity", icon: FiCompass, route: "/activity" },
];
export default LinkItems;
