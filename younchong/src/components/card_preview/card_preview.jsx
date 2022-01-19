import React from 'react';
import { useEffect } from 'react';
import styles from'./card_preview.module.css';
const CardPreview = ({numbers, date, name, company}) => {
  // 밖에서 cardCompany 받아와서 클래스네임에 넣어주기
  function getTheme (company) {
    if (company) {
      return {background : company.color};
    } else {
      return;
    }
  }
  return (
    <div className={styles.container} style={getTheme(company)} >
      <header className={styles.cardTop}></header>
      <section className={styles.cardMiddle}>
        <article className={styles.cardChip}></article>
          {Object.keys(numbers).map(key => {
            if (key === "thirdInput" || key === "fourthInput") {
              let count = numbers[key].length;
              let passoword = "";
              while (passoword.length !== count) {
                passoword += "*";
              }
              return <span className={styles.cardNumber} key={key}>{passoword}</span>
            } else {
              return <span className={styles.cardNumber} key={key}>{numbers[key]}</span>
            }
            
          })}
      </section>
      <footer className={styles.cardBottom}>
        <article className={styles.cardBottomInformation}>
          <span className={styles.cardName}>{`${name !== null ? name : "NAME"}`}</span>
          <span className={styles.cardDate}>{`${date["MM"] ? date["MM"] : "MM"} / ${date["YY"] ? date["YY"] : "YY"}`}</span>
        </article>
      </footer>
    </div>
  );
};

export default CardPreview;