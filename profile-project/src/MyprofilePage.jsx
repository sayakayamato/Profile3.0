import { Tabs, TabList, TabPanels, Tab, TabPanel, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FeedbackContents } from './FeedbackContents'
import { KeywordsContents } from './KeywordsContents'
import { ProfileTabContents } from './ProfiileTabContents'
import { ProfileIcon } from './ProfileIcon'

export function MyProfilePage() {
    return (
        <>
        <Link to="/">戻る</Link>
            <div className='profile_info'>
                <div className='profile_icon'>
                    <ProfileIcon />
                </div>
                <div className='profile_name'>
                    sayaka yamato
                </div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>profile</Tab>
                    <Tab>keywords</Tab>
                    <Tab>feedback</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <ProfileTabContents />
                    </TabPanel>

                    <TabPanel>
                        <KeywordsContents />
                    </TabPanel>

                    <TabPanel>
                        <FeedbackContents />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}