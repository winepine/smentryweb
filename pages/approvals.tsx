import {
  Box,
  Container,
  Divider,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import ApprovalsTable from "../components/approvals/Table";
import Header from "../components/home/Header";
import { getApprovals } from "../services/getApprovals";

const Approvals = () => {
  useEffect(() => {
    const getData = async () => {
      const data = await getApprovals();
      console.log({ data });
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
        <ApprovalsTable />
      </Stack>
    </Container>
  );
};
export default Approvals;
