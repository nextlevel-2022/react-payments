import React from 'react';
import { useState } from 'react';
import styles from "./card_number_input.module.css";

const CardNumberInput = ({numbers, setNumber}) => {
  // 4칸 차면 - 자동으로 만들기 ok but not a good way
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


  return (
    <article className={styles.inputContainer}>
      <span className={styles.title}>카드 번호</span>
      <div className={styles.inputBox}>
        <input id='1' type="text" className={styles.inputBasic} onChange={numberChecker}  value={[numbers[1]]}/>
        {numbers.hasOwnProperty("1") && numbers["1"].length === 4 && <span className={styles.inputBar}>-</span>}
        <input id='2' type="text" className={styles.inputBasic} onChange={numberChecker} value={[numbers[2]]}/>
        {numbers.hasOwnProperty("2") && numbers["2"].length === 4 && <span className={styles.inputBar}>-</span>}
        <input id='3' type="password" className={styles.inputBasic} onChange={numberChecker} value={[numbers[3]]}/>
        {numbers.hasOwnProperty("3") && numbers["3"].length === 4 && <span className={styles.inputBar}>-</span>}
        <input id='4' type="password" className={styles.inputBasic} onChange={numberChecker} value={[numbers[4]]}/>
      </div>
    </article>
  );
};

export default CardNumberInput;
