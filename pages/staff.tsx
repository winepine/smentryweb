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
import { StaffColumns } from "../components/staff/StaffColumns";

import { db } from "../firebase/clientApp";
const constraints = ["name", "house"];

const Staff = () => {
  const [staff, setStaff] = useState<any[]>([]);
  console.log({ staff });
  const [paginationState, setPaginationState] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [ogData, setOgData] = useState<any[]>([]);
  const [constraint, setConstraint] = useState("name");
  const [searchValue, setsearchValue] = useState("");
  const filterByHouses = (houses: any) => {
    let isMatch = false;
    houses.house_no.filter((a: any) => {
      if (a.house.includes(searchValue)) {
        isMatch = true;
      }
    });
    return isMatch;
  };
  useEffect(() => {
    let newData = ogData;
    if (searchValue != "") {
      if (constraint == "house") {
        newData = newData.filter(act => filterByHouses(act));
      } else {
        newData = newData.filter(act =>
          act[constraint].toLowerCase().includes(searchValue.toLowerCase())
        );
      }
    }
    setStaff(newData);
  }, [searchValue]);
  useEffect(() => {
    const colRef = collection(db, "staff");
    const unsub = onSnapshot(colRef, snapshot => {
      let staff: any[] = [];
      snapshot.docs.forEach(doc => staff.push({ ...doc.data(), id: doc.id }));
      setStaff(staff);
      setOgData(staff);
    });
    return unsub;
  }, []);
  return (
    <Container bg="white" minW="100%" p={0} m={0}>
      <Header />
      <Stack p={8} px={16}>
        <Heading>Staff</Heading>
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
            {constraints.map((con, key) => (
              <option key={key} value={con}>
                {con[0].toLocaleUpperCase() + con.substring(1, con.length)}
              </option>
            ))}
          </Select>
        </HStack>
        <OurTable
          data={staff}
          columns={StaffColumns}
          paginationState={paginationState}
          onPaginationChange={setPaginationState}
          isStaff={true}
        />
      </Stack>
    </Container>
  );
};
export default Staff;
