import { Box, BoxProps, CloseButton, Flex, Text } from "@chakra-ui/react";
import LinkItems from "./Items";
import NavItem from "./NavItem";

const SidebarContent = ({ ...rest }) => {
  return (
    <Box
      bg={"gray.200"}
      borderRight="1px"
      borderRightColor={"gray.200"}
      w={{ base: "0", md: 48 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Smentry
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} />
      </Flex>
      {LinkItems.map(link => (
        <NavItem key={link.name} icon={link.icon} route={link.route}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};
export default SidebarContent;
