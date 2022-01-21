import React, { useRef } from 'react';
import styles from "./card_date_input.module.css";

const CardDateInput = ({date, setDate, monthRef, nextFocus}) => {
  // refactoring functions
  const yearRef = useRef();

  function validateMonth(e) {
    let value = e.currentTarget.value;
    if (isFinite(value) && value >= 0 && value <= 12) {
      setDate(originDate => {
        const update = {...originDate};
        update["MM"] = value;
        return update;
      })

      value.length === 2 && yearRef.current.focus()
    }
  }
  function validateYear(e) {
    let value = e.currentTarget.value;
    if (isFinite(value) && value >= 0 && value <= 99) {
      setDate(originDate => {
        const update = {...originDate};
        update["YY"] = value;
        return update;
      })

      value.length === 2 && nextFocus.current.focus();
    }
  }
  
  function getSlash(value) {
    if (value && value.length === 2) {
      return styles.visible
    }
  }
  return (
    <article className={styles.inputContainer}>
      <label className={styles.title}>만료일</label>
      <div className={styles.inputBox}>
        <input type="text" className={styles.inputBasic} placeholder="MM" onChange={validateMonth} value={[date["MM"]]} ref={monthRef}/>
        <span className={`${styles.slash} ${getSlash(date["MM"])}`}>/</span>
        <input type="text" className={styles.inputBasic} placeholder="YY" onChange={validateYear} value={[date["YY"]]} ref={yearRef}/>
      </div>
    </article>
  );
};

export default CardDateInput;