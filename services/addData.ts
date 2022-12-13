import { collection, addDoc, getDocs, DocumentData } from "firebase/firestore"; 
import {db} from '../firebase/clientApp'
const getData = async()=>{
    const querySnapshot = await getDocs(collection(db, "users"));
    let data:Array<DocumentData>=[]
    querySnapshot.forEach((doc) => {
      data.push(doc.data())
    });
    return data;
}
export {getData}
