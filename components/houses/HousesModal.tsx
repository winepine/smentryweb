import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    useDisclosure,
  } from "@chakra-ui/react";
  
  function HousesModal({ isOpen, onOpen, onClose, data }: any) {
    console.log({ data });
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>House Info</ModalHeader>
            <ModalCloseButton />
            <ModalBody p={8}>
              
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  }
  export default HousesModal;
  