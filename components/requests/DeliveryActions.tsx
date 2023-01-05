import { Button } from "@chakra-ui/react";
import {
  completeDeliveryRequest,
  dismissDeliveryRequest,
} from "../../services/dismissDeliveryRequest";

const DeliveryActions = ({ request }: any) => {
  return (
    <>
      {request.status === "Cancelled" && (
        <Button
          onClick={() => completeDeliveryRequest(request.id)}
          fontSize="xs"
          mr={4}
          colorScheme="blue"
        >
          Mark Complete
        </Button>
      )}
      {request.status === "Completed" && (
        <Button
          onClick={() => dismissDeliveryRequest(request.id)}
          fontSize="xs"
          mr={4}
          colorScheme="red"
        >
          Dismiss/Cancel
        </Button>
      )}
    </>
  );
};
export default DeliveryActions;
