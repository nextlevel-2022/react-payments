import React from 'react';
import styles from "./card_name_input.module.css";

const CardNameInput = ({name, setName, nameRef}) => {
  const onChange = (e) => {
    let value = e.currentTarget.value;
    if (value.length <= 30) {
      setName(value);
    }
  }

  return (
    <article className={styles.inputContainer}>
      <span className={styles.title}>{name ? `${name.length} / 30` : `카드 소유자 이름(선택)`}</span>
      <div className={styles.inputBox}>
        <input type="text" className={styles.inputBasic} placeholder="카드에 표시된 이름과 동일게 입력하세요" onChange={onChange} ref={nameRef}/>
      </div>
    </article>
  );
};

export default CardNameInput;