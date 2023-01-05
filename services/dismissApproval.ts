import { collection } from "firebase/firestore";
import { db } from "../firebase/clientApp";

const dismissApproval = async () => {
  const ref = collection(db, "house_visitors");
};
export { dismissApproval };
