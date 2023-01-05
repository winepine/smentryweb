import { Box, Container, Heading, Input, Stack } from "@chakra-ui/react";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import OurTable from "../components/approvals/Table";
import Header from "../components/home/Header";
import DeliveryActions from "../components/requests/DeliveryActions";
import { RequestsColumns } from "../components/requests/RequestsColumns";
import { StaffColumns } from "../components/staff/StaffColumns";

import { db } from "../firebase/clientApp";

const Staff = () => {
  const [staff, setStaff] = useState<any[]>([]);
  const [paginationState, setPaginationState] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  useEffect(() => {
    const colRef = collection(db, "staff");
    const unsub = onSnapshot(colRef, snapshot => {
      let staff: any[] = [];
      snapshot.docs.forEach(doc => staff.push({ ...doc.data(), id: doc.id }));
      setStaff(staff);
    });
    return unsub;
  }, []);
  return (
    <Container bg="white" minW="100%" p={0} m={0}>
      <Header />
      <Stack p={8} px={16}>
        <Heading>Staff</Heading>
        <Box pt={8}>
          <Input bg="gray.100" placeholder="Search" p={6} />
        </Box>
        <OurTable
          data={staff}
          columns={StaffColumns}
          paginationState={paginationState}
          onPaginationChange={setPaginationState}
        />
      </Stack>
    </Container>
  );
};
export default Staff;
