import '../styles/global.scss';
import { Login } from '../components/Login';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
{/*       {isLogged 
        ? <Component {...pageProps} /> 
        : <Login />
      }  */}  
      <Component {...pageProps} />    
    </>
  )
}

export default MyApp;
