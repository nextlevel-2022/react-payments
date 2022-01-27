import React from "react";
import { findColor } from "../utils/index.js";

const Card = ({ card }) => {
  return card.cardName ? (
    <div className="card-box">
      <div className={`small-card ${findColor(card.cardName)}`}>
        <div className="card-top">
          <span className="card-text">{card.cardName}</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">
              {Object.values(card.number)
                .map((v, i) => (i >= 2 ? "*".repeat(v.length) : v))
                .filter(Boolean)
                .join(" - ")}
            </span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{card.userName}</span>
            <span className="card-text">
              {card.expire.MM}
              {card.expire.MM.length === 2 && " / "}
              {card.expire.YY}
            </span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <EmptyCard card={card} />
  );
};
export default Card;

const EmptyCard = ({ card }) => {
  return (
    <div className="card-box">
      <div className="empty-card">
        <div className="card-top">
          <span className="card-text">{card.cardName}</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">
              {Object.values(card.number)
                .map((v, i) => (i >= 2 ? "*".repeat(v.length) : v))
                .filter(Boolean)
                .join(" - ")}
            </span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{card.userName}</span>
            <span className="card-text">
              {card.expire.MM}
              {card.expire.MM.length === 2 && " / "}
              {card.expire.YY}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
