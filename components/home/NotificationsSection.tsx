import { Box, Divider, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import {
  collection,
  onSnapshot,
  Unsubscribe,
  orderBy,
  query,
  Query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/clientApp";
import NotificationItem from "./NotificationItem";

const NotificationSection = () => {
  const [notifications, setNotifications] = useState<any[]>([]);
  useEffect(() => {
    const colRef = collection(db, "notifications");
    //const DBQuery = query(colRef, orderBy("createdAt"));
    const unsub: Unsubscribe = onSnapshot(colRef, snapshot => {
      let Notifications: any[] = [];
      snapshot.docs.forEach(doc => {
        Notifications.push(doc.data());
      });

      setNotifications(Notifications);
    });
    return unsub;
  }, []);
  useEffect(() => {
    console.log({ notifications });
  }, [notifications]);
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
      <>
        {notifications.map((notif, key) => (
          <NotificationItem
            notificationStatus={notif.type}
            notificationText={notif.text}
            key={key}
          />
        ))}
      </>
    </Stack>
  );
};
export default NotificationSection;
