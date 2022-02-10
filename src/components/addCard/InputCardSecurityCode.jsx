import React from 'react'

const InputCardSecurityCode = ({handleOnChange}) => {
  return (
    <div className="input-container">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <input className="input-basic w-25" type="password" name="securityCode" maxLength="3" onChange={handleOnChange} />
    </div>
  );
}

export default InputCardSecurityCode
