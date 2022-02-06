import React, { createRef } from "react";
import { Link } from "react-router-dom";

import { formNames } from "../../constants";
import { useDispatch, useSelector } from "../../store/Provider";
import { changeInput } from "../../store/action";
import { CardItem } from "../../components/CardItem";

export default function AddCardPage() {
  const card = useSelector(({ card }) => card);
  const dispatch = useDispatch();
  const formRefs = formNames.map(() => createRef<HTMLInputElement>());

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value, maxLength } = target;
    const isMaxLength = maxLength !== -1 && value.length >= maxLength;

    dispatch(changeInput(name, value));

    if (isMaxLength) {
      const id = formNames.findIndex((_name) => _name === name);

      const $nextInput = formRefs[id + 1]?.current;

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
      <CardItem card={card}/>
      <div className="input-container">
        <label htmlFor={'input-card-number-1'} className="input-title">카드 번호</label>
        <div className="input-box">
          <input
            className="input-basic"
            name={formNames[0]}
            ref={formRefs[0]}
            value={card.cardNumber0}
            onChange={handleChange}
            type="text" maxLength={4}
          />
          {card.cardNumber1 && '-'}
          <input
            className="input-basic"
            name={formNames[1]}
            ref={formRefs[1]}
            value={card.cardNumber1}
            onChange={handleChange}
            type="text" maxLength={4}
          />
          {card.cardNumber2 && '-'}
          <input
            className="input-basic"
            name={formNames[2]}
            ref={formRefs[2]}
            value={card.cardNumber2}
            onChange={handleChange}
            type="password" maxLength={4}/>

          {card.cardNumber3 && '-'}
          <input
            className="input-basic"
            name={formNames[3]}
            ref={formRefs[3]}
            value={card.cardNumber3}
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
            value={card.mm}
            onChange={handleChange}
            placeholder="MM"
            type="text" maxLength={2}/>
          {card.yy && '/'}
          <input
            className="input-basic"
            name={formNames[5]}
            ref={formRefs[5]}
            value={card.yy}
            onChange={handleChange}
            placeholder="YY"
            type="text" maxLength={2}/>
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">
          <span>카드 소유자 이름(선택)</span>
          <span className="input-length">{card.owner.length || 0}/30</span>
        </span>
        <input
          className="input-basic"
          name={formNames[6]}
          ref={formRefs[6]}
          value={card.owner}
          onChange={handleChange}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          type="text" maxLength={30}
        />
      </div>
      <div className="input-container">
        <span className="input-title">보안코드(CVC/CVV)</span>
        <input
          className="input-basic w-25"
          name={formNames[7]}
          ref={formRefs[7]}
          value={card.cvc}
          onChange={handleChange}
          type="password" maxLength={3}/>
      </div>
      <div className="input-container">
        <span className="input-title">카드 비밀번호</span>
        <input
          className="input-basic w-15"
          name={formNames[8]}
          ref={formRefs[8]}
          value={card.password0}
          onChange={handleChange} type="password" maxLength={1}/>
        <input
          className="input-basic w-15"
          name={formNames[9]}
          ref={formRefs[9]}
          value={card.password1}
          onChange={handleChange} type="password" maxLength={1}/>
        <input
          className="input-basic w-15"
          type="password"
          disabled
          value="*"
          readOnly={true}
        />
        <input
          className="input-basic w-15"
          type="password"
          disabled
          value="*"
          readOnly={true}
        />
      </div>
      <div className="button-box">
        <span className="button-text">다음</span>
      </div>
    </form>
  </div>
}