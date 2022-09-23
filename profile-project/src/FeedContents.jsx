import React from 'react';
import { Box } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"

export function FeedContents() {

    const navigate = useNavigate()
    const NewFeedContents = () => navigate("/CollectFeedback")

    //テストデータ
    const testFeedContents = [
        {id:1, userID:5, username:"sayaka yamato", text:"私の長所ってなんですか？"},
        {id:2, userID:5, username:"sayaka yamato", text:"私の特徴ってなんですかね？"},
        {id:3, userID:10,username:"masato", text:"今日のプレゼンどうでした？"},
        {id:4, userID:2, username:"natumi", text:"私って何色が似合うかなあ"},
        {id:5, userID:5, username:"sayaka yamato", text:"私の直すべきところってどこかな..."}
    ]

    console.log(testFeedContents[1].text)


    const feedlist = [];
    for (let i = 0; i < testFeedContents.length; i++) {
        feedlist.push(
            <Box bg='white' w='100%' p={4} color='black' mb={5} key={feedlist}>
                <p>{testFeedContents[i].username}</p>
                {testFeedContents[i].text}
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