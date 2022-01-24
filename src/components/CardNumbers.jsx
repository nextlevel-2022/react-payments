import React, { useState } from 'react';

const CardNumbers = () => {
  const [inputs, setInputs] = useState({
    cardNumber1: '',
    cardNumber2: '',
    cardNumber3: '',
    cardNumber4: '',
  });

  function handleChange(event) {
    const value = event.target.value;
    if (!isNaN(value)) {
      // value가 문자열이면 NaN이니까, NaN이 아니면..., 즉 숫자일 때에만!
      setInputs(old => ({ ...old, [event.target.name]: value }));
    } else {
      console.log('문자열이야!', value);
    }
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
          type="text"
          value={inputs.cardNumber1}
          onChange={handleChange}
          className="input-basic"
          minLength={4}
          maxLength={4}
          required
        />
        <input
          className="input-basic"
          name="cardNumber2"
          type="text"
          minLength={4}
          maxLength={4}
          value={inputs.cardNumber2}
          onChange={handleChange}
          required
        />
        <input
          className="input-basic"
          name="cardNumber3"
          type="password"
          minLength={4}
          maxLength={4}
          value={inputs.cardNumber3}
          onChange={handleChange}
          required
        />
        <input
          className="input-basic"
          name="cardNumber4"
          type="password"
          minLength={4}
          maxLength={4}
          value={inputs.cardNumber4}
          onChange={handleChange}
          required
        />
      </div>
    </>
  );
};

export default CardNumbers;
