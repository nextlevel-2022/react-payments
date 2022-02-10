import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/addCard/Header';
import CardBoxUI from '../../components/common/CardBoxUI';
import InputCardNumber from '../../components/addCard/InputCardNumber';
import InputCardExpirationDate from '../../components/addCard/InputCardExpirationDate';
import InputCardOwner from '../../components/addCard/inputCardOwner';
import InputCardSecurityCode from '../../components/addCard/InputCardSecurityCode';
import InputCardPassword from '../../components/addCard/InputCardPassword';
import Footer from '../../components/addCard/Footer';
import { isValid } from '../../utils/validation';

const AddCardContainer = () => {
  const history = useNavigate();

  const [inputs, setInputs] = useState({
    cardSubNumber1: '',
    cardSubNumber2: '',
    cardSubNumber3: '',
    cardSubNumber4: '',
    expirationMonth: 'MM',
    expirationYear: 'YY',
    cardName: '',
    securityCode: '',
  });

  const moveNextFocus = (e) => {
    e.target.closest('.input-container').nextElementSibling.querySelector('input').focus();
  };

  const nameArray = ['cardSubNumber4', 'expirationYear', 'cardName', 'securityCode'];

  const handleOnChange = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    console.log(e.target.maxLength);
    if (e.target.name.slice(0, -1) === 'cardSubNumber') {
      // e.target.value = e.target.value.replace(/[^0-9]/g, '');
      if (!isValid.isNumber(e)) {
        return console.log('test', e.target.value);
      }
    }
    if (e.target.name === 'expirationMonth') {
      if (!isValid.expirationMonth(e)) {
        return
      }
    }
    if (e.target.name === 'expirationYear') {
      if (!isValid.expirationYear(e)) {
        return
      }
    }

    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    console.log(inputs);
    console.log(e.target.value);

    if (!nameArray.includes(e.target.name)) return;
    if (e.target.maxLength === e.target.value.length) {
      moveNextFocus(e);
    }
  };

  return (
    <div className="app">
      <Header history={history}></Header>
      <CardBoxUI inputs={inputs}></CardBoxUI>
      <InputCardNumber handleOnChange={handleOnChange}></InputCardNumber>
      <InputCardExpirationDate handleOnChange={handleOnChange}></InputCardExpirationDate>
      <InputCardOwner inputs={inputs} handleOnChange={handleOnChange}></InputCardOwner>
      <InputCardSecurityCode handleOnChange={handleOnChange}></InputCardSecurityCode>
      <InputCardPassword handleOnChange={handleOnChange}></InputCardPassword>
      <Footer />
    </div>
  );
};

export default AddCardContainer;
