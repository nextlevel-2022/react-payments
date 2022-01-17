import { CardItem } from "../../components/CardItem";
import React from "react";

export default function ListPage() {
  return <div className="root">
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">보유 카드</h2>
      </div>
      <div>
        <CardItem/>
        <div className="card-box">
          <div className="empty-card">+</div>
        </div>
      </div>
    </div>
  </div>
}