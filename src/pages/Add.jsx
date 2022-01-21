import React, { useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Add = () => {
  const [number, setNumber] = useState(["1111", "2222", "3333", "4444"]);
  const [expire, setExpire] = useState(["MM", "YY"]);
  const [ownerName, setOwnerName] = useState("NAME");
  const [securityCVC, setSecurityCVC] = useState(); // '123'
  const [password, setPassword] = useState(["", "", "", ""]); // [[1],[2],[3],[4]]
  const [cardName, setCardName] = useState("국민카드");

  const cardData = {
    number,
    expire,
    ownerName,
    securityCVC,
    password,
    cardName,
  };
  const handleChangeCardData = ({ target }) => {
    target.dataset.name === "owner" && setOwnerName(target.value);
    target.dataset.name === "cvc" &&
      setSecurityCVC(target.value) & console.log("cvc변경: ", target.value);
  };

  const handleChangeNumber = ({ target }) => {
    const newNumber = [...number];
    const index = target.dataset.name - 1;

    newNumber.forEach((_, i) =>
      i === index ? (newNumber[i] = target.value) : null
    );
    setNumber(newNumber);
  };

  const handleChangePassword = ({ target }) => {
    const newPassword = [...password];
    const index = target.dataset.name - 1;

    newPassword.forEach((_, i) =>
      i === index ? (newPassword[i] = target.value) : null
    );
    setPassword(newPassword) & console.log("password변경: ", target.value);
  };
  const handleChangeExpires = ({ target }) => {
    const newExpire = [...expire];
    if (target.dataset.name === "MM") {
      newExpire[0] = target.value;
    } else if (target.dataset.name === "YY") {
      newExpire[1] = target.value;
    }
    setExpire(newExpire);
  };
  return (
    <div className="app">
      <div className="page-title">
        <Link to="/list" style={{ color: "inherit", textDecoration: "none" }}>
          &lt;
        </Link>
        카드 추가
      </div>
      <Card card={cardData} />
      <div className="input-container">
        <span className="input-title">카드 번호</span>
        <div className="input-box">
          <input
            className="input-basic"
            type="text"
            onChange={handleChangeNumber}
            data-name="1"
          />
          <input
            className="input-basic"
            type="text"
            onChange={handleChangeNumber}
            data-name="2"
          />
          <input
            className="input-basic"
            type="password"
            onChange={handleChangeNumber}
            data-name="3"
          />
          <input
            className="input-basic"
            type="password"
            onChange={handleChangeNumber}
            data-name="4"
          />
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">만료일</span>
        <div className="input-box w-50">
          <input
            className="input-basic"
            type="text"
            placeholder="MM"
            onChange={handleChangeExpires}
            data-name="MM"
          />
          <input
            className="input-basic"
            type="text"
            placeholder="YY"
            onChange={handleChangeExpires}
            data-name="MM"
          />
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">카드 소유자 이름(선택)</span>

        <input
          onChange={handleChangeCardData}
          type="text"
          className="input-basic"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          data-name="owner"
        />
      </div>
      <div className="input-container">
        <span className="input-title">보안코드(CVC/CVV)</span>
        <input
          className="input-basic w-25"
          type="password"
          onChange={handleChangeCardData}
          data-name="cvc"
        />
      </div>
      <div className="input-container">
        <span className="input-title">카드 비밀번호</span>
        <input
          className="input-basic w-15"
          type="password"
          onChange={handleChangePassword}
          data-name="1"
        />
        <input
          className="input-basic w-15"
          type="password"
          onChange={handleChangePassword}
          data-name="2"
        />
        <input
          className="input-basic w-15"
          type="password"
          onChange={handleChangePassword}
          data-name="3"
        />
        <input
          className="input-basic w-15"
          type="password"
          onChange={handleChangePassword}
          data-name="4"
        />
      </div>
      <div className="button-box">
        <span className="button-text">
          <Link
            to="/alias"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            다음
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Add;
