import React from "react";
import { useNavigate } from "react-router-dom"
// import { Link } from "react-router-dom";

export function QuestionDetailContents(props){

    const navigate = useNavigate();

    const WhatQuestion = (e) => {
        // console.log(e);
        // console.log(e.target.innerText)         //記入した質問本文が取れている！
        const questiontext = e.target.innerText    //記入した質問本文を定数に入れる
        navigate("/CollectFeedback", {state: questiontext})             //ページ遷移と共に値を持っていく
    }

    return(
        <>
        <h1>{props.category}</h1>
        <button className="whatQuestion" onClick={WhatQuestion}>{props.question}</button>

        </>
    )
}