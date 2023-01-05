import { Button } from "@chakra-ui/react";
import { dismissApproval } from "../../services/dismissApproval";

const ActionsForApprovals = ({ approval }: any) => {
  //console.log(approval);
  return (
    <>
      <Button onClick={() => dismissApproval(approval.id)} colorScheme="red">
        Dismiss
      </Button>
    </>
  );
};
export default ActionsForApprovals;
