import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardCompanyModal from '../../modal_page/card_company_modal/card_company_modal';
import CardCvcInput from '../card_cvc_input/card_cvc_input';
import CardDateInput from '../card_date_input/card_date_input';
import CardNameInput from '../card_name_input/card_name_input';
import CardNumberInput from '../card_number_input/card_number_input';
import CardPasswordInput from '../card_password_input/card_password_input';
import CardPreview from '../card_preview/card_preview';
import styles from './card_maker.module.css';

const CardMaker = ({setNewCard}) => {
  const [numbers, setNumber] = useState({});
  const [company, setCompany] = useState({});
  const [date, setDate] = useState({"MM": null, "YY": null});
  const [name, setName] = useState(null);
  const [cvc, setCVC] = useState(null);
  const [password, setPassword] = useState({});
  const monthRef = useRef();
  const nameRef = useRef();
  const passwordRef =useRef();
  const nextBtnRef = useRef();
  const navigate = useNavigate();
  let cardInfo = {};
  useEffect(() => {
    cardInfo = {
      cardNumber: numbers,
      date: date,
      name: name,
      cvc: cvc,
      password: password,
      company: company
    };
    
  }, [numbers, company, date, name, cvc, password])

  const nextPageButtonHandler = (e) => {
    e.preventDefault();
    setNewCard(cardInfo);
    navigate("/add");
  }
  return (
    <div className={styles.container}>
      {company === null && <CardCompanyModal setCompany={setCompany} />}
      <header className={styles.header}>
        <button className={styles.button} onClick={() =>{navigate("/list")}} > <h3>&#60; 카드추가</h3> </button>
      </header>
      <section className={styles.main}>
        <div className={styles.preview}>
          <CardPreview numbers={numbers} date={date} name={name} company={company}/>
        </div>
        <form className={styles.form}>
          <div className={styles.numberInput}>
            <CardNumberInput numbers={numbers} setNumber={setNumber} nextFocus={monthRef} company={company} setCompany={setCompany} />
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
            <CardPasswordInput firstRef={passwordRef} password={password} setPassword={setPassword} nextFocus={nextBtnRef}/>
          </div>
        </form>
      </section>
      <footer className={styles.footer}>
        <button ref={nextBtnRef} className={styles.button} onClick={nextPageButtonHandler}> <h4>다음</h4> </button>
      </footer>
    </div>
  );
};

export default CardMaker;