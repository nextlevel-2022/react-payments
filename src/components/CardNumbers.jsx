import React from 'react';

function checkNumber(event) {
  if (event.key >= 0 && event.key <= 9) {
    return true;
  }
  return null;
}

const CardNumbers = () => {
  return (
    <>
      <label htmlFor="CardNumber1" className="input-title">
        카드 번호
      </label>
      <div className="input-box">
        <input
          id="CardNumber1"
          className="input-basic"
          type="text"
          maxLength={4}
        />
        <input className="input-basic" type="text" maxLength={4} />
        <input
          className="input-basic"
          type="password"
          maxLength={4}
          onkeypress="return checkNumber(event)"
        />
        <input
          className="input-basic"
          type="password"
          maxLength={4}
          onkeypress="return checkNumber(event)"
        />
      </div>
    </>
  );
};

export default CardNumbers;
