import { Button, useDisclosure } from "@chakra-ui/react";
import HousesModal from "./HousesModal";
import {resetHouse} from '../../services/resetHouse'
const HousesActions = ({ house }: any) => {
  console.log(house)
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
        <Button
          onClick={onOpen}
          fontSize="xs"
          mr={2}
          colorScheme="blue"
        >
          View
        </Button>
      
      {house.status === "Active" && (
        <Button
        onClick={()=>resetHouse(house.id)}
          fontSize="xs"
          mr={2}
          colorScheme="red"
        >
          Reset
        </Button>
      )}
      <HousesModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} data={house} />
    </>
  );
};
export default HousesActions;
