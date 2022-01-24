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
    cardNumber1: '',
    cardNumber2: '',
    cardNumber3: '',
    cardNumber4: '',
    expireMonth: '',
    expireYear: '',
  });

  function handleChange(event) {
    const value = event.target.value;
    if (!isNaN(value)) {
      // value가 문자열이면 NaN이니까, NaN이 아니면..., 즉 숫자일 때에만!
      setInputs(old => ({ ...old, [event.target.name]: value }));
    } else {
      console.log('문자열이야!', value);
    }
  }
  console.log(inputs);

  return (
    <div className="app">
      <AddCard />
      {[
        CardNumbers,
        ExpDate,
        CardOwnerName,
        CardSecurityCode,
        CardPassword,
      ].map(Input => (
        <div className="input-container">
          <Input inputs={inputs} handleChange={handleChange} />
        </div>
      ))}

      <div className="button-box">
        <span className="button-text">다음</span>
      </div>
    </div>
  );
};

export default App;
