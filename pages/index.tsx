import {Button} from '@chakra-ui/react'
import { getData } from '../services/addData';
import {useState,useEffect} from 'react'
export default function Home() {
  const getTodos = async () => {
    
    // const todosQuery = query(todosCollection);
    // const querySnapshot = await getDocs(todosQuery);
    // const result: QueryDocumentSnapshot<DocumentData>[] = [];
    // querySnapshot.forEach((snapshot) => {
    // result.push(snapshot);
    // });
    // console.log({result})
    // setQueryData(result);
    
 };
 
 useEffect( () => {
    // addData();
    const getDataa =async ()=>{
      const response = await getData()
      console.log({response})
    }
    getDataa()
 },[]);
  return (
    <div>
      <button>Smentry WEB</button>
      {/* <h3>{JSON.stringify(queryData)}</h3> */}
    </div>
  )
}
