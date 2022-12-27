import { Box, HStack } from "@chakra-ui/react";
import headerItems from "./headerItems";
const Header = () => {
  return (
    <HStack h={12} justify="space-evenly" px={64} bg="white">
      {headerItems.map(item => (
        <Box
          transitionDuration="100ms"
          cursor="pointer"
          _hover={{ fontWeight: "semibold", color: "gray.500" }}
          color="gray.600"
        >
          {item.value}
        </Box>
      ))}
    </HStack>
  );
};
export default Header;
