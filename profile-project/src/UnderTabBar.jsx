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
}
