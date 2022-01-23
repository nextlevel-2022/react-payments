import React from 'react';

const CardNumbers = () => {
  return (
    <>
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <input className="input-basic" type="text" />
        <input className="input-basic" type="text" />
        <input className="input-basic" type="password" />
        <input className="input-basic" type="password" />
      </div>
    </>
  );
};

export default CardNumbers;
