import React from "react";
import { Link } from "react-router-dom";

const Alias = () => {
  return (
    <div class="app flex-column-center">
      <div class="flex-center">
        <h2 class="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>
      <div className="card-box">Card</div>
      <div class="input-container flex-center w-100">
        <input
          class="input-underline w-75"
          type="text"
          placeholder="카드의 별칭을 입력해주세요."
        />
      </div>
      <div class="button-box mt-50">
        <span class="button-text">
          <Link to="/list" style={{ color: "inherit", textDecoration: "none" }}>
            다음
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Alias;
