import React from 'react'

const InputCardExpiredDate = ({handleOnChange}) => {
  return (
    <div className="input-container">
      <span className="input-title">만료일</span>
      <div className="input-box w-50" onChange={handleOnChange}>
        <input className="input-basic" type="text" name="expireMonth" placeholder="MM" maxLength="2" required />
        /
        <input className="input-basic" type="text" name="expireYear" placeholder="YY" maxLength="2" required />
      </div>
    </div>
  );
}

export default InputCardExpiredDate
