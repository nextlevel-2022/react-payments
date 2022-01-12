import React from 'react';
import styles from "./card_date_input.module.css";

const CardDateInput = () => {
  return (
    <article className={styles.inputContainer}>
      <span className={styles.title}>만료일</span>
      <div className={styles.inputBox}>
        <input type="text" className={styles.inputBasic} placeholder="MM" />
        <input type="text" className={styles.inputBasic} placeholder="YY" />
      </div>
    </article>
  );
};

export default CardDateInput;