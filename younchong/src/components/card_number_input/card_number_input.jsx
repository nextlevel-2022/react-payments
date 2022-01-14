import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import styles from "./card_number_input.module.css";
import Dash from './dash';

const CardNumberInput = ({numbers, setNumber}) => {
  // 4칸 차면 - 자동으로 만들기 ok but not a good way
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
      
    } 
  }
  const ex = () => {

  }


  return (
    <article className={styles.inputContainer}>
      <label className={styles.title}>카드 번호</label>
      <div className={styles.inputBox}>
        <input  id='1' type="text" className={styles.inputBasic} onChange={numberChecker}  value={[numbers[1]]} ref={firstRef}/>
        <Dash id="1" numbers={numbers} />
        <input  id='2' type="text" className={styles.inputBasic} onChange={numberChecker} value={[numbers[2]]} ref={secondRef}/>
        <Dash id="2" numbers={numbers} />
        <input id='3' type="password" className={styles.inputBasic} onChange={numberChecker} value={[numbers[3]]}/>
        <Dash id="3" numbers={numbers} />
        <input id='4' type="password" className={styles.inputBasic} onChange={numberChecker} value={[numbers[4]]}/>
      </div>
    </article>
  );
};

export default CardNumberInput;
