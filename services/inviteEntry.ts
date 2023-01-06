import { collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/clientApp";

const inviteEntry = async (inviteID: any) => {
    console.log(inviteID)
  const DBref = collection(db, "invites");
  const DocRef = doc(DBref, inviteID);
  await updateDoc(DocRef, { status: "Entered" });
};
export { inviteEntry };
