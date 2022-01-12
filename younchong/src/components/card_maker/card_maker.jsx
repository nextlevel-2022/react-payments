import React from 'react';
import CardPreview from '../card_preview/card_preview';

const CardMaker = () => {
  return (
    <>
      <header>
        <button> 카드추가 </button>
      </header>
      <form className="container">
        <CardPreview />
      </form>
    </>
  );
};

export default CardMaker;