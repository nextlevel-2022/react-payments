import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Input from "../components/Input";

const Add = () => {
  const initCardData = {
    number: {
      first: "",
      second: "",
      third: "",
      forth: "",
    },
    expire: {
      MM: "",
      YY: "",
    },
    userName: "",
    CVC: "",
    password: {
      first: "",
      second: "",
    },
    cardName: "",
  };
  const [cardData, setCardData] = useState(initCardData);

  const setCardNumber = ({ key, position, target }) => {
    // cardValidation
    const isNum = (target) => /^[0-9]+$/.test(target);
    if (target.value && !isNum(target.value)) {
      return setErrorMsg({ ...errorMsg, cardNumber: ERROR_MESSAGE.cardNumber });
    }
    // changeValue
    setCardData({
      ...cardData,
      [key]: {
        ...cardData[key],
        [position]: target.value,
      },
    });
    setErrorMsg({ ...errorMsg, cardNumber: null });
    //focus이동
    if (position === "forth" && target.value.length === 4) {
      expireRef.current.focus();
    }
  };
  const setCardExpire = ({ key, position, target }) => {
    //Validation
    const checkMonth = (target) => /^(0[1-9]|1[012])$/.test(target);
    const checkYear = (target) => /^(2[2-9]|[3-9][0-9])$/.test(target);
    if (target.value.length === 2 && position === "MM") {
      if (!checkMonth(target.value)) {
        setErrorMsg({ ...errorMsg, expiredMonth: ERROR_MESSAGE.expiredMonth });
        return;
      }
    }
    if (target.value.length === 2 && position === "YY") {
      if (!checkYear(target.value)) {
        setErrorMsg({ ...errorMsg, expiredYear: ERROR_MESSAGE.expiredYear });
        return;
      }
    }

    setErrorMsg({ ...errorMsg, expiredMonth: null, expiredYear: null });
    //changeValue
    setCardData({
      ...cardData,
      [key]: {
        ...cardData[key],
        [position]: target.value,
      },
    });
    //focus이동
    if (position === "YY" && target.value.length === 2) {
      cvcRef.current.focus();
    }
  };
  const setCardPassword = ({ key, position, target }) => {
    const isNum = (target) => /^[0-9]+$/.test(target);
    if (target.value && !isNum(target.value)) {
      setErrorMsg({ ...errorMsg, password: ERROR_MESSAGE.password });
      return;
    }

    setErrorMsg({ ...errorMsg, password: null });
    setCardData({
      ...cardData,
      [key]: {
        ...cardData[key],
        [position]: target.value,
      },
    });
    if (position === "first" && target.value.length === 1) {
      secondPasswordRef.current.focus();
    }
  };
  const setCVC = ({ target }) => {
    const isNum = (target) => /^[0-9]+$/.test(target);
    if (target.value && !isNum(target.value)) {
      setErrorMsg({ ...errorMsg, cvc: ERROR_MESSAGE.cvc });
      return;
    }

    setErrorMsg({ ...errorMsg, cvc: null });
    setCardData({
      ...cardData,
      CVC: target.value,
    });
    console.log(cardData.CVC);
    if (target.value.length === 3) {
      firstPasswordRef.current.focus();
    }
  };
  const setUserName = ({ target }) => {
    setCardData({
      ...cardData,
      userName: target.value,
    });
  };

  const [errorMsg, setErrorMsg] = useState({
    cardNumber: null,
    expiredMonth: null,
    expiredYear: null,
    cvc: null,
    password: null,
  });
  const ERROR_MESSAGE = {
    cardNumber: "각각 0 - 9 사이의 숫자 4개를 입력해주세요.",
    expiredMonth: "01 - 12 사이의 두자리 숫자를 입력해주세요.",
    expiredYear: "22 이상 99 이하의 두자리 숫자를 입력해주세요.",
    cvc: "0 - 9 사이의 숫자 3개를 입력해주세요.",
    password: "0 - 9 사이의 숫자를 입력해주세요.",
  };

  const renderDivider = (target, length, sign) =>
    target.length === length && <span>{sign}</span>;
  const renderErrorLog = (target) => {
    return (
      errorMsg[target] && (
        <span style={{ color: "red" }}>{`(${errorMsg[target]})`}</span>
      )
    );
  };
  const navigate = useNavigate();
  const moveListPage = () => {
    navigate("/list");
  };
  const moveNextPage = () => {
    navigate("/alias");
  };

  const expireRef = useRef();
  const cvcRef = useRef();
  const firstPasswordRef = useRef();
  const secondPasswordRef = useRef();

  return (
    <div className="app">
      <div className="page-title" onClick={moveListPage}>
        &lt; 카드 추가
      </div>
      <Card card={cardData} />
      <div className="input-container">
        <span className="input-title">
          카드 번호 {renderErrorLog("cardNumber")}
        </span>
        <div className="input-box">
          <Input
            value={cardData.number.first}
            type="text"
            onChange={(e) =>
              setCardNumber({
                key: "number",
                position: "first",
                target: e.target,
              })
            }
            min="4"
            max="4"
          />
          {renderDivider(cardData.number.first, 4, "-")}
          <Input
            value={cardData.number.second}
            type="text"
            onChange={(e) =>
              setCardNumber({
                key: "number",
                position: "second",
                target: e.target,
              })
            }
            min="4"
            max="4"
          />
          {renderDivider(cardData.number.second, 4, "-")}
          <Input
            value={cardData.number.third}
            type="password"
            onChange={(e) =>
              setCardNumber({
                key: "number",
                position: "third",
                target: e.target,
              })
            }
            min="4"
            max="4"
          />
          {renderDivider(cardData.number.third, 4, "-")}
          <Input
            value={cardData.number.forth}
            type="password"
            onChange={(e) =>
              setCardNumber({
                key: "number",
                position: "forth",
                target: e.target,
              })
            }
            min="4"
            max="4"
          />
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">
          만료일 {renderErrorLog("expiredMonth")}
          {renderErrorLog("expiredYear")}
        </span>
        <div className="input-box w-50">
          <Input
            value={cardData.expire.MM}
            placeholder="MM"
            type="text"
            onChange={(e) =>
              setCardExpire({
                key: "expire",
                position: "MM",
                target: e.target,
              })
            }
            min="2"
            max="2"
            elRef={expireRef}
          />
          {renderDivider(cardData.expire.MM, 2, "/")}
          <Input
            value={cardData.expire.YY}
            placeholder="YY"
            type="text"
            onChange={(e) =>
              setCardExpire({
                key: "expire",
                position: "YY",
                target: e.target,
              })
            }
            min="2"
            max="2"
          />
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">
          카드 소유자 이름(선택){` ${cardData.userName.length} / 30`}
        </span>
        <Input
          value={cardData.userName}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          type="text"
          onChange={setUserName}
          max="30"
          elRef={cvcRef}
        />
      </div>
      <div className="input-container">
        <span className="input-title">
          보안코드(CVC/CVV) {renderErrorLog("cvc")}
        </span>
        <Input
          value={cardData.CVC}
          name="cvc"
          type="password"
          onChange={setCVC}
          min="3"
          max="3"
          width="w-25"
        />
      </div>
      <div className="input-container">
        <span className="input-title">
          카드 비밀번호{renderErrorLog("password")}
        </span>
        <Input
          value={cardData.password.first}
          name="password"
          type="password"
          onChange={(e) =>
            setCardPassword({
              key: "password",
              position: "first",
              target: e.target,
            })
          }
          min="1"
          max="1"
          width="w-15"
          elRef={firstPasswordRef}
        />
        <Input
          value={cardData.password.second}
          name="password"
          type="password"
          onChange={(e) =>
            setCardPassword({
              key: "password",
              position: "second",
              target: e.target,
            })
          }
          min="1"
          max="1"
          width="w-15"
          elRef={secondPasswordRef}
        />

        <Input type="password" min="1" max="1" width="w-15" />
        <Input type="password" min="1" max="1" width="w-15" />
      </div>
      <div className="button-box">
        <span className="button-text" onClick={moveNextPage}>
          다음
        </span>
      </div>
    </div>
  );
};

export default Add;
