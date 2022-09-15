import { Tabs, TabList, TabPanels, Tab, TabPanel,} from '@chakra-ui/react'
import { FeedbackContents } from './FeedbackContents'
import { KeywordsContents } from './KeywordsContents'
import { ProfileTabContents } from './ProfiileTabContents'

export function TabContainer() {
    return (
        <>
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
                        ここにフィードバックが入るよ
                        <FeedbackContents />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}