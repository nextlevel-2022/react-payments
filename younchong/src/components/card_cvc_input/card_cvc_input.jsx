import React from 'react';
import styles from './card_cvc_input.module.css';

const CardCvcInput = () => {
  return (
    <article className={styles.inputContainer}>
      <span className={styles.title}>보안코드(CVC/CVV)</span>
      <div className={styles.inputBox}>
        <input type="password" className={styles.inputBasic}  />
      </div>
    </article>
  );
};

export default CardCvcInput;