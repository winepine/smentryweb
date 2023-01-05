import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/clientApp";

const AddNotification = async (notificationData: any) => {
  const docRef = await addDoc(
    collection(db, "notifications"),
    notificationData
  );
  return docRef;
};
export { AddNotification };
