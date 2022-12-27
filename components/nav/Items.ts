import { IconType } from "react-icons";
import { FiHome, FiCompass } from "react-icons/fi";
import { MdFamilyRestroom } from "react-icons/md";
interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome },
  { name: "Residents", icon: MdFamilyRestroom },
  { name: "Visitors", icon: FiCompass },
];
export default LinkItems;
