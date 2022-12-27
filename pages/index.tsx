import {
  Box,
  Center,
  Container,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Home() {
  // const getTodos = async () => {
  // const todosQuery = query(todosCollection);
  // const querySnapshot = await getDocs(todosQuery);
  // const result: QueryDocumentSnapshot<DocumentData>[] = [];
  // querySnapshot.forEach((snapshot) => {
  // result.push(snapshot);
  // });
  // console.log({result})
  // setQueryData(result);
  // };

  // useEffect(() => {
  //   // addData();
  //   const getDataa = async () => {
  //     const response = await getData();
  //     console.log({ response });
  //   };
  //   getDataa();
  // }, []);
  return (
    <Container minW="100%" p={0} m={0}>
      <HStack h={12} justify="space-evenly" px={64} bg="white">
        <Box color="gray.600">Approvals</Box>
        <Box color="gray.600">Requests</Box>
        <Box color="gray.600">Staff</Box>
        <Box color="gray.600">Invites</Box>
      </HStack>
      <Divider />

      <HStack bg="white" align="start" minH="100%">
        <Stack w="50%" p={8} align="center">
          <Heading color="gray.600" fontWeight="semibold">
            Notifications
          </Heading>

          <Box
            border="1px solid rgba(100,100,100,0.2)"
            color="gray.700"
            rounded="md"
            w="100%"
            bg="green.100"
            p={4}
          >
            LEL 7315 Entered (Authorized)
          </Box>
          <Box
            border="1px solid rgba(100,100,100,0.2)"
            rounded="md"
            color="gray.700"
            w="100%"
            bg="red.200"
            p={4}
          >
            SOS Signal (H#123-D)
          </Box>
          <Box
            border="1px solid rgba(100,100,100,0.2)"
            rounded="md"
            w="100%"
            color="gray.700"
            bg="green.100"
            p={4}
          >
            Approval Granted (33100-2877100-1)(H#13-B)
          </Box>
        </Stack>
        <Center h="90vh">
          <Divider orientation="vertical" />
        </Center>
        <Stack w="50%">
          <Box>Requests</Box>
          <Box>Requests</Box>
          <Box>Requests</Box>
          <Box>Requests</Box>
          <Box>Requests</Box>
          <Box>Requests</Box>
          <Box>Requests</Box>
          <Box>Requests</Box>
          <Box>Requests</Box>
          <Box>Requests</Box>
          <Box>Requests</Box>
          <Box>Requests</Box>
          <Box>Requests</Box>
          <Box>Requests</Box>
          <Box>Requests</Box>
        </Stack>
      </HStack>
    </Container>
  );
}
