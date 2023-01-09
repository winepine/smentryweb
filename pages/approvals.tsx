import {
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  Input,
  Select,
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
const constraints = ["name", "house"];
const Approvals = () => {
  const [approvals, setApprovals] = useState<any[]>([]);
  const [paginationState, setPaginationState] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [ogData, setOgData] = useState<any[]>([]);
  const [constraint, setConstraint] = useState("name");
  const [searchValue, setsearchValue] = useState("");
  useEffect(() => {
    let newData = ogData;
    if (searchValue != "") {
      if (constraint == "house") {
        newData = newData.filter(act =>
          act.house_no.house.toLowerCase().includes(searchValue.toLowerCase())
        );
      } else {
        newData = newData.filter(act =>
          act[constraint].toLowerCase().includes(searchValue.toLowerCase())
        );
      }
    }
    setApprovals(newData);
  }, [searchValue, approvals]);
  useEffect(() => {
    const colRef = collection(db, "house_visitors");
    const q = query(colRef, where("dismissed", "==", false));
    const unsub: Unsubscribe = onSnapshot(q, snapshot => {
      let approvals: any[] = [];

      snapshot.docs.forEach(doc => {
        approvals.push({ ...doc.data(), id: doc.id });
      });
      setOgData(approvals);
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
        <HStack pt={8}>
          <Input
            minW={"85%"}
            value={searchValue}
            onChange={({ target }) => setsearchValue(target.value)}
            bg="gray.100"
            placeholder="Search"
          />
          <Select
            bg={"gray.100"}
            onChange={({ target }) => setConstraint(target.value)}
          >
            {constraints.map(con => (
              <option value={con}>
                {con[0].toLocaleUpperCase() + con.substring(1, con.length)}
              </option>
            ))}
          </Select>
        </HStack>
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
