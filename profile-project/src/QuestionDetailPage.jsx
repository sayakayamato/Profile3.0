import { Link } from "react-router-dom";
import { QuestionDetailContents } from "./QuestionDetailContents";
import { useLocation } from "react-router-dom";

import { useDataList } from "./hooks/useDataList";

export const QuestionDetailPage = () => {
  //useLocationを使ってQuestionDetailContnetsからのstateを受け取る
  const categoryName = useLocation().state.categoryName;
  const categoryId = useLocation().state.categoryId;
  console.log(categoryName)
  console.log(categoryId)

  const { data } = useDataList("questionSamples", "categoryId", categoryId);

  //テストデータ
  //   const questions = ["私の長所はなんですか", "私の短所はなんですか"];

  return (
    <>
      <Link to="/">
        <p>戻る</p>
      </Link>
      <p>{categoryName}</p>
      <div>
        <ul>
          {Object.entries(data).map(([key, item]) => (
            <li key={key}>
              <QuestionDetailContents question={String(item.content)} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
