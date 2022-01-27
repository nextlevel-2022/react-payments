import React from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import CardPreview from '../card_make_page/card_preview/card_preview';
import styles from "./card_add_page.module.css";

const CardAddPage = ({card, setCard}) => {
  const {cardNumber, company, date, name, cvc, password} = card;
  const [nickName, setNickName] = useState(null);
  const navigate = useNavigate();
  
  const onChange = (e) => {
    e.preventDefault();
    const value = e.currentTarget.value;
    setNickName(value);
  }

  const completeButtonHandler = (e) => {
    e.preventDefault();
    const completeCard = {
      ...card,
      nickName: nickName ? nickName : company.name
    }
    setCard(cards => {
      const update = {...cards};
      update[completeCard.nickName] = completeCard;

      return update;
    });
    navigate("/list");
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>카드 등록이 완료되었습니다!</header>
      <section className={styles.main}>
        <div className={styles.preview}>
          <CardPreview numbers={cardNumber} date={date} name={name} company={company} />
        </div>
        <div className={styles.inputContainer}>
          <input className={styles.input} placeholder="카드 별칭(선택)" onChange={onChange}/>
        </div>
      </section>
      <footer className={styles.footer}>
        <button className={styles.button} onClick={completeButtonHandler}>
          완료
        </button>
      </footer>
    </div>
  );
};

export default CardAddPage;