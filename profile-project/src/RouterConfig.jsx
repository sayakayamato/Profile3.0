import { Route, Routes } from "react-router-dom";
import { CollectFeedback } from "./CollectFeedback";
import { MyProfilePage } from "./MyprofilePage";
import { QuestionDetailPage } from "./QuestionDetailPage";
import { UnderTabBar } from "./UnderTabBar";



export const RouterConfig = () => {
    return (
        <>
                <Routes>
                    <Route path="/" element={<UnderTabBar />} />
                    <Route path="/MyProfilePage" element={<MyProfilePage />} />
                    <Route path="/QuestionDetailPage" element={<QuestionDetailPage />} />
                    <Route path="/CollectFeedback" element={<CollectFeedback />} />
                </Routes>
        </>
    );
};