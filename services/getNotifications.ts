import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/clientApp";

const getNotifications = async (houseId: any, block: any) => {
  const colRef = collection(db, "notifications");
  const ref = await getDocs(colRef);
  let notifications: any = [];
  ref.docs.forEach(doc => notifications.push({ ...doc.data(), id: doc.id }));
  const filteredNotifications = notifications.filter(
    (notification: any) =>
      notification.house.house_no === houseId &&
      notification.house.block === block
  );
  return filteredNotifications;
};
export default getNotifications;
