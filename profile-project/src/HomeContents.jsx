import "./css/App.css";
// Import Swiper React components
import "swiper/css";
import "swiper/css/navigation";
import { QuestionSlider } from "./QuestionSlider";


// import {MyProfileContents} from './TabContainer';

export function HomeContents() {
  return (
    <>
      <div className='home_greed'>
        <p>Welcome!</p>
        <p>Please hear myself!</p>
        <p>あなたについて質問してみよう！</p>
      </div>

      <div className='q_category'>
        <p>質問カテゴリ</p>
      </div>

      <QuestionSlider />
  
    </>

  );
}

