import {
    Button,
    Divider,
    Heading,
    HStack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Stack,
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
import ResidentTableInHouses from "./ResidentsTableInHouses";
import VehicleTableInHouses from "./VehicleTableInHouses";
  
  function HousesModal({ isOpen, onOpen, onClose, data }: any) {
    console.log({ data });
    return (
      <>
        <Modal size='3xl' isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize='2xl' fontWeight='bold' >House Info</ModalHeader>
            <Divider />
            <ModalCloseButton />
            <ModalBody p={8}>
            
              <HStack justify='space-between'>
              <ResidentTableInHouses residents={data.residents} />
<VehicleTableInHouses vehicles={data.vehicles} />

              </HStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  }
  export default HousesModal;
  