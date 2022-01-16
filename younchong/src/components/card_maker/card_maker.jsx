import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CardCvcInput from '../card_cvc_input/card_cvc_input';
import CardDateInput from '../card_date_input/card_date_input';
import CardNameInput from '../card_name_input/card_name_input';
import CardNumberInput from '../card_number_input/card_number_input';
import CardPasswordInput from '../card_password_input/card_password_input';
import CardPreview from '../card_preview/card_preview';
import styles from './card_maker.module.css';

const CardMaker = () => {
  const [numbers, setNumber] = useState({});
  const [date, setDate] = useState();
  
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button> <h3>카드추가</h3> </button>
      </header>
      <section className={styles.main}>
        <div className={styles.preview}>
          <CardPreview numbers={numbers}/>
        </div>
        <form className={styles.form}>
          <div className={styles.numberInput}>
            <CardNumberInput numbers={numbers} setNumber={setNumber}/>
          </div>
          <div className={styles.dateInput}>
            <CardDateInput />
          </div>
          <div className={styles.nameInput}>
            <CardNameInput />
          </div>
          <div className={styles.cvcInput}>
            <CardCvcInput />
          </div>
          <div className={styles.passwordInput}>
            <CardPasswordInput />
          </div>
        </form>
      </section>
      
    </div>
  );
};

export default CardMaker;