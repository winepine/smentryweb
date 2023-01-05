import {
  collection,
  addDoc,
  getDocs,
  DocumentData,
  serverTimestamp,
} from "firebase/firestore";
import { VisitorDataType } from "../components/home/types/VisitorDataType";
import { db } from "../firebase/clientApp";
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
  } else {
    docRef = await addDoc(collection(db, "house_visitors"), {
      ...visitorData,
      house_no: { house: visitorData.house_no, block: visitorData.block },
      status: "Not Approved",
      dismissed: false,
      createdAt: serverTimestamp(),
    });
  }
  console.log({ docRef });
  //return docRef;
};
export { DB_AddVisitorOrRequest };
