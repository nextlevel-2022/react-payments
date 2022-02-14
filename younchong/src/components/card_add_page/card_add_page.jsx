import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardPreview from '../card_make_page/card_preview/card_preview';
import AddButton from './add_button/add_button';
import DeleteButton from './delete_button/delete_button';
import styles from "./card_add_page.module.css";

const CardAddPage = ({card, setCard, setNewCard}) => {
  const {cardNumber, company, date, name, cvc, password, preNickname} = card;
  const [nickName, setNickName] = useState(null);
  const navigate = useNavigate();
  
  const onChange = (e) => {
    e.preventDefault();
    const value = e.currentTarget.value;
    value.length <= 10 && setNickName(value);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>카드 등록이 완료되었습니다!</header>
      <section className={styles.main}>
        <div className={styles.preview}>
          <CardPreview numbers={cardNumber} date={date} name={name} company={company} />
        </div>
        <div className={styles.inputContainer}>
          <input className={styles.input} placeholder="카드 별칭(선택)" onChange={onChange} value={nickName || ""}/>
        </div>
      </section>
      <footer className={styles.footer}>
        <DeleteButton setNewCard={setNewCard} navigate={navigate} />
        <AddButton card={card} nickName={nickName} setCard={setCard} navigate={navigate} />
      </footer>
    </div>
  );
};

export default CardAddPage;