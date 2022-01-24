import React, { createRef } from "react";
import { EmptyCardItem } from "../../components/EmptyCardItem";
import { Link } from "react-router-dom";

const formNames = [
  'cardNumber0',
  'cardNumber1',
  'cardNumber2',
  'cardNumber3',
  'mm',
  'yy',
  'owner',
  'cvc',
  'password0',
  'password1',
]

export default function AddCardPage() {
  const formRefs = formNames.map(() => createRef<HTMLInputElement>());

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value, maxLength } = target;

    if (maxLength && value.length >= maxLength) {
      const id = formNames.findIndex((_name) => _name === name);

      const $nextInput = formRefs[id + 1].current;

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
            name={formNames[0]}
            ref={formRefs[0]}
            onChange={handleChange}
            type="text" maxLength={4}
          />
          <input
            className="input-basic"
            name={formNames[1]}
            ref={formRefs[1]}
            onChange={handleChange}
            type="text" maxLength={4}/>
          <input
            className="input-basic"
            name={formNames[2]}
            ref={formRefs[2]}
            onChange={handleChange}
            type="password" maxLength={4}/>
          <input
            className="input-basic"
            name={formNames[3]}
            ref={formRefs[3]}
            onChange={handleChange}
            type="password" maxLength={4}/>
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">만료일</span>
        <div className="input-box w-50">
          <input
            className="input-basic"
            name={formNames[4]}
            ref={formRefs[4]}
            onChange={handleChange}
            placeholder="MM"
            type="text" maxLength={2}/>
          <input
            className="input-basic"
            name={formNames[5]}
            ref={formRefs[5]}
            onChange={handleChange}
            placeholder="YY"
            type="text" maxLength={2}/>
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">카드 소유자 이름(선택)</span>
        <input
          className="input-basic"
          name={formNames[5]}
          ref={formRefs[5]}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          type="text"
        />
      </div>
      <div className="input-container">
        <span className="input-title">보안코드(CVC/CVV)</span>
        <input
          className="input-basic w-25"
          name={formNames[6]}
          ref={formRefs[6]}
          onChange={handleChange}
          type="password" maxLength={3}/>
      </div>
      <div className="input-container">
        <span className="input-title">카드 비밀번호</span>
        <input
          className="input-basic w-15"
          name={formNames[7]}
          ref={formRefs[7]}
          onChange={handleChange} type="password" maxLength={1}/>
        <input
          className="input-basic w-15"
          name={formNames[8]}
          ref={formRefs[8]}
          onChange={handleChange} type="password" maxLength={1}/>
        <input
          className="input-basic w-15"
          type="password"
          disabled
          value="*"
        />
        <input
          className="input-basic w-15"
          type="password"
          disabled
          value="*"
        />
      </div>
      <div className="button-box">
        <span className="button-text">다음</span>
      </div>
    </form>
  </div>
}