import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/clientApp";

const getApprovals = async () => {
  const dataSnapShot = await getDocs(collection(db, "house_visitors"));
  let data: any[] = [];
  await dataSnapShot.docs.forEach(doc => data.push(doc.data()));
  return data;
};
export { getApprovals };
