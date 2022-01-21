import React from "react";
import { Link } from "react-router-dom";

const Add = () => {
  return (
    <div className="app">
      <div className="page-title">
        <Link to="/list" style={{ color: "inherit", textDecoration: "none" }}>
          &lt;
        </Link>
        카드 추가
      </div>
      <div className="card-box">card</div>
      {/* <Card />
      <CardForm /> */}

      <div class="button-box">
        <span class="button-text">
          <Link
            to="/alias"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            다음
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Add;
