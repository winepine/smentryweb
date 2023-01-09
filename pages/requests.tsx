import {
  Box,
  Container,
  Heading,
  HStack,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import OurTable from "../components/approvals/Table";
import Header from "../components/home/Header";
import DeliveryActions from "../components/requests/DeliveryActions";
import { RequestsColumns } from "../components/requests/RequestsColumns";

import { db } from "../firebase/clientApp";
const constraints = ["store_name", "house"];
const Requests = () => {
  const [requests, setRequests] = useState<any[]>([]);
  const [paginationState, setPaginationState] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [ogData, setOgData] = useState<any[]>([]);
  const [constraint, setConstraint] = useState("store_name");
  const [searchValue, setsearchValue] = useState("");
  useEffect(() => {
    let newData = ogData;
    console.log({ constraint });
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
    setRequests(newData);
  }, [searchValue, requests]);
  useEffect(() => {
    const colRef = collection(db, "Delivery_Requests");
    const unsub = onSnapshot(colRef, snapshot => {
      let req: any[] = [];
      snapshot.docs.forEach(doc => req.push({ ...doc.data(), id: doc.id }));
      setRequests(req);
      setOgData(req);
    });
    return unsub;
  }, []);
  return (
    <Container bg="white" minW="100%" p={0} m={0}>
      <Header />
      <Stack p={8} px={16}>
        <Heading>Requests</Heading>
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
        <OurTable
          data={requests}
          columns={RequestsColumns}
          paginationState={paginationState}
          onPaginationChange={setPaginationState}
        />
      </Stack>
    </Container>
  );
};
export default Requests;
