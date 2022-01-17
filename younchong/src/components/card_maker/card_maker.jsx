import React, { useRef } from 'react';
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
  const [date, setDate] = useState({"MM": null, "YY": null});
  const [name, setName] = useState(null);
  const [cvc, setCVC] = useState(null);
  const monthRef = useRef();
  const nameRef = useRef();
  const passwordRef =useRef();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button> <h3>카드추가</h3> </button>
      </header>
      <section className={styles.main}>
        <div className={styles.preview}>
          <CardPreview numbers={numbers} date={date} name={name}/>
        </div>
        <form className={styles.form}>
          <div className={styles.numberInput}>
            <CardNumberInput numbers={numbers} setNumber={setNumber} nextFocus={monthRef}/>
          </div>
          <div className={styles.dateInput}>
            <CardDateInput date={date} setDate={setDate} monthRef={monthRef} nextFocus={nameRef}/>
          </div>
          <div className={styles.nameInput}>
            <CardNameInput name={name} setName={setName} nameRef={nameRef}/>
          </div>
          <div className={styles.cvcInput}>
            <CardCvcInput cvc={cvc} setCVC={setCVC} nextFocus={passwordRef}/>
          </div>
          <div className={styles.passwordInput}>
            <CardPasswordInput firstRef={passwordRef}/>
          </div>
        </form>
      </section>
      
    </div>
  );
};

export default CardMaker;