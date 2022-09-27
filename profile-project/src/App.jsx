import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import "./css/App.css";
import "./css/Home.css"
// import { UnderTabBar } from './UnderTabBar';
import { RouterConfig } from "./RouterConfig";



function App() {
  return (
    <div className='phone_size'>

      <ChakraProvider>
        <BrowserRouter>


          <RouterConfig />


        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}
// {さとるだよ}

export default App;
