import React, { useRef } from 'react';
import styles from './card_password_input.module.css';

const CardPasswordInput = ({firstRef, password, setPassword, nextFocus}) => {
  //input value 고민
  const secondRef = useRef();
  const thirdRef = useRef();
  const fourthRef = useRef()
  const nextRef = {
    "firstPassword" : secondRef,
    "secondPassword" : thirdRef,
    "thirdPassword" : fourthRef,
    "fourthPassword" : nextFocus
  }

  function onChange(e) {
    let value = e.currentTarget.value;
    let id = e.currentTarget.id;
    if (value.length <= 1) {
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
        <input type="password" className={styles.inputBasic} ref={firstRef} id="firstPassword" onChange={onChange} value={password["firstPassword"]}/>
        <input type="password" className={styles.inputBasic} ref={secondRef} id="secondPassword" onChange={onChange} value={password["secondPassword"]}/>
        <input type="password" className={styles.inputBasic} ref={thirdRef} id="thirdPassword" onChange={onChange} value={password["thirdPassword"]}/>
        <input type="password" className={styles.inputBasic} ref={fourthRef} id="fourthPassword" onChange={onChange} value={password["fourthPassword"]}/>
      </div>
    </article>
  );
};

export default CardPasswordInput;