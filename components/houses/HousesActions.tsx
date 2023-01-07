import { Button, useDisclosure } from "@chakra-ui/react";
import HousesModal from "./HousesModal";

const HousesActions = ({ house }: any) => {
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
