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
import { InvitesColumns } from "../components/invites/InvitesColumns";
import DeliveryActions from "../components/requests/DeliveryActions";
import { RequestsColumns } from "../components/requests/RequestsColumns";
import { StaffColumns } from "../components/staff/StaffColumns";

import { db } from "../firebase/clientApp";
const constraints = ["name", "house", "numberplate"];

const Invites = () => {
  const [invites, setInvites] = useState<any[]>([]);
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
    setInvites(newData);
  }, [searchValue]);
  useEffect(() => {
    const colRef = collection(db, "invites");
    const unsub = onSnapshot(colRef, snapshot => {
      let invites: any[] = [];
      snapshot.docs.forEach(doc => invites.push({ ...doc.data(), id: doc.id }));
      setInvites(invites);
      setOgData(invites);
    });
    return unsub;
  }, []);
  return (
    <Container bg="white" minW="100%" p={0} m={0}>
      <Header />
      <Stack p={8} px={16}>
        <Heading>Invites</Heading>
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
          data={invites}
          columns={InvitesColumns}
          paginationState={paginationState}
          onPaginationChange={setPaginationState}
        />
      </Stack>
    </Container>
  );
};
export default Invites;
