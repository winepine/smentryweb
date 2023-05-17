import {
  collection,
  addDoc,
  getDocs,
  DocumentData,
  serverTimestamp,
} from "firebase/firestore";
import { VisitorDataType } from "../components/home/types/VisitorDataType";
import { db } from "../firebase/clientApp";
import axios from "axios";
const DB_AddVisitorOrRequest = async (visitorData: VisitorDataType) => {
  let docRef;
  if (visitorData.house_no == "") {
    const updatedData = {
      name: visitorData.name,
      cnic: visitorData.cnic,
      numberplate: visitorData.numberplate,
      createdAt: serverTimestamp(),
    };
    docRef = await addDoc(collection(db, "visitors"), updatedData);
    // const sendNotification = await fetch(
    //   "https://exp.host/--/api/v2/push/send",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       to: "ExponentPushToken[C87q7YA563TKRJyHx_-G6E]",
    //       title: "New Visitor",
    //       body: "A new visitor has arrived",
    //     }),
    //   }
    // );
    // console.log({ sendNotification });
  } else {
    docRef = await addDoc(collection(db, "house_visitors"), {
      ...visitorData,
      house_no: { house: visitorData.house_no, block: visitorData.block },
      status: "Not Approved",
      dismissed: false,
      createdAt: serverTimestamp(),
    });
    // const sendNotification = await axios.post(
    //   "https://exp.host/--/api/v2/push/send",
    //   {
    //     to: "ExponentPushToken[C87q7YA563TKRJyHx_-G6E]",
    //     title: "New Visitor",
    //     body: "A new visitor has arrived",
    //   }
    // );
    const sendNotification = await fetch(`/api/hello?name=${visitorData.name}`);

    console.log({ sendNotification });
  }
  console.log({ docRef });
  //return docRef;
};
export { DB_AddVisitorOrRequest };
