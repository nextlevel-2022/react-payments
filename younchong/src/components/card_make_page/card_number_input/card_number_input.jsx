import { React, useEffect, useRef } from 'react';
import { CARD_COMPANY_INFO } from './card_company_info';
import styles from "./card_number_input.module.css";
import Dash from './dash';

const CardNumberInput = ({numbers, setNumber, nextFocus, setCompany, company}) => {
  const firstInputRef = useRef();
  const secondInputRef = useRef();
  const thirdInputRef = useRef();
  const fourthInputRef = useRef();

  const nextRef = {
    "firstInput" : secondInputRef,
    "secondInput" : thirdInputRef,
    "thirdInput" : fourthInputRef,
    "fourthInput" : nextFocus
  };

  const numberChecker = (e) => {
    const id = e.currentTarget.id;
    const number = e.currentTarget.value;
    console.log(typeof number);// String type으로 들어옴 수정!!
    if (isFinite(number) && number.length <= 4) {
      setNumber(numbers => {
      const updated = {...numbers};
      updated[id] = number;
      return updated;
      })
      
      number.length === 4 && nextRef[id].current.focus();
    } 
  }

  useEffect(() => {
    const firstEightDigit = numbers["firstInput"] + numbers["secondInput"];
    if (firstEightDigit.length === 8 && !company.name) {
      const selectedCompany = CARD_COMPANY_INFO.filter(company => company.patterns.includes(firstEightDigit));
      if (selectedCompany[0]) {
        setCompany(selectedCompany[0])
      } else {
        setCompany(null);
        thirdInputRef.current.blur();
      }
    }
  },[numbers])

  return (
    <article className={styles.inputContainer}>
      <label className={styles.title}>카드 번호</label>
      <div className={styles.inputBox}>
        <input  id="firstInput" type="text" className={styles.inputBasic} onChange={numberChecker}  value={[numbers["firstInput"]]} ref={firstInputRef}/>
        <Dash id="firstInput" numbers={numbers} />
        <input  id="secondInput" type="text" className={styles.inputBasic} onChange={numberChecker} value={[numbers["secondInput"]]} ref={secondInputRef}/>
        <Dash id="secondInput" numbers={numbers} />
        <input id='thirdInput' type="password" className={styles.inputBasic} onChange={numberChecker} value={[numbers["thirdInput"]]} ref={thirdInputRef}/>
        <Dash id="thirdInput" numbers={numbers} />
        <input id='fourthInput' type="password" className={styles.inputBasic} onChange={numberChecker} value={[numbers["fourthInput"]]} ref={fourthInputRef}/>
      </div>
    </article>
  );
};

export default CardNumberInput;
