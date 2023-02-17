import React from "react";
import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";

const DiaryItem = ({ id, emotion, content, date }) => {
  const navigate = useNavigate();
  const strDate = new Date(parseInt(date)).toLocaleDateString();
  const goDiaryDetail = () => {
    navigate(`/diary/${id}`);
  };
  const goDiaryEdit = () => {
    navigate(`/edit/${id}`);
  };
  return (
    <div className="flex py-2 border-b border-solid border-slate-400 justify-between">
      <div
        className="cursor-pointer min-w-fit w-32 h-20 rounded-sm flex justify-center bg-[#f5f5f5]"
        onClick={goDiaryDetail}
      >
        <img
          alt="emotion"
          src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`}
        />
      </div>
      <div className="cursor-pointer grow ml-3" onClick={goDiaryDetail}>
        <div className="font-bold mb-1">{strDate}</div>
        <div className="text-lg">{content.slice(0, 25)}</div>
      </div>
      <div>
        <MyButton text="수정하기" onClick={goDiaryEdit} />
      </div>
    </div>
  );
};

export default DiaryItem;
