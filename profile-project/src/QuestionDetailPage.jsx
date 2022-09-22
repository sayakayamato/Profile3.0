import { Link, } from "react-router-dom";
import { QuestionDetailContents } from "./QuestionDetailContents";


export function QuestionDetailPage(){
    return(
        <>
        <Link to="/"><p>戻る</p></Link>
        <QuestionDetailContents category="就活" question="私の長所はなんですか" />
        <QuestionDetailContents category="就活" question="私の短所はなんですか" />
        </>
    )
}