import {
  Button,
  Divider,
  HStack,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import SosTable from "./SosTable";
import VisitorForm from "./VisitorForm";

const RightHalf = () => {
  return (
    <Stack p={8} align="center" w="50%">
      <VisitorForm />
      <Divider py={6} />
      <SosTable />
    </Stack>
  );
};
export default RightHalf;
