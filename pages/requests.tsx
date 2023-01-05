import { Box, Container, Heading, Input, Stack } from "@chakra-ui/react";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import Header from "../components/home/Header";

import { db } from "../firebase/clientApp";

const requests = () => {
  const [requests, setRequests] = useState<any[]>([]);
  useEffect(() => {
    const colRef = collection(db, "Delivery_Requests");
    const unsub = onSnapshot(colRef, snapshot => {
      let req: any[] = [];
      snapshot.docs.forEach(doc => req.push({ ...doc.data(), id: doc.id }));
      setRequests(req);
    });
  });
  return (
    <Container bg="white" minW="100%" p={0} m={0}>
      <Header />
      <Stack p={8} px={16}>
        <Heading>Requests</Heading>
        <Box pt={8}>
          <Input bg="gray.100" placeholder="Search" p={6} />
        </Box>
        {/* <RequestsTable requests={requests} /> */}
      </Stack>
    </Container>
  );
};
export default requests;
