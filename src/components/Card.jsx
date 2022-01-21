import React from "react";
const Card = ({ card }) => {
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
              {card.number
                ?.map((v, i) => (i >= 2 ? "o".repeat(v.length) : v))
                .join(" - ")}
            </span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{card.ownerName}</span>
            <span className="card-text">{card.expire?.join(" / ")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
