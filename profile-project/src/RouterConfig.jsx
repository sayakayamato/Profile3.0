import { Route, Routes } from "react-router-dom";
import { Chats } from "./Chats";
import { CollectFeedback } from "./CollectFeedback";
import { MyProfilePage } from "./MyprofilePage";
import { QuestionDetailPage } from "./QuestionDetailPage";
import { UnderTabBar } from "./UnderTabBar";
import { FeedContents } from "./FeedContents";
// import { ChatsContents } from "./ChatsContents";





export const RouterConfig = () => {
    return (
        <>
                <Routes>
                    <Route path="/" element={<UnderTabBar />} />
                    <Route path="/MyProfilePage" element={<MyProfilePage />} />
                    <Route path="/QuestionDetailPage" element={<QuestionDetailPage />} />
                    <Route path="/CollectFeedback" element={<CollectFeedback />} />
                    <Route path="/Chats" element={<Chats />} />
                    <Route path="/UnderTabBar" element={<FeedContents />} />
                    <Route path="/Chats/:feedID" element={<Chats />} />
                </Routes>
        </>
    );
};