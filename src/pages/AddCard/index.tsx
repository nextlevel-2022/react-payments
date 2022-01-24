import React, { createRef } from "react";
import { EmptyCardItem } from "../../components/EmptyCardItem";
import { Link } from "react-router-dom";

const cardNumberNames = ['cardNumber0', 'cardNumber1', 'cardNumber2', 'cardNumber3']

export default function AddCardPage() {
  const cardNumberRefs = cardNumberNames.map(() => createRef<HTMLInputElement>());

  const handleChangeCardNumber: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value, maxLength } = target;

    if (value.length >= maxLength) {
      const id = cardNumberNames.findIndex((_name) => _name === name);

      const $nextInput = cardNumberRefs[id + 1].current;

      if ($nextInput) {
        ($nextInput as HTMLInputElement).select();
      }
    }
  };


  return <div className="root">
    <form className="app">
      <Link to={'/'}>
        <h2 className="page-title">
          {'< 카드 추가'}
        </h2>
      </Link>
      <EmptyCardItem/>
      <div className="input-container">
        <label htmlFor={'input-card-number-1'} className="input-title">카드 번호</label>
        <div className="input-box">
          <input
            className="input-basic"
            name={cardNumberNames[0]}
            ref={cardNumberRefs[0]}
            onChange={handleChangeCardNumber}
            type="text" maxLength={4}
          />
          <input
            className="input-basic"
            name={cardNumberNames[1]}
            ref={cardNumberRefs[1]}
            onChange={handleChangeCardNumber}
            type="text" maxLength={4}/>
          <input
            className="input-basic"
            name={cardNumberNames[2]}
            ref={cardNumberRefs[2]}
            onChange={handleChangeCardNumber}
            type="password" maxLength={4}/>
          <input
            className="input-basic"
            name={cardNumberNames[3]}
            ref={cardNumberRefs[3]}
            onChange={handleChangeCardNumber}
            type="password" maxLength={4}/>
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">만료일</span>
        <div className="input-box w-50">
          <input className="input-basic" type="text" placeholder="MM"/>
          <input className="input-basic" type="text" placeholder="YY"/>
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">카드 소유자 이름(선택)</span>
        <input
          type="text"
          className="input-basic"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        />
      </div>
      <div className="input-container">
        <span className="input-title">보안코드(CVC/CVV)</span>
        <input className="input-basic w-25" type="password"/>
      </div>
      <div className="input-container">
        <span className="input-title">카드 비밀번호</span>
        <input className="input-basic w-15" type="password"/>
        <input className="input-basic w-15" type="password"/>
        <input className="input-basic w-15" type="password"/>
        <input className="input-basic w-15" type="password"/>
      </div>
      <div className="button-box">
        <span className="button-text">다음</span>
      </div>
    </form>
  </div>
}