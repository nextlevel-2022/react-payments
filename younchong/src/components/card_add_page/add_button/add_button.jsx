import React from 'react';
import styles from "./add_button.module.css";
const AddButton = ({card, nickName, setCard, navigate}) => {
  const {cardNumber, company, date, name, cvc, password, preNickname} = card;
  
  const completeButtonHandler = (e) => {
    e.preventDefault();
    const completeCard = {
      ...card,
      nickName: nickName ? nickName : company.name
    }
    setCard(cards => {
      const update = {};
      update[completeCard.nickName] = completeCard;
      Object.assign(update, cards)
      return update;
    });
    navigate("/list");
  }

  return (
    <button className={styles.button} onClick={completeButtonHandler}>
      완료
    </button>
  );
};

export default AddButton;