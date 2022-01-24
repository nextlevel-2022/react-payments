import React, { useState } from 'react';
import CardNumbers from './components/CardNumbers';
import AddCard from './components/AddCard';
import ExpDate from './components/ExpDate';
import CardOwnerName from './components/CardOwnerName';
import CardSecurityCode from './components/CardSecurityCode';
import CardPassword from './components/CardPassword';

function divInputContainer({ children }) {
  return <div className="input-container">{children}</div>;
}

const App = () => {
  {
    /* 밑에 있는 컴포넌트들에게 공통적으로 바뀌는 상태값을 prop으로 내려주는 함수 만들기 */
  }
  const [inputs, setInputs] = useState({
    cardNumber1: null,
    cardNumber2: null,
    cardNumber3: null,
    cardNumber4: null,
  });

  return (
    <div className="app">
      <AddCard />
      <div className="input-container">
        <CardNumbers />
      </div>
      {[ExpDate, CardOwnerName, CardSecurityCode, CardPassword].map(Input => (
        <div className="input-container">
          <Input />
        </div>
      ))}

      <div className="button-box">
        <span className="button-text">다음</span>
      </div>
    </div>
  );
};

export default App;
