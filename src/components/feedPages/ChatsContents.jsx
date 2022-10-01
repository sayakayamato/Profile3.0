import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
// import { useLocation } from 'react-router-dom';

import { useDataList } from "../../hooks/useDataList";
import { useDataCreate } from "../../hooks/useDataCreate";

import "../../css/Chats.css";
import { useAuthContext } from "../../contexts/AuthContext";

export function ChatsContent({ feedId }) {
  //useLocationを使ってFeedContentsから値を受け取る
  // const location = useLocation();
  // const feedID = location.state.pushQuestionID;
  // console.log(feedID)

  //inputに入力したチャットテキスト
  const [inputChatText, setInputChatText] = useState("");

  //   //テストテータ
  //   const [chatText, setChatText] = useState([
  //     { id: "1", text: "明るい！" },
  //     { id: "2", text: "風情がある！" },
  //     { id: "5", text: "ウケる！" },
  //   ]);

  const dataList = useDataList;
  const dataCreate = useDataCreate;
  const tableName = "chats";
  const queryKey = "feedId";
  const queryValue = feedId;

  const { data } = dataList(tableName, queryKey, queryValue);

  //送るチャットユーザーID
  //   const [userId, setUserID] = useState("");
  //   console.log(userId);

  // TODO:
  //テストログインID⇨テストでは切り替えてください
  const { user } = useAuthContext();
  // TODO: 外部流入の場合、ログインユーザーでないので、
  // ユーザー名をどうするか、
  const logedInUserId = user.uid;
  const logedInUsername = user.displayName;
  // const logedInUserId = "-ND6WFQd0XdMDvvjHGU0";
  // const logedInUsername = "Masato";

  //   const dataRead = useDataRead;
  //   const logedInUser = dataRead("users", logedInUserId);
  //   const logedInUsername = logedInUser.username;
  //   console.log("logedInUsername");
  //   console.log(logedInUsername);

  //   //inputのonChangeに設定する関数
  //   const onChangeChatText = (e) => setInputChatText(e.target.value);

  //送信ボタンを押したときの処理
  const onClickSend = () => {
    if (inputChatText === "") return; //空文字で送信ボタンを押したときに処理が走らないようにする
    // const newChatText = [...chatText, { id: userID, text: inputChatText }];
    // setChatText(newChatText);

    // データ保存処理
    const newChatObject = {
      content: inputChatText,
      feedId: feedId,
      resUserId: logedInUserId,
      resUsername: logedInUsername,
      createdAt: new Date().toISOString(),
    };

    const tableName = "chats";

    const chatCommentId = dataCreate(tableName, newChatObject);
    console.log(chatCommentId);
    setInputChatText("");
    // setUserID("");
  };

  return (
    <>
      <div className="chats_answer">
        {data &&
          Object.entries(data).map(([key, item]) => (
            <div
              key={key}
              className={item.resUserId === logedInUserId ? "right" : "left"}
            >
              <p className="chat_send_user">{item.resUsername}</p>
              <p className="chat_send_text">{item.content}</p>
            </div>
          ))}
      </div>
      <div className="send_feeld">
        <div className="send_form">
          {/* <Input
          id="resUserId"
          size="xs"
          value={userId}
          onChange={(e) => setUserID(e.target.value)}
        /> */}
          <Input
            placeholder="フィードバックを送信"
            value={inputChatText}
            onChange={(e) => setInputChatText(e.target.value)}
            w={"85%"}
          />
          <button onClick={onClickSend} className="chat_send_button">
            送信
          </button>
        </div>
      </div>
    </>
  );
}
