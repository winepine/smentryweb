import {
    Heading,
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
const ResidentTableInHouses = ({residents}:any)=>{
    return <TableContainer>
    <Heading color='gray.600' fontSize='2xl' mb={8} fontWeight='semibold' textAlign='center'>Residents</Heading>
<Table  variant='simple'>

<Thead>
<Tr>
<Th>Name</Th>
<Th>CNIC</Th>
</Tr>
</Thead>
<Tbody>
{
  residents.map((resident:any,key:any)=>
  <Tr key={key}>
      <Td>{resident.name}</Td>
      <Td>{resident.cnic}</Td>
  </Tr>
  )
}
</Tbody>

</Table>
</TableContainer>
}
export default ResidentTableInHouses