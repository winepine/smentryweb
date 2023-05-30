import { Button, useToast } from "@chakra-ui/react";
import { serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { addActivity } from "../../services/addActivity";
import { inviteEntry } from "../../services/inviteEntry";
const InvitesActions = ({ invite }: any) => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const Submitdismiss = async () => {
    setIsLoading(true);
    await addActivity({
      name: invite.name,
      cnic: "",
      house_no: invite.house_no,
      numberplate: invite.numberplate,
      type: "Invited Guest",
      additional: invite.additional,
      createdAt: serverTimestamp(),
    });
    await inviteEntry(invite.id);
    setIsLoading(false);
    toast({
      title: `Entry Recorded For ${invite.name}`,
      status: "success",
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <>
      {invite.status !== "Entered" && (
        <Button
          isLoading={isLoading}
          fontSize={"xs"}
          size="xs"
          onClick={() => Submitdismiss()}
        >
          Grant Entry
        </Button>
      )}
    </>
  );
};
export default InvitesActions;
