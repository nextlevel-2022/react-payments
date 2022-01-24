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
