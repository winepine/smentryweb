import {

  Button,
  Container, Input,

} from "@chakra-ui/react";
import Router, { useRouter } from "next/router";
import { useState } from "react";


export default function Login() {
  const router = useRouter()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const setAdminLoggedIn = ()=>{
    if(email=='admin' && password=='0316'){
      localStorage.setItem('smentryAdminLoggedIn',"true");
      router.replace('/home');
    }
  }
  return (
    <Container p={0} m={0}>
      <Input value={email} onChange={({target})=>setEmail(target.value)} placeholder="Email" />
      <Input value={password} onChange={({target})=>setPassword(target.value)} placeholder="Password" type='password' />
      <Button onClick={()=>setAdminLoggedIn()}>Login</Button>
    </Container>
  );
}
