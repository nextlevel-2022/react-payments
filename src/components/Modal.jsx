import React from "react";
import { CARD_COMPANY_DATA } from "../constants/index.js";

const Modal = ({ setCardData, setModalView }) => {
  const saveCardName = (cardName) => {
    setCardData((prev) => ({
      ...prev,
      cardName,
    }));
    setModalView(false);
  };
  return (
    <div className="modal-dimmed" onClick={() => setModalView(false)}>
      <div className="modal">
        <div className="flex-center">
          {CARD_COMPANY_DATA.map((card) => {
            return (
              <CardItem
                key={card.name}
                name={card.name}
                color={card.color}
                onClick={() => saveCardName(card.name)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Modal;

const CardItem = ({ name, color, onClick }) => {
  return (
    <div className="modal-item-container" onClick={onClick}>
      <div className={`modal-item-dot ${color}`}></div>
      <span className="modal-item-name">{name}</span>
    </div>
  );
};
