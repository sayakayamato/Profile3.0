import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import "./css/App.css";
import { MenuBar } from './MenuBar';
import { Flex, Spacer } from '@chakra-ui/react'
import { ProfileIcon } from './ProfileIcon';
import { UnderTabBar } from './UnderTabBar';

function App() {
  return (
    <ChakraProvider>
      <div className='phone_size'>
        <div className='top_bar'>
          <Flex>
            Profile3.0
            <Spacer />
            <MenuBar />
          </Flex>
        </div>

        <div className='profile_info'>
          <div className='profile_icon'>
            <ProfileIcon />
          </div>
          <div className='profile_name'>
            sayaka yamato
          </div>
        </div>

        <div className='under_tab_bar'>
        <UnderTabBar />
        </div>
      </div>

    </ChakraProvider>
  );
}

export default App;
