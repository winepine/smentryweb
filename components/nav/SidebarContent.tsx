import { Box, BoxProps, Button, CloseButton, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import LinkItems from "./Items";
import NavItem from "./NavItem";
import {CgLogOut} from 'react-icons/cg'
import { useRouter } from "next/router";
const SidebarContent = ({ ...rest }) => {
  const router = useRouter();
  return (
    <Box
      bg={"white"}
      borderRight="1px"
      borderRightColor={"gray.200"}
      w={{ base: "0", md: 48 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Stack h='100%' justify='space-between' align='center'>
    <Box>

      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Smentry
        </Text>
      </Flex>
      {LinkItems.map(link => (
        <NavItem mt={2} key={link.name} icon={link.icon} route={link.route}>
          {link.name}
        </NavItem>
      ))}
      </Box>
      <Box>
        <Button colorScheme='red' onClick={()=>{
          localStorage.removeItem('smentryAdminLoggedIn');
          router.push('/')
        }} mb={8}>
        <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "black",
            }}
            as={CgLogOut}
          />
          Logout</Button>
      </Box>
      </Stack>
    </Box>
  );
};
export default SidebarContent;
