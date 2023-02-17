import React, { useEffect, useState } from "react";
import MyHeader from "./../components/MyHeader";
import MyButton from "./../components/MyButton";
import DiaryList from "../components/DiaryList";
import { useContext } from "react";
import { DiaryStateContext } from "./../App";

function Home(props) {
  const diaryList = useContext(DiaryStateContext);
  const [curDiaryData, setCurDiaryData] = useState([]);
  console.log(curDiaryData);
  const [curDate, setCurDate] = useState(new Date());
  const homeHeaderText = `${curDate.getFullYear()}년 ${
    curDate.getMonth() + 1
  }월`;

  //curDate값이 변할 때 해당 월의 일기 데이터를 불러옴
  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();
      // 현재 월의 1일에 대한 ms

      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0
      ).getTime();
      // 현재 월의 마지막 날짜에 대한 ms

      setCurDiaryData(
        diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay)
      ); // 해당 월의 데이터만 뽑아서 diaryData로 넣어줌
    }
  }, [curDate, diaryList]);

  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };
  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div>
      <MyHeader
        headerText={homeHeaderText}
        leftChild={<MyButton text="<" onClick={decreaseMonth} />}
        rightChild={<MyButton text=">" onClick={increaseMonth} />}
      />
      <DiaryList diaryList={curDiaryData} />
    </div>
  );
}

export default Home;
