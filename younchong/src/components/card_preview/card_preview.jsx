import React from 'react';
import styles from'./card_preview.module.css';
const CardPreview = ({numbers, date}) => {
  function tellCardTheme (numbers) {// 로직 더 고민해보기
    let number = "";
    if (numbers["thirdInput"]) {
      number = numbers["firstInput"] + numbers["secondInput"];

      if (number >= 0 && number < 10000000) {
        return styles.yellow;
      } else if (number >= 10000000 && number < 40000000) {
        return styles.red;
      } else if (number >= 40000000 && number < 70000000) {
        return styles.blue;
      } else {
        console.log("out of ragne") // card selection modal
      }
    }

    
  }
  
  return (
    <div className={`${styles.container} ${tellCardTheme(numbers)}`} >
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
          <span className={styles.cardName}>NAME</span>
          <span className={styles.cardDate}>{`${date["MM"] ? date["MM"] : "MM"} / ${date["YY"] ? date["YY"] : "YY"}`}</span>
        </article>
      </footer>
    </div>
  );
};

export default CardPreview;