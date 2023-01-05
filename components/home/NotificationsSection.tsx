import { Box, Divider, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import NotificationItem from "./NotificationItem";

const NotificationSection = () => {
  return (
    <Stack w="50%" p={8} align="center">
      <Heading color="gray.600" fontWeight="semibold">
        Notifications
      </Heading>
      <HStack>
        <Text>Camera Status: </Text>
        <Text color="green">Live</Text>
      </HStack>
      <Divider py={4} />
      <NotificationItem
        notificationStatus="danger"
        notificationText="SOS Signal Received (H#176-D)"
      />
      <NotificationItem
        notificationStatus="success"
        notificationText="Staff Entered"
      />
      <NotificationItem
        notificationStatus="success"
        notificationText="Staff Exited"
      />
      <NotificationItem
        notificationStatus="danger"
        notificationText="Jaidi House In Danger"
      />
      <NotificationItem
        notificationStatus="danger"
        notificationText="SOS Signal Received (H#176-D)"
      />
      <NotificationItem
        notificationStatus="success"
        notificationText="Staff Entered"
      />
      <NotificationItem
        notificationStatus="danger"
        notificationText="lorem ipsum this is a big notification to check kidr jata wrap hota ke nahi, bas pohanchne lage end pe, han hogya fine"
      />
      <NotificationItem
        notificationStatus="success"
        notificationText="Staff Entered"
      />
    </Stack>
  );
};
export default NotificationSection;
