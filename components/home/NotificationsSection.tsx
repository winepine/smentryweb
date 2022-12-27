import { Heading, Stack } from "@chakra-ui/react";
import NotificationItem from "./NotificationItem";

const NotificationSection = () => {
  return (
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
  );
};
export default NotificationSection;
