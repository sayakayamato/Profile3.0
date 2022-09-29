import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
// import { useLocation } from 'react-router-dom';

import "./css/Chats.css";

export function ChatsContent() {
  //useLocationを使ってFeedContentsから値を受け取る
  // const location = useLocation();
  // const feedID = location.state.pushQuestionID;
  // console.log(feedID)

  //inputに入力したチャットテキスト
  const [inputChatText, setinputChatText] = useState("");

  //テストテータ
  const [chatText, setchatText] = useState([
    { id: "1", text: "明るい！" },
    { id: "2", text: "風情がある！" },
    { id: "5", text: "ウケる！" },
  ]);

  //送るチャットユーザーID
  const [userID, setuserID] = useState("");
  console.log(userID);

  //テストログインID
  const loginID = "5";

  //inputのonChangeに設定する関数
  const onChangeChatText = (e) => setinputChatText(e.target.value);

  //送信ボタンを押したときの処理
  const onClickSend = () => {
    if (inputChatText === "" || userID === "") return; //空文字で送信ボタンを押したときに処理が走らないようにする
    const newChatText = [...chatText, { id: userID, text: inputChatText }];
    setchatText(newChatText);
    setinputChatText("");
    setuserID("");
  };

  return (
    <>
      <div className="chats_answer">
        {chatText.map((chat) => {
          return (
            <div
              key={chat.id}
              className={chat.id === loginID ? "right" : "left"}
            >
              <p>yamato sayaka</p>
              <p>{chat.text}</p>
            </div>
          );
        })}
      </div>
      <div>
        <Input
          id="userID"
          size="xs"
          value={userID}
          onChange={(event) => setuserID(event.target.value)}
        />
        <Input
          placeholder="フィードバックを送信"
          value={inputChatText}
          onChange={onChangeChatText}
          size="xs"
        />
        <button onClick={onClickSend}>送信</button>
      </div>
    </>
  );
}
