import React from "react";

type CardItemProps = {
  cardNumber0?: string;
  cardNumber1?: string;
  cardNumber2?: string;
  cardNumber3?: string;
  mm?: string;
  yy?: string;
  owner?: string;
}

export function CardItem({
  cardNumber0,
  cardNumber1,
  cardNumber2,
  cardNumber3,
  mm,
  yy,
  owner,
}: CardItemProps) {
  return <>
    <div className="card-box">
      <div className="small-card">
        <div className="card-top">
          <span className="card-text">클린카드</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip"/>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{cardNumber0} - {cardNumber1} - {cardNumber2} - {cardNumber3}</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{owner}</span>
            <span className="card-text">{mm} / {yy}</span>
          </div>
        </div>
      </div>
    </div>
    <span className="card-nickname">법인카드</span>
  </>;
}