import { collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/clientApp";

const dismissDeliveryRequest = async (deliveryID: any) => {
  const DBref = collection(db, "Delivery_Requests");
  const DocRef = doc(DBref, deliveryID);
  await updateDoc(DocRef, { status: "Cancelled" });
};
const completeDeliveryRequest = async (deliveryID: any) => {
  const DBref = collection(db, "Delivery_Requests");
  const DocRef = doc(DBref, deliveryID);
  await updateDoc(DocRef, { status: "Completed" });
};
export { dismissDeliveryRequest, completeDeliveryRequest };
