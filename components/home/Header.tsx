import { Box, HStack } from "@chakra-ui/react";
import headerItems from "./headerItems";
const Header = () => {
  return (
    <HStack h={12} justify="space-evenly" px={64} bg="white">
      {headerItems.map(item => (
        <Box color="gray.600">{item.value}</Box>
      ))}
    </HStack>
  );
};
export default Header;
