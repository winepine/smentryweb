import {

  Button,
  Container, Input,

} from "@chakra-ui/react";
import Router, { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";


export default function Login({setLoggedIn}:any) {
  const router = useRouter()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('');
  const [showPage,setShowPage]=useState(false);
  useEffect(()=>{
    const isLogged =localStorage.getItem('smentryAdminLoggedIn'); 
    if(isLogged=='true'){
      router.replace('/home')
    }else{
      setShowPage(true)
    }
  })
  const setAdminLoggedIn = ()=>{
    if(email=='admin' && password=='0316'){
      localStorage.setItem('smentryAdminLoggedIn',"true");
      setLoggedIn(true);
      router.replace('/home');
    }
  }
  if(showPage){

    return (
      <Container p={0} m={0}>
      <Input value={email} onChange={({target})=>setEmail(target.value)} placeholder="Email" />
      <Input value={password} onChange={({target})=>setPassword(target.value)} placeholder="Password" type='password' />
      <Button onClick={()=>setAdminLoggedIn()}>Login</Button>
    </Container>
  );
}
return <></>
}
