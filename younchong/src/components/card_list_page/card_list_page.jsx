import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardPreview from '../card_make_page/card_preview/card_preview';
import styles from "./card_list_page.module.css";

const CardList = ({cards, setNewCard, setCard}) => {
  const navigate = useNavigate();
  const addButtonHandler = () => {
    navigate("/");
  }
  const cardClickHandler = (card) => {
    setCard(cards => {
      const update = {...cards};
      delete update[card.nickName];
      return update;
    });
    setNewCard(card);
    navigate("/add");
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        보유카드
      </header>
      <section className={styles.main}>
        <ul className={styles.preview}>
          {Object.keys(cards).map(key => {
            const {cardNumber, company, date, name, cvc, password, nickName} = cards[key];
            
            return (
              <li key={nickName} onClick={(e) => cardClickHandler(cards[key])} className={styles.card}>
                <CardPreview  numbers={cardNumber} date={date} name={name} company={company} nickName={nickName} />
                <h3 className={styles.title}>{nickName}</h3>
              </li>
            )
          })}
        </ul>
        <div className={styles.addButton} onClick={addButtonHandler}>
          <span>+</span>
        </div>
      </section>
    </div>
  );
};

export default CardList;