import { Link, } from "react-router-dom";
import { QuestionDetailContents } from "./QuestionDetailContents";
import { useLocation } from 'react-router-dom';


export function QuestionDetailPage() {

    //useLocationを使ってQuestionDetailContnetsからのstateを受け取る
    const state = useLocation().state;
    console.log(state)

    //テストデータ
    const questions = ["私の長所はなんですか", "私の短所はなんですか"]

    const list = [];
    console.log("テスト");
    for (let i = 0; i < questions.length; i++) {
        list.push(<li key={questions[i]}><QuestionDetailContents question={questions[i]} /></li>);
    }
    console.log(list)

    return (
        <>
            <Link to="/"><p>戻る</p></Link>
            <p>{state}</p>
            <div>
                <ul>{list}</ul>
            </div>
        </>
    )
}