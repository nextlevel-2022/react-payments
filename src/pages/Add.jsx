import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import CardForm from "../components/CardForm";

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
  const navigate = useNavigate();
  const moveListPage = () => {
    navigate("/list");
  };

  return (
    <div className="app">
      <div className="page-title" onClick={moveListPage}>
        &lt; 카드 추가
      </div>
      <Card card={cardData} />
      <CardForm cardData={cardData} setCardData={setCardData} />
    </div>
  );
};

export default Add;
