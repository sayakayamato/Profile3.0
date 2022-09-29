import { Link } from "react-router-dom";
import { ChatsContent } from "./ChatsContents";
import { useLocation } from "react-router-dom";
// import { useParams } from "react-router-dom";

import "./css/Chats.css";

export function Chats() {
  //useLocationを使ってFeedContentsから値を受け取る
  const location = useLocation();
  console.log(location);
  const questiontext = location.state.whatfeedtext;
  console.log(questiontext);
  const feedId = location.state.pushQuestionID;
  console.log(feedId);

  return (
    <>
      <div>
        <Link to="/">
          <button>戻る</button>
        </Link>
      </div>
      <div className="chats_question">{questiontext}</div>
      <ChatsContent feedId={feedId} />
    </>
  );
}
