import { Route, Routes } from "react-router-dom";
import { MyProfilePage } from "./MyprofilePage";
import { UnderTabBar } from "./UnderTabBar";


export const RouterConfig = () => {
    return (
        <>
                <Routes>
                    <Route path="/" element={<UnderTabBar />} />
                    <Route path="/MyProfilePage" element={<MyProfilePage />} />
                </Routes>
        </>
    );
};