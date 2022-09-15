import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {HomeContents} from './HomeContents'


export function UnderTabBar() {
    return (
        <>
            <Tabs variant='soft-rounded' colorScheme='whiteAlpha' isFitted='true' className='under_tab_bar'>
            <TabPanels>
                    <TabPanel>
                        <HomeContents />
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
                <TabList className='under_nav_bar'>
                    <Tab color={"yellow.50"}>Home</Tab>
                    <Tab color={"yellow.50"}>Create</Tab>
                    <Tab color={"yellow.50"}>Friend</Tab>
                </TabList>
                
            </Tabs>
        </>
    )
}

