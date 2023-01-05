import { collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/clientApp";

const dismissApproval = async (approvalID: any) => {
  const DBref = collection(db, "house_visitors");
  const DocRef = doc(DBref, approvalID);
  await updateDoc(DocRef, { status: "Approved" });
};
export { dismissApproval };
