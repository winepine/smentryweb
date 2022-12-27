import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode, useState } from "react";
import SidebarContent from "./SidebarContent";
const Navbar = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head key={1}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box minH="100vh" bg={"gray.100"}>
        <SidebarContent display={{ base: "none", md: "block" }} />
        <Box ml={{ base: 0, md: 48 }}>{children}</Box>
      </Box>
    </>
  );
};
export default Navbar;
