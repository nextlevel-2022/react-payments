import React from 'react';
import styles from'./card_preview.module.css';

const CardPreview = ({numbers, date, name, company}) => {
  const getTheme = (company) => {
    if (company) {
      return {background : company.color};
    } else {
      return;
    }
  }
  const getTitle = (company) => {
    if (company) {
      const name = company.name !== "미선택" ? company.name : "";
      return name;
    } else {
      return ;
    }
  }

  return (
    <div className={styles.container} style={getTheme(company)} >
      <header className={styles.cardTop}>
        <span className={styles.title}>{getTitle(company)}</span>
      </header>
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
          <span className={styles.cardName}>{`${name || "NAME"}`}</span>
          <span className={styles.cardDate}>{`${date["MM"] || "MM"} / ${date["YY"] || "YY"}`}</span>
        </article>
      </footer>
    </div>
  );
};

export default CardPreview;