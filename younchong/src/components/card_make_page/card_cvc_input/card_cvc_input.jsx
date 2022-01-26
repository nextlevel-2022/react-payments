import React from 'react';
import styles from './card_cvc_input.module.css';

const CardCvcInput = ({cvc, setCVC, nextFocus}) => {
  const onChange = (e) => {
    let value = e.currentTarget.value;
    if (isFinite(value) && value.length <= 3) {
      setCVC(value);
      value.length === 3 && nextFocus.current.focus();
    }
  }

  const tooltipHandler = (e) => {
    e.preventDefault();
    console.log("working")
  }
  return (
    <article className={styles.inputContainer}>
      <span className={styles.title}>보안코드(CVC/CVV)</span>
      <div className={styles.main}>
        <div className={styles.inputBox}>
          <input type="password" className={styles.inputBasic} onChange={onChange} value={cvc || ""}/>
        </div>
        <div className={styles.tooltip} onClick={tooltipHandler}>?
          <span className={styles.image}>
            <img src="https://static.thenounproject.com/png/1006865-200.png" />
          </span>
        </div>
      </div>
      
      
    </article>
  );
};

export default CardCvcInput;