import {
  Box,
  Container,
  Heading,
  HStack,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ActivityColumns } from "../components/activity/ActivityColumns";
import OurTable from "../components/approvals/Table";
import { StaffColumns } from "../components/staff/StaffColumns";
import { db } from "../firebase/clientApp";
const constraints = ["name", "house", "cnic", "numberplate"];
const blocks = ["All Blocks", "A", "B", "C", "D"];
const Activity = () => {
  const [block, setBlock] = useState("All Blocks");
  const [activity, setActivity] = useState<any[]>([]);
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
    if (block != "All Blocks") {
      newData = newData.filter(act => act.house_no.block == block);
    }
    setActivity(newData);
  }, [searchValue, activity, block]);
  useEffect(() => {
    const colRef = collection(db, "activity");
    const q = query(colRef, orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, snapshot => {
      let activity: any[] = [];
      snapshot.docs.forEach(doc =>
        activity.push({ ...doc.data(), id: doc.id })
      );
      setActivity(activity);
      setOgData(activity);
    });
    return unsub;
  }, []);
  return (
    <Container bg="white" minW="100%" minH="98vh" p={0} m={0}>
      <Stack p={8} px={16}>
        <Heading>Activity</Heading>
        <HStack pt={8}>
          <Input
            minW={"70%"}
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
          <Select
            bg={"gray.100"}
            onChange={({ target }) => setBlock(target.value)}
          >
            {blocks.map((con, key) => (
              <option key={key} value={con}>
                {con[0].toLocaleUpperCase() + con.substring(1, con.length)}
              </option>
            ))}
          </Select>
        </HStack>
        <OurTable
          data={activity}
          columns={ActivityColumns}
          paginationState={paginationState}
          onPaginationChange={setPaginationState}
        />
      </Stack>
    </Container>
  );
};
export default Activity;
