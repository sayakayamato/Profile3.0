import React from "react";
import { useLocation } from "react-router-dom";
import { Textarea } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDataCreate } from "./hooks/useDataCreate";

export function CollectFeedback() {
  //useLocationを使ってQuestionDetailContnetsからのstateを受け取る
  const state = useLocation().state;
  console.log(state);

  let [value, setValue] = useState("");

  useEffect(() => {
    if (state) setValue(state);
  }, []);

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  // TODO:
  //テストログインID⇨テストでは切り替えてください
  const logedInUserId = "-ND6W54zApUpQdX6I5bY";
  const logedInUsername = "Yamato Sayaka";
  // const logedInUserId = "-ND6WFQd0XdMDvvjHGU0";
  // const logedInUsername = "Masato";

  //   const dataRead = useDataRead;
  //   const logedInUser = dataRead("users", logedInUserId);
  //   const logedInUsername = logedInUser.username;
  //   console.log("logedInUsername");
  //   console.log(logedInUsername);

  //   ユーザー一覧
  //   "users": {
  //     "-ND6W54zApUpQdX6I5bY": {
  //       "createdAt": "2022-09-29T04:32:23.492Z",
  //       "imageUrl": "",
  //       "username": "Yamato Sayaka"
  //     },
  //     "-ND6WFQd0XdMDvvjHGU0": {
  //       "createdAt": "2022-09-29T04:33:05.840Z",
  //       "imageUrl": "",
  //       "username": "Masato"
  //     },
  //     "-ND6WIAu0qiVaZ4QWWWC": {
  //       "createdAt": "2022-09-29T04:33:17.122Z",
  //       "imageUrl": "",
  //       "username": "Natsumi"
  //     },
  //     "-ND6WKYlum6_OndQhmrC": {
  //       "createdAt": "2022-09-29T04:33:26.841Z",
  //       "imageUrl": "",
  //       "username": "Yuka"
  //     },
  //     "-ND6WN-E2W7EctUGB2te": {
  //       "createdAt": "2022-09-29T04:33:36.855Z",
  //       "imageUrl": "",
  //       "username": "Tadashi"
  //     }
  //   }

  const dataCreate = useDataCreate;

  const registerNewQuestion = () => {
    const tableName = "questions";
    const struct = {
      userId: logedInUserId,
      username: logedInUsername,
      content: value,
      createdAt: new Date().toISOString(),
    };
    const feedId = dataCreate(tableName, struct);
    // TODO: ページ遷移処理
    const feedUrl = "/Chats/" + feedId;
  };

  return (
    <>
      <h1>フィードバック募集画面</h1>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder="例):私の長所を教えてください！"
        size="sm"
      />
      <button onClick={registerNewQuestion}>送信</button>
    </>
  );
}
