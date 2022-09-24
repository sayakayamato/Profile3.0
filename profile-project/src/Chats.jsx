import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom';
import { ChatsContents } from "./ChatsContents";
// import { useParams } from "react-router-dom";

import "./css/Chats.css"


//テストデータ
// const ChatsData = [
//     {id:1, chat:"これは長所チャットです"},
//     {id:2, chat:"これは特徴チャットです"},
//     {id:3, chat:"今日のプレゼンどうでした？"},
//     {id:4, chat:"私って何色が似合うかなあ"},
//     {id:5, chat:"私の直すべきところってどこかな..."}
// ]


export function Chats(){

    // console.log(useParams());
    // const param = useParams();
    // console.log(param.feedID);

    //useLocationを使ってQuestionDetailContnetsからのstateを受け取る
    const questiontext = useLocation().state;
    const chatID = useLocation().questionID;

    console.log(chatID);

    //inputに入力したチャットテキスト
    const [inputChatText, setinputChatText] = useState("")

    //表示されているチャットテキスト
    const [chatText, setchatText] = useState([]);


    //inputのonChangeに設定する関数
    const onChangeChatText = (e) => setinputChatText(e.target.value);

    //送信ボタンを押したときの処理
    const onClickSend = () => {
        if(inputChatText === "") return;    //空文字で送信ボタンを押したときに処理が走らないようにする
        const newChatText =  [...chatText, inputChatText];
        setchatText(newChatText);
        setinputChatText("");
    }


    return(
        <>
        <div>
            <Link to="/"><button>戻る</button></Link>

        </div>
        <div className="chats_question">
            {questiontext}
        </div>
        <ChatsContents />
        <div className="chats_answer">
            {chatText.map((text) => {
                return(
                    <div key={text}>
                        <p>yamato sayaka</p>
                        <p>{text}</p>
                    </div>
                )
            })}
        </div>
        <div>
            <Input placeholder='フィードバックを送信' value={inputChatText} onChange={onChangeChatText} size='xs'/>
            <button onClick={onClickSend}>送信</button>
        </div>
        </>
    )
}