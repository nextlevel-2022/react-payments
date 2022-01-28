import React from 'react'

const InputCardNumber = ({handleOnChange}) => {
  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box" onChange={handleOnChange}>
        <input className="input-basic" type="text" name="cardSubNumber1" maxLength="4" required />
        -
        <input className="input-basic" type="text" name="cardSubNumber2" maxLength="4" required />
        -
        <input className="input-basic" type="password" name="cardSubNumber3" maxLength="4" required />
        -
        <input className="input-basic" type="password" name="cardSubNumber4" maxLength="4" required />
      </div>
      <p></p>
    </div>
  );
}

export default InputCardNumber
