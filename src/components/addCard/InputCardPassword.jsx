import React from 'react'

const InputCardPassword = ({handleOnChange}) => {
  return (
    <div className="input-container">
      <span className="input-title" onChange={handleOnChange}>
        카드 비밀번호
      </span>
      <input className="input-basic w-15" type="password" maxLength="1" required />
      <input className="input-basic w-15" type="password" maxLength="1" required />
      <span className="w-15">.</span>
      <span className="w-15">.</span>
    </div>
  );
}

export default InputCardPassword
