import React from "react";
import { Link } from "react-router-dom";


export default function List() {
  return <div className="root">
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">보유 카드</h2>
      </div>
      <div>
        <Link to={'/add'}>
          <div className="card-box">
            <div className="empty-card">+</div>
          </div>
        </Link>
      </div>
    </div>
  </div>
}