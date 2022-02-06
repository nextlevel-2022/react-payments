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

export function CardItem({ card }: { card: CardItemProps }) {
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
            <span
              className="card-text">{card.cardNumber0} - {card.cardNumber1} - {card.cardNumber2?.replaceAll(/./gi, '*')} - {card.cardNumber3?.replaceAll(/./gi, '*')}</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{card.owner}</span>
            <span className="card-text">{card.mm} / {card.yy}</span>
          </div>
        </div>
      </div>
    </div>
    <span className="card-nickname">법인카드</span>
  </>;
}