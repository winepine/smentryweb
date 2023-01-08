import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/nav";
import customTheme from "../styles/chakraTheme";
import { useRouter } from "next/router";
import { AuthContext } from "../contexts/AuthContext";
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
      <AuthContext.Provider value={loggedIn}>
          <Component {...pageProps} />
      </AuthContext.Provider>

  </ChakraProvider>
  }
  if(loggedIn){
    return (
      <ChakraProvider theme={customTheme}>
      <AuthContext.Provider value={loggedIn}>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
      </AuthContext.Provider>
    </ChakraProvider>
  );
}
return <></>
}
