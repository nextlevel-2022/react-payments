import React from 'react';
import styles from './card_password_input.module.css';

const CardPasswordInput = () => {
  return (
    <article className={styles.inputContainer}>
      <span className={styles.title}>카드 비밀번호</span>
      <div className={styles.inputBox}>
        <input type="password" className={styles.inputBasic} />
        <input type="password" className={styles.inputBasic} />
        <input type="password" className={styles.inputBasic} />
        <input type="password" className={styles.inputBasic} />
      </div>
    </article>
  );
};

export default CardPasswordInput;