import { collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/clientApp";

const dismissSos = async (sosId: any) => {
  const DBref = collection(db, "sos");
  const DocRef = doc(DBref, sosId);
  await updateDoc(DocRef, { dismissed: true });
};
export { dismissSos };
