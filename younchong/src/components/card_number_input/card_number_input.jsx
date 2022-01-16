import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import styles from "./card_number_input.module.css";
import Dash from './dash';

const CardNumberInput = ({numbers, setNumber}) => {
  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  const fourthRef = useRef();

  const numberChecker = (e) => {
    const id = e.currentTarget.id;
    const number = e.currentTarget.value;
    if (isFinite(number) && number.length <= 4) {
      setNumber(numbers => {
      const updated = {...numbers};
      updated[id] = number;
      return updated;
      })
      if (number.length === 4 && id !== "fourthInput") { // 다음 focus 조절 만료일로
        nextRef[id].current.focus();
      }
    } 
  }

  const nextRef = {
    "firstInput" : secondRef,
    "secondInput" : thirdRef,
    "thirdInput" : fourthRef,
    "fourthInput" : null
  };


  return (
    <article className={styles.inputContainer}>
      <label className={styles.title}>카드 번호</label>
      <div className={styles.inputBox}>
        <input  id="firstInput" type="text" className={styles.inputBasic} onChange={numberChecker}  value={[numbers["firstInput"]]} ref={firstRef}/>
        <Dash id="firstInput" numbers={numbers} />
        <input  id="secondInput" type="text" className={styles.inputBasic} onChange={numberChecker} value={[numbers["secondInput"]]} ref={secondRef}/>
        <Dash id="secondInput" numbers={numbers} />
        <input id='thirdInput' type="password" className={styles.inputBasic} onChange={numberChecker} value={[numbers["thirdInput"]]} ref={thirdRef}/>
        <Dash id="thirdInput" numbers={numbers} />
        <input id='fourthInput' type="password" className={styles.inputBasic} onChange={numberChecker} value={[numbers["fourthInput"]]} ref={fourthRef}/>
      </div>
    </article>
  );
};

export default CardNumberInput;
