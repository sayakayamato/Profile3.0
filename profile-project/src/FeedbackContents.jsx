import React from 'react';
import { Box } from '@chakra-ui/react'


export function FeedbackContents() {

    //9/23
    //テストデータ
    const testFeedContents = [
        {id:1, userID:5, username:"sayaka yamato", text:"私の長所ってなんですか？"},
        {id:2, userID:5, username:"sayaka yamato", text:"私の特徴ってなんですかね？"},
        {id:3, userID:10,username:"masato", text:"今日のプレゼンどうでした？"},
        {id:4, userID:2, username:"natumi", text:"私って何色が似合うかなあ"},
        {id:5, userID:5, username:"sayaka yamato", text:"私の直すべきところってどこかな..."}
    ]
    

    const myfeedlist = [];
    for(let i = 0; i<testFeedContents.length; i++){
        if(testFeedContents[i].userID === 5){
            myfeedlist.push(
                <Box bg='white' w='100%' p={4} color='black' mb={5} key={myfeedlist}>
                    <p>{testFeedContents[i].username}</p>
                    {testFeedContents[i].text}
                </Box>
            )
        }
        
    }



    return(
        <>
        {myfeedlist}
    
    </>
    )
}