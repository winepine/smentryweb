import { Button, useToast } from "@chakra-ui/react";
import { serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { addActivity } from "../../services/addActivity";
import { dismissApproval } from "../../services/dismissApproval";

const ActionsForApprovals = ({ approval }: any) => {
  const toast = useToast();
  const [isLoading,setIsLoading] =useState(false);
  const Submitdismiss = async()=>{
    setIsLoading(true);
    await addActivity({
      name:approval.name,
      cnic:approval.cnic,
      house_no:approval.house_no,
      numberplate:approval.numberplate,
      type:'Resident Approved',
      additional:approval.additional,
      createdAt:serverTimestamp()
    })
    await dismissApproval(approval.id);
    setIsLoading(false);
    toast({
      title: `Entry Recorded For ${approval.name}`,
      status: "success",
      isClosable: true,
      position: "top-right",
    });
  }
  return (
    <>
    {
      approval.status==='Approved'&&
      <Button fontSize='xs' size='xs' isLoading={isLoading} onClick={() => Submitdismiss()} colorScheme="red">
        Dismiss
      </Button>
      }
    </>
  );
};
export default ActionsForApprovals;
