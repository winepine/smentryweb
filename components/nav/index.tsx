import { Box } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import SidebarContent from "./SidebarContent";
const Navbar = ({ children }: { children: ReactNode }) => {
  return (
    <Box minH="100vh" bg={"gray.100"}>
      <SidebarContent display={{ base: "none", md: "block" }} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
};
export default Navbar;
