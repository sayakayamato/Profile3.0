import React from 'react';
import { Box } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
// import { Link } from 'react-router-dom'


export function FeedContents() {

    const navigate = useNavigate()
    const NewFeedContents = () => navigate("/CollectFeedback")


    //テストデータ
    const testFeedContents = [
        {id:0, userID:5, username:"sayaka yamato", text:"私の長所ってなんですか？"},
        {id:1, userID:5, username:"sayaka yamato", text:"私の特徴ってなんですかね？"},
        {id:2, userID:10,username:"masato", text:"今日のプレゼンどうでした？"},
        {id:3, userID:2, username:"natumi", text:"私って何色が似合うかなあ"},
        {id:4, userID:5, username:"sayaka yamato", text:"私の直すべきところってどこかな..."}
    ]


    //クリックされた質問判定
    const WhatFeed = (e) => {
        console.log(e);
        //配列のキーとidが一致してるときにできる処理...
        const pushQuestionID = e.target.id
        console.log(pushQuestionID);
        const whatfeedtext = e.target.innerText    //記入した質問本文を定数に入れる
        navigate(`/Chats/${pushQuestionID}`, {state: whatfeedtext})             //ページ遷移と共に値を持っていく

    }

    //navigate(`/Chats/${testFeedContents[i].id}`, {state: testFeedContents[i].text})


    const feedlist = [];
    for (let i = 0; i < testFeedContents.length; i++) {
        feedlist.push(
            <Box bg='white' w='100%' p={4} color='black' mb={5} key={feedlist} >
                
                <p>{testFeedContents[i].username}</p>
                <p onClick={WhatFeed} id={i}>{testFeedContents[i].text}</p>
                
            </Box>
            
            
            )

    }

    return (
        <>
            {feedlist}

            <button onClick={NewFeedContents}>+</button>

        </>

    );
}