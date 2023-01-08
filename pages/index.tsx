import {

  Box,
  Button,
  Container, Heading, Input, Stack, Toast, useToast,

} from "@chakra-ui/react";
import Router, { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";


export default function Login({setLoggedIn}:any) {
  const router = useRouter()
  const toast = useToast();
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
      toast({
        title:'Success',
        status: 'success',
                isClosable: true,
                position: "top-right",
      })
      router.replace('/home');
    }else{
      toast({
        title:'Invalid ID/Pass',
        status: 'error',
                isClosable: true,
                position: "top-right",
      })
    }
  }
  if(showPage){

    return (
      <Container minH={'100vh'} bg='gray.100' minW={'100%'} p={0} m={0}>
        
<Stack pt={40} align={'center'}>
  <Box p={24} py={36} bg={'white'} rounded='xl'>
<Stack>

        <Heading textAlign='center'>Smentry Portal</Heading>

      <Input bg={'gray.100'}  w='xl' value={email} onChange={({target})=>setEmail(target.value)} placeholder="Email" />
      <Input bg={'gray.100'}  w='xl' value={password} onChange={({target})=>setPassword(target.value)} placeholder="Password" type='password' />
      <Button colorScheme='green' w='xl'  onClick={()=>setAdminLoggedIn()}>Login</Button>
</Stack>
  </Box>
</Stack>
    </Container>
  );
}
return <></>
}
