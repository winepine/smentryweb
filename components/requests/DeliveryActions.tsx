import { Button } from "@chakra-ui/react";

const DeliveryActions = ({ request }: any) => {
  return (
    <>
      <Button colorScheme="blue">Mark Complete</Button>
      <Button colorScheme="red">Dismiss/Cancel</Button>
    </>
  );
};
export default DeliveryActions;
