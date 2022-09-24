import React from "react";
import { useParams } from "react-router-dom";

export function ChatsContents(){

    // console.log(useParams());
    const param = useParams();
    // console.log(param.feedID);
    
    

    //テストデータ
    // const chat = [
    //     {id:0, questionID:, resUserID:, resText:}
    // ]

    return(
        <>
        {param.feedID}のチャット内容ページです
        </>
    )
}