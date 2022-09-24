import React from 'react';
import { useLocation } from 'react-router-dom';
import { Textarea } from '@chakra-ui/react'
import { useState, useEffect} from 'react';

export function CollectFeedback(){

    //useLocationを使ってQuestionDetailContnetsからのstateを受け取る
    const state = useLocation().state;     
    console.log(state)

    let [value, setValue] = useState('')

    useEffect(() => { 
        if(state)setValue(state) 
    },[]);

    let handleInputChange = (e) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }

    return(
        <>
        <h1>フィードバック募集画面</h1>
        <Textarea
            value={value}
            onChange={handleInputChange}
            placeholder='例):私の長所を教えてください！'
            size='sm'
        />
        <button>送信</button>
        
        </>
    )
}
