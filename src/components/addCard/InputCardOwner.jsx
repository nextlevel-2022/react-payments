import React from 'react'

const InputCardOwner = ({inputs, handleOnChange}) => {
  return (
    <div className="input-container">
      <span className="input-title">카드 소유자 이름(선택)</span>
      <span className="input-title-length">{inputs.cardName.length}/30</span>
      <input
        type="text"
        className="input-basic"
        name="cardName"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        maxLength="30"
        onChange={handleOnChange}
      />
    </div>
  );
}

export default InputCardOwner
