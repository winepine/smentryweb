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
const CarsTableInHouses = ({vehicles}:any)=>{
    return <TableContainer>
    <Heading color='gray.600' fontSize='2xl' mb={8} fontWeight='semibold' textAlign='center'>Vehicles</Heading>
<Table  variant='simple'>

<Thead>
<Tr>
<Th>Name</Th>
<Th>Numberplate</Th>
</Tr>
</Thead>
<Tbody>
{
  
  vehicles.map((vehicle:any,key:any)=>
            <Tr key={key}>
                <Td>{vehicle.name}</Td>
                <Td>{vehicle.numberplate}</Td>
            </Tr>
  )
}
</Tbody>

</Table>
</TableContainer>
}
export default CarsTableInHouses