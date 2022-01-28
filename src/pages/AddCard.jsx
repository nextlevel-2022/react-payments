import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const AddCard = () => {
  const history = useNavigate();

  const [inputs, setInputs] = useState({
    cardSubNumber1: '',
    cardSubNumber2: '',
    cardSubNumber3: '',
    cardSubNumber4: '',
    expireMonth: 'MM',
    expireYear: 'YY',
    cardName: '',
    secretCode: '',
  });

  //   const isValidateNumber = (value) => {
  //     console.log(value)
  //     if (!Number.isInteger(value)) return false;
  //     return true;
  // };
  
  const moveNextFocus = (e) => {
    e.target.closest('.input-container').nextElementSibling.querySelector('input').focus();
  };

  const nameArray = ['cardSubNumber4', 'expireYear', 'cardName', 'secretCode'];


  const handleOnChange = (e) => {
    console.log(e.target)
    console.log(e.target.value)
    console.log(e.target.maxLength);
    if (e.target.name.slice(0, -1) === "cardSubNumber") {
      e.target.value = e.target.value.replace(/[^0-9]/g, '');
    }
    

    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    console.log(inputs)
    console.log(e.target.value);

    if(!nameArray.includes(e.target.name)) return
    if (e.target.maxLength === e.target.value.length) {
      moveNextFocus(e)
    }
  };

  return (
    <>
      <div className="app">
        <h2 className="page-title">
          <span onClick={() => history('/')}>&lt; </span>
          카드 추가
        </h2>
        <div className="card-box">
          <div className="empty-card">
            <div className="card-top"></div>
            <div className="card-middle">
              <div className="small-card__chip"></div>
            </div>
            <div className="card-bottom">
              <div className="card-bottom__number">
                <span className="card-text">
                  {inputs.cardSubNumber1} {inputs.cardSubNumber2} {'*'.repeat(inputs.cardSubNumber3.length)}{' '}
                  {'*'.repeat(inputs.cardSubNumber4.length)}
                </span>
              </div>
              <div className="card-bottom__info">
                <span className="card-text">{inputs.cardName.length === 0 ? 'NAME' : inputs.cardName}</span>
                <span className="card-text">
                  {inputs.expireMonth} / {inputs.expireYear}{' '}
                </span>
              </div>
            </div>
          </div>
        </div>
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
        <div className="input-container">
          <span className="input-title">만료일</span>
          <div className="input-box w-50" onChange={handleOnChange}>
            <input className="input-basic" type="text" name="expireMonth" placeholder="MM" maxLength="2" required />
            /
            <input className="input-basic" type="text" name="expireYear" placeholder="YY" maxLength="2" required />
          </div>
        </div>
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
        <div className="input-container">
          <span className="input-title">보안코드(CVC/CVV)</span>
          <input
            className="input-basic w-25"
            type="password"
            name="secretCode"
            maxLength="3"
            onChange={handleOnChange}
          />
        </div>
        <div className="input-container">
          <span className="input-title" onChange={handleOnChange}>
            카드 비밀번호
          </span>
          <input className="input-basic w-15" type="password" maxLength="1" required />
          <input className="input-basic w-15" type="password" maxLength="1" required />
          <span className="w-15">.</span>
          <span className="w-15">.</span>
        </div>
        <div className="button-box">
          <span className="button-text">다음</span>
        </div>
      </div>
    </>
  );
}

export default AddCard
