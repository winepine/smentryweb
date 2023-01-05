import {
  Box,
  Container,
  Divider,
  Heading,
  Input,
  Stack,
  useStatStyles,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { columns } from "../components/approvals/ApprovalsColumns";
import ApprovalsTable from "../components/approvals/Table";
import Header from "../components/home/Header";
import { getApprovals } from "../services/getApprovals";

const Approvals = () => {
  const [approvals, setApprovals] = useState<any[]>([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getApprovals();
      setApprovals(data);
    };
    getData();
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
        <ApprovalsTable data={approvals} columns={columns} />
      </Stack>
    </Container>
  );
};
export default Approvals;
