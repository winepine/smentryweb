import { Box, Button, Container, Heading, HStack, Input, Stack } from "@chakra-ui/react";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import OurTable from "../components/approvals/Table";
import Header from "../components/home/Header";
import { RequestsColumns } from "../components/requests/RequestsColumns";
import { HousesColumns } from "../components/houses/HousesColumns";
import { db } from "../firebase/clientApp";

const Residents = () => {
  const [houses, setHouses] = useState<any[]>([]);
  const [paginationState, setPaginationState] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  useEffect(() => {
    const colRef = collection(db, "houses");
    const unsub = onSnapshot(colRef, snapshot => {
      let house: any[] = [];
      snapshot.docs.forEach(doc => house.push({ ...doc.data(), id: doc.id }));
      setHouses(house);
    });
    return unsub;
  }, []);
  return (
    <Container bg="white" minW="100%" p={0} m={0}>
      
      <Stack p={8} px={16}>
        <Heading>Houses Management</Heading>
        <HStack pt={8}>
          <Input bg="gray.100" placeholder="Search" p={6} />
          <Button colorScheme='green' p={6}>Register</Button>
        </HStack>
        <OurTable
          data={houses}
          columns={HousesColumns}
          paginationState={paginationState}
          onPaginationChange={setPaginationState}
        />
      </Stack>
    </Container>
  );
};
export default Residents;
