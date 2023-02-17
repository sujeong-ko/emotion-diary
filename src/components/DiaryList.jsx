import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";
import MyButton from "./MyButton";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const filterOptionList = [
  { value: "all", name: "모든 일기 보기" },
  { value: "good", name: "좋은 감정만 보기" },
  { value: "bad", name: "안좋은 감정만 보기" },
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select
      className="bg-neutral-200 mr-2 p-2 text-xl rounded-md"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

const DiaryList = ({ diaryList }) => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("latest");
  const [emotionFilter, setEmotionFilter] = useState("all");

  // 정렬된 diaryList를 받는 함수
  const getProcessedDiaryList = () => {
    // 다이어리 item을 받아서 emotion이 3 이하인지 초과인지 boolean 리턴해주는 함수
    const emotionFilterFn = (item) => {
      if (emotionFilter === "good") {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    };

    const compareFn = (a, b) => {
      if (sortType === "latest") {
        // 최신순 정렬
        return parseInt(b.date) - parseInt(a.date);
      } else {
        // 오래된 순 정렬
        return parseInt(a.date) - parseInt(b.date);
      }
    };
    const copyList = JSON.parse(JSON.stringify(diaryList));
    const filteredList =
      emotionFilter === "all"
        ? copyList
        : copyList.filter((item) => emotionFilterFn(item));

    const sortedList = filteredList.sort(compareFn);
    return sortedList;
  };

  return (
    <>
      <div className="flex my-2 justify-between">
        <div className="flex items-center">
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />
          <ControlMenu
            value={emotionFilter}
            onChange={setEmotionFilter}
            optionList={filterOptionList}
          />
        </div>
        <div className="grow">
          <MyButton
            styleProp="w-full"
            type="positive"
            text="새 일기 쓰기"
            onClick={() => navigate("/new")}
          />
        </div>
      </div>

      {getProcessedDiaryList().map((it) => (
        <DiaryItem key={it.id} {...it} />
      ))}
    </>
  );
};

// diaryList prop이 없는 경우를 대비해서 defaultProps 추가
DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
