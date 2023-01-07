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
import { useState } from "react";
import { addHouse } from "../../services/addHouse";
  
  function RegisterHousesModal({ isOpen, onOpen, onClose }: any) {
    const toast = useToast();
    const [isLoading,setIsLoading]=useState(false);
    const [passShow,setPassShow]=useState(false);
    const [password,setPassword]=useState('')
    const [houseData, setHouseData] = useState({
        house_no: "",
        block: "",
        owner_name: "",
        owner_contact: ""
      });
      const onChangeFormValueHandler = ({
        target,
      }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setHouseData({
          ...houseData,
          [target.name]: target.value,
        });
      };
      const onFormSubmitHandler = async () => {
        let intialPassword = (Math.random() + 1).toString(36).substring(2);
        setPassword(intialPassword)
        setIsLoading(true);
        if(houseData.block===''){setIsLoading(false);toast({
            title: "Enter Req Values",
            status: 'error',
            isClosable: true,
            position: "top-right",
          });;return;}
        try{
            const response = await addHouse({...houseData,password:intialPassword});
            console.log({response})
            toast({
                title: "Operation Successful",
                status: 'success',
                isClosable: true,
                position: "top-right",
              });
        }
        catch(x){
            toast({
                title: "An Error Has Occured",
                status: 'error',
                isClosable: true,
                position: "top-right",
              });
        }
        finally{
            setIsLoading(false);
            setHouseData({
                ...houseData,
                house_no: "",
        block: "",
            })
            setPassShow(true);
        }
      }
    return (
      <>
        <Modal size='3xl' isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize='2xl' fontWeight='bold' >Add New House</ModalHeader>
            <Divider />
            <ModalCloseButton />
            <ModalBody p={8}>
            <Stack>
                <Text textAlign='center' fontSize='lg'>Fill In The Follwing Fields</Text>
                <Input onChange={onChangeFormValueHandler} name='house_no' value={houseData.house_no} placeholder="House No." />
                <Input onChange={onChangeFormValueHandler} name='block' value={houseData.block} placeholder="Block" />
                <Input onChange={onChangeFormValueHandler} name='owner_name' value={houseData.owner_name} placeholder="Owner Name" />
                <Input onChange={onChangeFormValueHandler} name='owner_contact' value={houseData.owner_contact} placeholder="Owner Contact" />
                <Box>
<Stack>
    {
passShow&&
        <Text mt={6} textAlign='center' color='green'>The Initially Created Password For {houseData.house_no}-{houseData.block} is {password}</Text>
    }
                <Button isLoading={isLoading}  colorScheme='green' onClick={()=>onFormSubmitHandler()}>Add House</Button>
                <Button colorScheme='red' onClick={()=>{setPassShow(false);onClose();}}>Close</Button>
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
  