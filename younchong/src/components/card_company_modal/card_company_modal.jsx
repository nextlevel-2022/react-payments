import React from 'react';
import styles from "./card_company_modal.module.css";

const CardCompanyModal = () => {
  // body에 overflow hidden 걸기 
  return (
    <section className={styles.modal}>
      <main className={styles.body}>
        modal
      </main>
    </section>
  );
};

export default CardCompanyModal;