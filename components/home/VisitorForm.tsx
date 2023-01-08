import {
  Button,
  HStack,
  Input,
  Select,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { serverTimestamp } from "firebase/firestore";
import React, {
  ChangeEventHandler,
  HtmlHTMLAttributes,
  useEffect,
  useState,
} from "react";
import { addActivity } from "../../services/addActivity";
import { DB_AddVisitorOrRequest } from "../../services/addVisitorOrRequest";
import { VisitorDataType } from "./types/VisitorDataType";
const VisitorForm = () => {
  const toast = useToast();
  const [isHouseVisitor, setIsHouseVisitor] = useState<boolean>(false);
  const [isInvalid,setIsInvalid]=useState({
    name: false,
    cnic: false,
    house_no: false,
    additional: false
  })
  const [isLoading,setIsLoading]=useState(false);
  const [visitorData, setVisitorData] = useState<VisitorDataType>({
    name: "",
    cnic: '',
    numberplate: "",
    house_no: "",
    block: "A",
    additional: "",
  });
  const validateInput = ()=>{
    
    let error=false;
    let errors= {
      name: false,
      cnic: false,
      house_no: false,
      additional: false
    };
    if(visitorData.name.length<3){
      errors={
        ...errors,name:true
      }
      error=true;
    }
    if(visitorData.cnic.length<13){
      errors={
        ...errors,cnic:true
      }
      error=true;
    }
    if(visitorData.house_no==""){
      if(visitorData.house_no.length>4){
        errors={
          ...errors,house_no:true
        }
        error=true;
      }
    }
    console.log({errors})
    setIsInvalid(errors)
    if(error){
      toast({
        title: "Invalid Values.",
        status: "error",
        isClosable: true,
        position: "top-right",
      });
    }
    return error;
  }
  const onChangeFormValueHandler = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setVisitorData({
      ...visitorData,
      [target.name]: target.value,
    });
  };
  const onFormSubmitHandler = async () => {
    if(validateInput()){
      return;
    }
    setIsLoading(true);
    await DB_AddVisitorOrRequest(visitorData);
    if(visitorData.house_no === "") {
      await addActivity({
        name:visitorData.name,
        cnic:visitorData.cnic,
        house_no:{
          house:'',
          block:''
        },
        numberplate:visitorData.numberplate,
        type:'visitor',
        additional:visitorData.additional,
        createdAt:serverTimestamp()
      });

    }
    const text =
      visitorData.house_no === ""
        ? "Visitor Added"
        : `Entrance Requested By ${visitorData.house_no}-${visitorData.block}`;
    toast({
      title: text,
      status: "success",
      isClosable: true,
      position: "top-right",
    });
    setIsLoading(false);
  };
  useEffect(() => {
    setIsHouseVisitor(!(visitorData.house_no == ""));
  }, [visitorData.house_no]);
  return (
    <>
      <Text fontSize="2xl" fontWeight="semibold">
        Visitor Info Form
      </Text>

      <HStack py={6} minW="100%" align="start">
        <Stack minW="50%">
          <Input
          isInvalid={isInvalid.name}
            onChange={onChangeFormValueHandler}
            value={visitorData.name}
            name="name"
            placeholder="Name"
          />
          <Input
          isInvalid={isInvalid.cnic}
            onChange={({target})=>{
              if(target.value.length<14){
                setVisitorData({
                  ...visitorData,
                  [target.name]: target.value,
                });
              }
            }}
            //as={InputMask}
            type='number'

            //mask="*************"
            //type='number'
            value={visitorData.cnic}
            name="cnic"
            placeholder="CNIC"
            maxLength={11}
          />
          <Input
            onChange={onChangeFormValueHandler}
            value={visitorData.numberplate}
            placeholder="Numberplate (Optional)"
            name="numberplate"
          />
        </Stack>
        <Stack minW="50%">
          <HStack>
            <Input
              name="house_no"
              
              isInvalid={isInvalid.house_no}

              onChange={({target})=>{
                if(target.value.length<5){
                  setVisitorData({
                    ...visitorData,
                    [target.name]: target.value,
                  });
                }
              }}
              value={visitorData.house_no}
              placeholder="Where"
              type='number'
            />
            <Select
              onChange={onChangeFormValueHandler}
              name="block"
              value={visitorData.block}
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </Select>
          </HStack>
          <Input
            name="additional"
            onChange={onChangeFormValueHandler}
            value={visitorData.additional}
            placeholder="Additional Information"
            isInvalid={isInvalid.additional}
          />
        </Stack>
      </HStack>
      <Button
        type="submit"
        colorScheme="green"
        fontWeight="normal"
        w="100%"
        mt={16}
        isLoading={isLoading}
        onClick={onFormSubmitHandler}
      >
        {isHouseVisitor ? "Request House Member" : "Issue Visitor Pass"}
      </Button>
    </>
  );
};
export default VisitorForm;
