import React, { useState } from 'react';

const CardNumbers = () => {
  const [inputs, setInputs] = useState({
    cardNumber1: null,
    cardNumber2: null,
    cardNumber3: null,
    cardNumber4: null,
  });

  function handleChange(event) {
    setInputs(old => ({ ...old, [event.target.name]: event.target.value }));
  }
  console.log(inputs);
  return (
    <>
      <label htmlFor="CardNumber1" className="input-title">
        카드 번호
      </label>
      <div className="input-box">
        <input
          id="CardNumber1"
          name="cardNumber1"
          onChange={handleChange}
          className="input-basic"
          type="text"
          maxLength={4}
          required
        />
        <input
          className="input-basic"
          name="cardNumber2"
          onChange={handleChange}
          type="text"
          maxLength={4}
          required
        />
        <input
          className="input-basic"
          name="cardNumber3"
          onChange={handleChange}
          type="password"
          maxLength={4}
          required
        />
        <input
          className="input-basic"
          name="cardNumber4"
          onChange={handleChange}
          type="password"
          maxLength={4}
          required
        />
      </div>
    </>
  );
};

export default CardNumbers;
