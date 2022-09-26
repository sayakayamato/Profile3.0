import React, { useState,} from "react";
import { Link } from "react-router-dom";
import { Input } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom';
import { ChatsContents } from "./ChatsContents";
// import { useParams } from "react-router-dom";

import "./css/Chats.css"



export function Chats(){


    //useLocationを使ってFeedContentsから値を受け取る
    const location = useLocation();
    console.log(location)
    const questiontext = location.state.whatfeedtext;
    console.log(questiontext);
    const feedID = location.state.pushQuestionID;
    console.log(feedID)





    //inputに入力したチャットテキスト
    const [inputChatText, setinputChatText] = useState("")

    //テストテータ
    const [chatText, setchatText] = useState(["明るい！", "風情がある！","ウケる！"]);
    
    //送るチャットユーザーID
    const [userID, setuserID] = useState("");
    console.log(userID);

    //テストログインID
    const loginID = "5";
    
    


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
            {/* {questiontext} */}
        </div>
        <ChatsContents />
        <div className="chats_answer">
            {chatText.map((text) => {
                return(
                    
                    <div key={text} className={userID === loginID ? "right" : "left" }>
                        <p>yamato sayaka</p>
                        <p>{text}</p>
                    </div>
                )
            })}
        </div>
        <div>
            <Input  id="userID" size='xs' value={userID} onChange={(event) => setuserID(event.target.value)}/>
            <Input placeholder='フィードバックを送信' value={inputChatText} onChange={onChangeChatText} size='xs'/>
            <button onClick={onClickSend}>送信</button>
        </div>
        </>
    )
}