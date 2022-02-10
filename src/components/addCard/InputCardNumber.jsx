import React from 'react'

const InputCardNumber = ({handleOnChange}) => {
  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box" onChange={handleOnChange}>
        <input className="input-basic" type="text" name="cardSubNumber1" minLength="4" maxLength="4" required />
        -
        <input className="input-basic" type="text" name="cardSubNumber2" minLength="4" maxLength="4" required />
        -
        <input className="input-basic" type="password" name="cardSubNumber3" minLength="4" maxLength="4" required />
        -
        <input className="input-basic" type="password" name="cardSubNumber4" minLength="4" maxLength="4" required />
      </div>
      <p className="warning-box w-100 error">숫자만 입력가능합니다</p>
    </div>
  );
}

export default InputCardNumber
