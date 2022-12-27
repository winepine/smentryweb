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
import NotificationItem from "../components/home/NotificationItem";

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
        <Box color="gray.600">Dashboard</Box>
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
          <NotificationItem
            notificationStatus="danger"
            notificationText="SOS Signal Received (H#176-D)"
          />
          <NotificationItem
            notificationStatus="success"
            notificationText="Staff Entered"
          />
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
