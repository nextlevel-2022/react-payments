import React from 'react';
import styles from "./card_number_input.module.css";

const CardNumberInput = () => {
  //ref이용해서 숫자받기, 4자 채워지면 - 자동으로 채우기
  return (
    <article className={styles.inputContainer}>
      <span className={styles.title}>카드 번호</span>
      <div className={styles.inputBox}>
        <input type="text" className={styles.inputBasic} />
        <input type="text" className={styles.inputBasic} />
        <input type="password" className={styles.inputBasic} />
        <input type="password" className={styles.inputBasic} />
      </div>
    </article>
  );
};

export default CardNumberInput;