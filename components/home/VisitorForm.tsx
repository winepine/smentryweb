import {
  Button,
  HStack,
  Input,
  Select,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
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
  const [isLoading,setIsLoading]=useState(false);
  const [visitorData, setVisitorData] = useState<VisitorDataType>({
    name: "",
    cnic: "",
    numberplate: "",
    house_no: "",
    block: "A",
    additional: "",
  });
  const onChangeFormValueHandler = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setVisitorData({
      ...visitorData,
      [target.name]: target.value,
    });
  };
  const onFormSubmitHandler = async () => {
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
        additional:visitorData.additional
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
            onChange={onChangeFormValueHandler}
            value={visitorData.name}
            name="name"
            placeholder="Name"
          />
          <Input
            onChange={onChangeFormValueHandler}
            value={visitorData.cnic}
            name="cnic"
            placeholder="CNIC"
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
              onChange={onChangeFormValueHandler}
              value={visitorData.house_no}
              placeholder="Where"
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
