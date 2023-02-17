import React from "react";
import { useNavigate } from "react-router-dom";

function Edit(props) {
  const navigate = useNavigate();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const id = searchParams.get("id");
  // const mode = searchParams.get("mode");
  // console.log(id, mode);
  return (
    <div>
      <h1>Edit</h1>
      <p>일기 수정 페이지</p>
      <button onClick={() => navigate("/home")}>Home으로 가기</button>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
}

export default Edit;
