import { Button } from "@chakra-ui/react";

const ActionsForApprovals = ({ approval }: any) => {
  console.log(approval);
  return (
    <>
      <Button colorScheme="red">Dismiss</Button>
    </>
  );
};
export default ActionsForApprovals;
