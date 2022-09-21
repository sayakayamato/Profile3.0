import React from 'react';
import "./css/App.css";

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
    </>

  );
}

