import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/nav";
import customTheme from "../styles/chakraTheme";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loggedIn,setLoggedIn]=useState('');
  useEffect(()=>{
    const isAuthorized:any = localStorage.getItem('smentryAdminLoggedIn');
    setLoggedIn(isAuthorized);
    if(isAuthorized!=='true'&&router.pathname!=='/'){
      router.replace('/');
    }
  },[loggedIn])
  if(router.pathname=='/'){
    return <ChakraProvider theme={customTheme}>
          <Component setLoggedIn={setLoggedIn}  {...pageProps} />

  </ChakraProvider>
  }
  if(loggedIn){
    return (
      <ChakraProvider theme={customTheme}>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </ChakraProvider>
  );
}
return <></>
}
