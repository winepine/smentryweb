import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { initScriptLoader } from "next/script";
import { useEffect, useState } from "react";
import { addHouse } from "../../services/addHouse";
import { getHouses } from "../../services/getHouses";

function RegisterHousesModal({ isOpen, onOpen, onClose }: any) {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [passShow, setPassShow] = useState(false);
  const [password, setPassword] = useState("");
  const [houses, setHouses] = useState<any[]>([]);
  const [houseData, setHouseData] = useState({
    house_no: "",
    block: "",
    owner_name: "",
    owner_contact: "",
  });
  useEffect(() => {
    const getHousesz = async () => {
      const res = await getHouses();
      setHouses(res);
      console.log({ res });
    };
    getHousesz();
  }, []);
  const onChangeFormValueHandler = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setHouseData({
      ...houseData,
      [target.name]: target.value,
    });
  };
  const onFormSubmitHandler = async () => {
    if (houseData.house_no.length == 0) {
      toast({
        title: "Invalid House No.",
        status: "error",
        isClosable: true,
        position: "top-right",
      });
      return;
    }
    if (houseData.block.length != 1) {
      toast({
        title: "Invalid Block Value",
        status: "error",
        isClosable: true,
        position: "top-right",
      });
      return;
    }
    if (houseData.owner_name.length == 0) {
      toast({
        title: "Invalid Owner Name",
        status: "error",
        isClosable: true,
        position: "top-right",
      });
      return;
    }
    if (houseData.owner_contact.length < 9) {
      toast({
        title: "Invalid Phone No.",
        status: "error",
        isClosable: true,
        position: "top-right",
      });
      return;
    }
    let alreadyExists = false;
    houses.forEach(house => {
      if (
        house.house_no == houseData.house_no &&
        house.block == houseData.block
      ) {
        alreadyExists = true;
      }
      setIsLoading(false);
    });
    if (alreadyExists) {
      toast({
        title: "House Already Exists",
        status: "error",
        isClosable: true,
        position: "top-right",
      });
      return;
    }
    let intialPassword = (Math.random() + 1).toString(36).substring(2);
    setPassword(intialPassword);
    setIsLoading(true);
    if (houseData.block === "") {
      setIsLoading(false);
      toast({
        title: "Enter Req Values",
        status: "error",
        isClosable: true,
        position: "top-right",
      });
      return;
    }
    try {
      const response = await addHouse({
        ...houseData,
        password: intialPassword,
      });
      console.log({ response });
      toast({
        title: "Operation Successful",
        status: "success",
        isClosable: true,
        position: "top-right",
      });
    } catch (x) {
      toast({
        title: "An Error Has Occured",
        status: "error",
        isClosable: true,
        position: "top-right",
      });
    } finally {
      setIsLoading(false);
      setHouseData({
        ...houseData,
        owner_name: "",
        owner_contact: "",
      });
      setPassShow(true);
    }
  };
  return (
    <>
      <Modal size="3xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="2xl" fontWeight="bold">
            Add New House
          </ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody p={8}>
            <Stack>
              <Text textAlign="center" fontSize="lg">
                Fill In The Follwing Fields
              </Text>
              <Input
                onChange={onChangeFormValueHandler}
                name="house_no"
                value={houseData.house_no}
                placeholder="House No."
                type="number"
              />
              <Input
                onChange={onChangeFormValueHandler}
                name="block"
                value={houseData.block}
                placeholder="Block"
              />
              <Input
                onChange={onChangeFormValueHandler}
                name="owner_name"
                value={houseData.owner_name}
                placeholder="Owner Name"
              />
              <Input
                onChange={onChangeFormValueHandler}
                name="owner_contact"
                value={houseData.owner_contact}
                placeholder="Owner Contact"
                type={"tel"}
              />
              <Box pt={6}>
                <Stack>
                  {passShow && (
                    <Text mt={6} textAlign="center" color="green">
                      The Initially Created Password For {houseData.house_no}-
                      {houseData.block} is {password}
                    </Text>
                  )}
                  <Button
                    isLoading={isLoading}
                    colorScheme="green"
                    onClick={() => onFormSubmitHandler()}
                  >
                    Add House
                  </Button>
                  <Button
                    colorScheme="red"
                    onClick={() => {
                      setPassShow(false);
                      onClose();
                    }}
                  >
                    Close
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default RegisterHousesModal;
