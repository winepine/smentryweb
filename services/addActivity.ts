import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase/clientApp"

const addActivity = async(activity:any)=>{
    const colRef = collection(db,"activity");
    const ref = await addDoc(colRef,activity);
    return ref;
}
export {addActivity}