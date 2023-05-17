import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Text,
  useDisclosure,
  useToast,
  Image,
} from "@chakra-ui/react";
import { serverTimestamp } from "firebase/firestore";
// import Image from "next/image";
import { useState } from "react";
import { addActivity } from "../../services/addActivity";

function StaffModal({ isOpen, onOpen, onClose, data }: any) {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [houseSelected, setHouseSelected] = useState("0");
  const Submitdismiss = async () => {
    if (houseSelected == "") {
      toast({
        title: `Select A House`,
        status: "error",
        isClosable: true,
        position: "top-right",
      });
      return;
    }
    const house_idx = parseInt(houseSelected);
    setIsLoading(true);
    await addActivity({
      name: data.name,
      cnic: data.cnic,
      house_no: data.house_no[house_idx],
      numberplate: "",
      type: "Staff",
      additional: "",
      createdAt: serverTimestamp(),
    });
    setIsLoading(false);
    toast({
      title: `Entry Recorded For ${data.name}`,
      status: "success",
      isClosable: true,
      position: "top-right",
    });
    onClose();
  };
  console.log({ data });
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Staff Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={8}>
            <Stack align="center">
              <Image
                src={data.image}
                alt="Staff Image"
                w="48"
                rounded="lg"
                textAlign="center"
              />
              <Text>
                Name:
                {data.name}
              </Text>
              <Text>
                CNIC:
                {data.cnic}
              </Text>
              <Text>
                Contact Numbers:
                {data.contact_no}
              </Text>
              <Select
                placeholder="Houses"
                value={houseSelected}
                onChange={({ target }) => setHouseSelected(target.value)}
              >
                {data.house_no.map((h: any, i: any) => (
                  <option key={i} value={i}>
                    {h.house}-{h.block}
                  </option>
                ))}
              </Select>
              {/* <Text>
                House Numbers:
                {data[2].getValue().map((h: any) => (
                  <>
                    {h.house}-{h.block},
                  </>
                ))}
              </Text> */}
              <Stack minW={"100%"}>
                <Button
                  isLoading={isLoading}
                  onClick={() => Submitdismiss()}
                  mt={4}
                  my={4}
                  colorScheme="green"
                >
                  Insert Entry
                </Button>
              </Stack>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default StaffModal;
