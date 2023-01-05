import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/clientApp";

const getApprovalsCount = async () => {
  const ref = collection(db, "house_visitors");
  const q = query(ref, where("dismissed", "==", false));
  const res = await getDocs(q);
  return res.size;
};
export { getApprovalsCount };
