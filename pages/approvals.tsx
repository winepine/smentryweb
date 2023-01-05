import {
  Box,
  Container,
  Divider,
  Heading,
  Input,
  Stack,
  useStatStyles,
} from "@chakra-ui/react";
import {
  collection,
  limit,
  onSnapshot,
  query,
  Unsubscribe,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { columns } from "../components/approvals/ApprovalsColumns";
import ApprovalsTable from "../components/approvals/Table";
import Header from "../components/home/Header";
import { db } from "../firebase/clientApp";
import { getApprovalsCount } from "../services/getApprovalCount";

const Approvals = () => {
  const [approvals, setApprovals] = useState<any[]>([]);
  const [paginationState, setPaginationState] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  useEffect(() => {
    const colRef = collection(db, "house_visitors");
    const q = query(colRef, where("dismissed", "==", false));
    const unsub: Unsubscribe = onSnapshot(q, snapshot => {
      let approvals: any[] = [];

      snapshot.docs.forEach(doc => {
        approvals.push({ ...doc.data(), id: doc.id });
      });

      setApprovals(approvals);
    });
    return unsub;
  }, []);
  return (
    <Container minW="100%" p={0} m={0}>
      <Header />
      <Divider />
      <Stack p={8} px={24} bg="white">
        <Heading color="gray.600">Approvals</Heading>
        <Box>
          <Input bg="gray.100" placeholder="Search" p={6} mt={8} />
        </Box>
        <ApprovalsTable
          data={approvals}
          columns={columns}
          paginationState={paginationState}
          onPaginationChange={setPaginationState}
        />
      </Stack>
    </Container>
  );
};
export default Approvals;
