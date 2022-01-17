import React, { useState } from "react";
import { EmptyCardItem } from "../../components/EmptyCardItem";
import { Link } from "react-router-dom";

export default function AddCardPage() {

  const [cardNumber, setCardNumber] = useState({
    number1: '',
    number2: '',
    number3: '',
    number4: '',
  });

  const handleChangeCardNumber: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { id, name, value, maxLength } = target;

    if (value.length >= maxLength) {
      const arr = id.split('-'), nextId = parseInt(arr[arr.length - 1]);

      const nextCardNumberInput = document.querySelector(`input#input-card-number-${nextId + 1}`);

      if (nextCardNumberInput) {
        (nextCardNumberInput as HTMLInputElement).select();
      }
    }

    setCardNumber(prevState => ({ ...prevState, [name]: value }))
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
            id={'input-card-number-1'}
            name={'number1'}
            className="input-basic"
            type="text"
            onChange={handleChangeCardNumber}
            value={cardNumber.number1}
            maxLength={4}
          />
          <input
            id={'input-card-number-2'}
            className="input-basic" name={'number2'} value={cardNumber.number2}
            onChange={handleChangeCardNumber}
            type="text" maxLength={4}/>
          <input
            id={'input-card-number-3'}
            className="input-basic" name={'number3'} value={cardNumber.number3}
            onChange={handleChangeCardNumber}
            type="password" maxLength={4}/>
          <input
            id={'input-card-number-4'}
            className="input-basic" name={'number4'} value={cardNumber.number4}
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