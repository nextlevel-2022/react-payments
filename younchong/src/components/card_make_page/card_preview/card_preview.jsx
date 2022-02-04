import React from 'react';
import styles from'./card_preview.module.css';

const CardPreview = ({numbers, date, name, company, nickName}) => {

  return (
    <div className={styles.container} style={company && {background: company.color}} >
      <header className={styles.cardTop}>
        <span className={styles.title}>{nickName || company && (company.name === "미선택" ? "" : company.name)}</span>
      </header>
      <section className={styles.cardMiddle}>
        <article className={styles.cardChip}></article>
          {Object.keys(numbers).map(key => {
            if (key === "thirdInput" || key === "fourthInput") {
              let passoword = "*".repeat(numbers[key].length);
              return <span className={styles.cardNumber} key={key}>{passoword}</span>
            } else {
              return <span className={styles.cardNumber} key={key}>{numbers[key]}</span>
            }
            
          })}
      </section>
      <footer className={styles.cardBottom}>
        <article className={styles.cardBottomInformation}>
          <span className={styles.cardName}>{`${name || "NAME"}`}</span>
          <span className={styles.cardDate}>{`${date["MM"] || "MM"} / ${date["YY"] || "YY"}`}</span>
        </article>
      </footer>
    </div>
  );
};

export default CardPreview;