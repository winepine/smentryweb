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

function StaffModal({ isOpen, onOpen, onClose, data }: any) {
  console.log({ data });
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Staff Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={8}>
            <Stack>
              <Text>
                Name:
                {data[0].getValue()}
              </Text>
              <Text>
                CNIC:
                {data[1].getValue()}
              </Text>
              <Text>
                House Numbers:
                {data[2].getValue().map((h: any) => (
                  <>
                    {h.house}-{h.block},
                  </>
                ))}
              </Text>
              <Text>
                Contact Numbers:
                {data[3].getValue()}
              </Text>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default StaffModal;
