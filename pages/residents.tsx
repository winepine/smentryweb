import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Input,
  Select,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import OurTable from "../components/approvals/Table";
import Header from "../components/home/Header";
import { RequestsColumns } from "../components/requests/RequestsColumns";
import { HousesColumns } from "../components/houses/HousesColumns";
import { db } from "../firebase/clientApp";
import RegisterHousesModal from "../components/houses/RegisterHouseModal";
const constraints = ["owner_name", "house"];
const blocks = ["All Blocks", "A", "B", "C", "D"];

const Residents = () => {
  const [block, setBlock] = useState("All Blocks");
  const [houses, setHouses] = useState<any[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [paginationState, setPaginationState] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [ogData, setOgData] = useState<any[]>([]);
  const [constraint, setConstraint] = useState("owner_name");
  const [searchValue, setsearchValue] = useState("");
  useEffect(() => {
    let newData = ogData;
    if (searchValue != "") {
      if (constraint == "house") {
        newData = newData.filter(act =>
          act["house_no"].toLowerCase().includes(searchValue.toLowerCase())
        );
      } else {
        newData = newData.filter(act =>
          act[constraint].toLowerCase().includes(searchValue.toLowerCase())
        );
      }
    }
    if (block != "All Blocks") {
      newData = newData.filter(act => act.block == block);
    }
    setHouses(newData);
  }, [searchValue, block]);
  useEffect(() => {
    const colRef = collection(db, "houses");
    const unsub = onSnapshot(colRef, snapshot => {
      let house: any[] = [];
      snapshot.docs.forEach(doc => house.push({ ...doc.data(), id: doc.id }));
      setHouses(house);
      setOgData(house);
    });
    return unsub;
  }, []);
  return (
    <Container bg="white" minW="100%" p={0} m={0}>
      <Stack p={8} px={16}>
        <Heading>Houses Management</Heading>
        <HStack pt={8}>
          <Input
            minW={"55%"}
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
          <Select
            bg={"gray.100"}
            onChange={({ target }) => setBlock(target.value)}
          >
            {blocks.map(con => (
              <option value={con}>
                {con[0].toLocaleUpperCase() + con.substring(1, con.length)}
              </option>
            ))}
          </Select>
          <Button minW={"10%"} onClick={onOpen} colorScheme="green">
            Register
          </Button>
        </HStack>
        {/* <HStack pt={8}>
          <Input bg="gray.100" placeholder="Search" p={6} />
        </HStack> */}
        <OurTable
          data={houses}
          columns={HousesColumns}
          paginationState={paginationState}
          onPaginationChange={setPaginationState}
        />
      </Stack>
      <RegisterHousesModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Container>
  );
};
export default Residents;
