import React from 'react';
import './card_preview.css';
const CardPreview = () => {
  //props 받아서 각각에 전달
  return (
    <div className='container'>
      <header className='card-top'></header>
      <section className='card-middle'>
        <article className='card-chip'></article>
      </section>
      <footer className='card-bottom'>
        <article className='card-bottom-information'>
          <span className='card-name'>NAME</span>
          <span className='card-date'>MM / YY</span>
        </article>
      </footer>
    </div>
  );
};

export default CardPreview;