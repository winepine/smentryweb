import { collection, doc, updateDoc } from "firebase/firestore"
import { db } from "../firebase/clientApp"

const resetHouse  = async(houseID:any)=>{
    const colRef = collection(db,"houses");
    const docRef = doc(colRef,houseID);
    const ref = await updateDoc(docRef,{
        residents:[],
        vehicles:[],
        status:"Not Active"
    })
    return ref
}
export {resetHouse}