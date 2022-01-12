import React from 'react';
import styles from'./card_preview.module.css';
const CardPreview = () => {
  //props 받아서 각각에 전달
  return (
    <div className={styles.container}>
      <header className={styles.cardTop}></header>
      <section className={styles.cardMiddle}>
        <article className={styles.cardChip}></article>
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