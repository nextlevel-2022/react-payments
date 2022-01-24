import React from 'react';

const CardNumbers = ({ inputs, handleChange }) => {
  return (
    <>
      <label htmlFor="CardNumber1" className="input-title">
        카드 번호
      </label>
      <div className="input-box">
        {[
          ['CardNumber1', 'cardNumber1', 'text'],
          ['CardNumber2', 'cardNumber2', 'text'],
          ['CardNumber3', 'cardNumber3', 'password'],
          ['CardNumber4', 'cardNumber4', 'password'],
        ].map(([id, name, type]) => (
          <input
            id={id}
            name={name}
            type={type}
            value={inputs[name]}
            onChange={handleChange}
            className="input-basic"
            minLength={4}
            maxLength={4}
            required
          />
        ))}
      </div>
    </>
  );
};

export default CardNumbers;
