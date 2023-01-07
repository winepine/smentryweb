import { Button } from "@chakra-ui/react";
import {
  completeDeliveryRequest,
  dismissDeliveryRequest,
} from "../../services/dismissDeliveryRequest";

const DeliveryActions = ({ request }: any) => {
  return (
    <>
      {request.status === "Pending" && (
        <>
        <Button
          onClick={() => completeDeliveryRequest(request.id)}
          fontSize="xs"
          size='sm'
          mr={4}
          colorScheme="blue"
          >
          Mark Complete
        </Button>
      
    
        <Button
          onClick={() => dismissDeliveryRequest(request.id)}
          fontSize="xs"
          size='sm'
          mr={4}
          colorScheme="red"
        >
          Mark Cancel
        </Button>
          </>
      )}
    </>
  );
};
export default DeliveryActions;
