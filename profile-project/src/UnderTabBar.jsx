<<<<<<< HEAD
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { FeedContents } from "./FeedContents";
import { FriendsContents } from "./FriendsContents";
import { HomeContents } from "./HomeContents";
import { NewFriendModal } from "./NewFriendModal";

export function UnderTabBar() {
  return (
    <>
      <Tabs
        variant="soft-rounded"
        colorScheme="whiteAlpha"
        isFitted="true"
        className="under_tab_bar"
      >
        <TabPanels>
          <TabPanel>
            <HomeContents />
          </TabPanel>
          <TabPanel>
            <FeedContents />
          </TabPanel>
          <TabPanel>
            <p className="friend">Friend</p>
            <FriendsContents />
            <NewFriendModal />
          </TabPanel>
        </TabPanels>
        <TabList className="under_nav_bar">
          <Tab color={"yellow.50"}>Home</Tab>
          <Tab color={"yellow.50"}>Feed</Tab>
          <Tab color={"yellow.50"}>Friend</Tab>
        </TabList>
      </Tabs>
    </>
  );
=======
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { FeedContents } from './FeedContents'
import { FriendsContents } from './FriendsContents'
import { HomeContents } from './HomeContents'
import { NewFriendModal } from './NewFriendModal'
import { Flex, Spacer } from '@chakra-ui/react'
import { Link, } from "react-router-dom";
import { Avatar, Wrap, WrapItem } from '@chakra-ui/react'



export function UnderTabBar() {
    return (
        <>
            <div className='top_bar'>
                <Flex>
                    <Link to="/" className='service_name'>Profile3.0</Link>
                    <Spacer />

                    <Link to="/MyProfilePage">
                        <Wrap className='top_profile_icon'>
                            <WrapItem>
                                <Avatar name='Dan Abrahmov' />
                            </WrapItem>

                        </Wrap>
                    </Link>
                </Flex>
            </div>
            <Tabs variant='soft-rounded' colorScheme='whiteAlpha' isFitted='true' className='under_tab_bar'>
                <TabPanels>
                    <TabPanel>
                        <HomeContents />
                    </TabPanel>
                    <TabPanel>
                        <FeedContents />
                    </TabPanel>
                    <TabPanel>
                        <p className='friend'>Friend</p>
                        <FriendsContents />
                        <NewFriendModal />
                    </TabPanel>
                </TabPanels>
                <TabList className='under_nav_bar'>
                    <Tab color={"yellow.50"}>Home</Tab>
                    <Tab color={"yellow.50"}>Feed</Tab>
                    <Tab color={"yellow.50"}>Friend</Tab>
                </TabList>
            </Tabs>
        </>
    )
>>>>>>> 546654df87ede59995b02ec7a92155b12fc71e0d
}
