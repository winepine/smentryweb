import { Box, Container, Heading, Input, Stack } from "@chakra-ui/react";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ActivityColumns } from "../components/activity/ActivityColumns";
import OurTable from "../components/approvals/Table";
import { StaffColumns } from "../components/staff/StaffColumns";
import { db } from "../firebase/clientApp";

const Activity = () => {
  const [activity, setActivity] = useState<any[]>([]);
  const [paginationState, setPaginationState] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  useEffect(() => {
    const colRef = collection(db, "activity");
    const unsub = onSnapshot(colRef, snapshot => {
      let activity: any[] = [];
      snapshot.docs.forEach(doc => activity.push({ ...doc.data(), id: doc.id }));
      setActivity(activity);
    });
    return unsub;
  }, []);
  return <Container bg="white" minW="100%" p={0} m={0}>
  <Stack p={8} px={16}>
    <Heading>Activity</Heading>
    <Box pt={8}>
      <Input bg="gray.100" placeholder="Search" p={6} />
    </Box>
    <OurTable
      data={activity}
      columns={ActivityColumns}
      paginationState={paginationState}
      onPaginationChange={setPaginationState}
    />
  </Stack>
</Container>;
};
export default Activity;
