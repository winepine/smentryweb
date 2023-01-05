import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode, useState } from "react";
import SidebarContent from "./SidebarContent";
const Navbar = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Box minH="100vh" bg={"gray.100"}>
        <SidebarContent display={{ base: "none", md: "block" }} />
        <Box ml={{ base: 0, md: 48 }}>{children}</Box>
      </Box>
    </>
  );
};
export default Navbar;
