import React from 'react';
import { BrowserRouter, Link, } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import "./css/App.css";
import { Flex, Spacer } from '@chakra-ui/react'
// import { UnderTabBar } from './UnderTabBar';
import { RouterConfig } from './RoutingConfig';



function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        {/* {常に表示する部分} */}
        <div className='phone_size'>
          <div className='top_bar'>
            <Flex>
              Profile3.0
              <Spacer />

              <Link to="/MyProfilePage">profileページに移動</Link>
            </Flex>
          </div>

          <RouterConfig />
          
        </div>


      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
