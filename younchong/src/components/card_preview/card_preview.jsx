import React from 'react';
import styles from'./card_preview.module.css';
const CardPreview = ({numbers}) => {
  //props 받아서 각각에 전달
  const tellCompany = () => {
    
  }
  return (
    <div className={styles.container}>
      <header className={styles.cardTop}></header>
      <section className={styles.cardMiddle}>
        <article className={styles.cardChip}></article>
          {Object.keys(numbers).map(key => {
            if (key === "3" || key === "4") {
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
          <span className={styles.cardName}>NAME</span>
          <span className={styles.cardDate}>MM / YY</span>
        </article>
      </footer>
    </div>
  );
};

export default CardPreview;