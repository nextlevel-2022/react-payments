import React from "react";
import { Link } from "react-router-dom";

const List = () => {
  return (
    <div class="app flex-column-center">
      <div class="flex-center">
        <div className="page-title mb-10">보유 카드</div>
      </div>
      <div class="card-box">
        <div class="empty-card">
          <Link style={{ color: "inherit", textDecoration: "none" }} to="/add">
            +
          </Link>
        </div>
      </div>
    </div>
  );
};

export default List;
