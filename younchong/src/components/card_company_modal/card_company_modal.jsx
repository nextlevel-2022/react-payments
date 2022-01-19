import React from 'react';
import { CARD_COMPANY_INFO } from '../card_number_input/card_company_info';
import styles from "./card_company_modal.module.css";

const CardCompanyModal = ({setCompany}) => {
  const companyInfo = CARD_COMPANY_INFO;
  const onClick = (e) => {
    const name = e.currentTarget.name;
    const selectedCompany = CARD_COMPANY_INFO.filter(company => company.name === name);
    setCompany(selectedCompany[0]);
  } 
  return (
    <section className={styles.modal}>
      <main className={styles.body}>
        {companyInfo.map(company => {
          const background = {
            background : company.color
          }
          return (
            <li key={company.name} className={styles.list}>
              <button className={styles.button} style={background} name={company.name} onClick={onClick}>
              </button>
              <span className={styles.name}>{company.name}</span>
            </li>
          )
          
        })}
      </main>
    </section>
  );
};

export default CardCompanyModal;