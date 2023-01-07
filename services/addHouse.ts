import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore"
import { db } from "../firebase/clientApp"

const addHouse  = async(houseInfo:any)=>{
    const colRef = collection(db,"houses");
    const ref = await addDoc(colRef,{
        ...houseInfo,
        residents:[],
        vehicles:[],
        status:"Not Active",
        createdAt:serverTimestamp()
    })
    return ref;
}
export {addHouse}