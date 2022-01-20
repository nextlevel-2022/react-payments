import React, { useRef } from 'react';
import styles from './card_password_input.module.css';

const CardPasswordInput = ({firstRef, password, setPassword, nextFocus}) => {
  const secondRef = useRef();
  const nextRef = {
    "firstPassword" : secondRef,
    "secondPassword" : nextFocus,
  }

  const onChange = (e) => {
    let value = e.currentTarget.value;
    let id = e.currentTarget.id;
    if (isFinite(value) && value.length <= 1) {
      setPassword(password => {
        const update = {...password};
        update[id] = value;
        return update;
      })

      value.length === 1 && nextRef[id].current.focus();
    }
  }

  return (
    <article className={styles.inputContainer}>
      <label className={styles.title}>카드 비밀번호</label>
      <div className={styles.inputBox}>
        <input type="password" className={styles.inputBasic} ref={firstRef} id="firstPassword" onChange={onChange} value={password["firstPassword"] ? password["firstPassword"] : ""}/>
        <input type="password" className={styles.inputBasic} ref={secondRef} id="secondPassword" onChange={onChange} value={password["secondPassword"] ? password["secondPassword"] : ""}/>
        <span className={styles.span}>*</span>
        <span className={styles.span}>*</span>
      </div>
    </article>
  );
};

export default CardPasswordInput;