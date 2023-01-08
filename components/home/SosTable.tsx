import {
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { collection, onSnapshot, Unsubscribe } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/clientApp";
import { dismissSos } from "../../services/dismissSosSignal";
const SosTable = () => {
  const [sosSignals, setsosSignals] = useState<any[]>([]);
  useEffect(() => {
    const colRef = collection(db, "sos");
    //const DBQuery = query(colRef, orderBy("createdAt"));
    const unsub: Unsubscribe = onSnapshot(colRef, snapshot => {
      let sos: any[] = [];
      snapshot.docs.forEach(doc => {
        sos.push({...doc.data(),id:doc.id});
      });

      setsosSignals(sos);
    });
    return unsub;
  }, []);
  if(sosSignals.length){
    return  <>
    <Text pt={6} fontSize="2xl" fontWeight="semibold">
      SOS Signals Live
    </Text>
    <Text pt={'4'}>No Signals</Text>
    </>
  }
  return (
    <>
      <Text pt={6} fontSize="2xl" fontWeight="semibold">
        SOS Signals Live
      </Text>
      <TableContainer w="100%">
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>House No.</Th>
              <Th>Block</Th>
              <Th textAlign="center">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sosSignals.map((signal:any,key:any) => {
              if(!signal.dismissed){
                return <Tr key={key}>
                <Td>{signal.house_no.house}</Td>
                <Td>{signal.house_no.block}</Td>
                <Td textAlign="center">
                  <Button onClick={()=>dismissSos(signal.id)} colorScheme="red" fontWeight="normal">
                    Dismiss
                  </Button>
                </Td>
              </Tr>
            }
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
export default SosTable;
