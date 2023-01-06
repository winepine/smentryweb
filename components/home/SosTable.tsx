import {
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
const DummySOSData = [
  {
    house: 421,
    block: "C",
  },
  {
    house: 1,
    block: "B",
  },
  {
    house: 21,
    block: "C",
  },
  {
    house: 73,
    block: "D",
  },
];
const SosTable = () => {
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
            {DummySOSData.map((signal:any,key:any) => (
              <Tr key={key}>
                <Td>{signal.house}</Td>
                <Td>{signal.block}</Td>
                <Td textAlign="center">
                  <Button colorScheme="red" fontWeight="normal">
                    Dismiss
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
export default SosTable;
