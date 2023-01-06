import { Box, HStack } from "@chakra-ui/react";
import Link from "next/link";
import headerItems from "./headerItems";
const Header = () => {
  return (
    <HStack h={12} justify="space-evenly" px={64} bg="white">
      {headerItems.map((item:any,key:any) => (
        <Link key={key} href={item.url}>{item.value}</Link>
      ))}
    </HStack>
  );
};
export default Header;
