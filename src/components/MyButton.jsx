import React from "react";

const btnTypeObj = {
  positive: "bg-green-400 text-gray-50",
  negative: "bg-red-500 text-white",
  default: "bg-neutral-200 text-black",
};

const MyButton = ({ text, type = "default", onClick, styleProp }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";
  return (
    <button
      className={`${btnTypeObj[btnType]} ${styleProp} p-2 rounded-md text-xl whitespace-nowrap`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MyButton;
