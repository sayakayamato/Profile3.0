import React from "react";
import { Link } from "react-router-dom";

export function QuestionDetailContents(props){


    return(
        <>
        <h1>{props.category}</h1>
        <Link to="/CollectFeedback"><p>{props.question}</p></Link>
        <p>質問2</p>
        <p>質問3</p>
        </>
    )
}