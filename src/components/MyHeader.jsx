import React from "react";

const MyHeader = ({ headerText, leftChild, rightChild }) => {
  return (
    <header className="pt-5 pb-5 flex justify-center items-center">
      <div className="flex w-1/4 justify-start">{leftChild}</div>
      <div className="flex w-1/2 justify-center text-2xl">{headerText}</div>
      <div className="flex w-1/4 justify-end">{rightChild}</div>
    </header>
  );
};

export default MyHeader;
