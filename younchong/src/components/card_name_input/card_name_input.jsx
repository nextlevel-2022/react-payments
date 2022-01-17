import React from 'react';
import styles from "./card_name_input.module.css";

const CardNameInput = ({name, setName, nameRef}) => {
  const onChange = (e) => {
    let value = e.currentTarget.value;
    if (value.length <= 30) {
      setName(value);
    }
  }
  const result = (value) => { // naming 고민
    if (value) {
      return `(${value.length} / 30)`;
    } else {
      return "카드 소유자 이름(선택)";
    }
  }
  return (
    <article className={styles.inputContainer}>
      <span className={styles.title}>{`${result(name)}`}</span>
      <div className={styles.inputBox}>
        <input type="text" className={styles.inputBasic} placeholder="카드에 표시된 이름과 동일게 입력하세요" onChange={onChange} ref={nameRef}/>
      </div>
    </article>
  );
};

export default CardNameInput;