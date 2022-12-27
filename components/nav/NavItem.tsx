import { Flex, FlexProps, Icon, Link, useEditable } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { IconType } from "react-icons";

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: any;
  route: string;
}
const NavItem = ({ icon, route, children, ...rest }: NavItemProps) => {
  const router = useRouter();
  const [bgColor, setBgColor] = useState("");
  useEffect(() => {
    router.pathname === `${route}` && setBgColor("gray.200");
  }, [router]);
  return (
    <Link
      href={route}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        bg={bgColor}
        mx="4"
        transitionDuration="200ms"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "gray.200",
          color: "black",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "black",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};
export default NavItem;
