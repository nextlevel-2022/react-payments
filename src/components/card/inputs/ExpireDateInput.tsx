import React, { useState } from 'react';
import { Input, InputContainer } from '@share';
import { focusOnNextRequiredInput, getErrorMsgByType, isMonthValid, isStringInputed, isYearValid } from '@utils';
import { CardProps } from '@interface';

interface ExpireDateInputProps {
  setNewCard: React.Dispatch<React.SetStateAction<CardProps>>;
}

const ExpireDateInput = ({ setNewCard }: ExpireDateInputProps) => {
  const [isExpireDateError, setIsExpireDateError] = useState<boolean>(false);

  const cardMonthHandler = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = changeEvent;
    if (isStringInputed(target.value)) {
      setIsExpireDateError(true);
      return;
    }

    setNewCard((prevVal) => {
      prevVal['expireMonth'] = target.value;
      return { ...prevVal };
    });

    if (isMonthValid(target.value)) {
      setIsExpireDateError(false);
      focusOnNextRequiredInput(changeEvent);
    } else {
      setIsExpireDateError(true);
    }
  };

  const cardYearHandler = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = changeEvent;
    if (isStringInputed(target.value)) {
      setIsExpireDateError(true);
      return;
    }

    setNewCard((prevVal) => {
      prevVal['expireYear'] = target.value;
      return { ...prevVal };
    });

    if (isYearValid(target.value)) {
      setIsExpireDateError(false);
      focusOnNextRequiredInput(changeEvent);
    } else {
      setIsExpireDateError(true);
    }
  };

  return (
    <InputContainer className="w-50">
      <InputContainer.title title="만료일" />
      <InputContainer.box>
        <Input type="text" onChange={cardMonthHandler} maxLength={2} id="cardExpireMonth" placeHolder="MM" required />
        <Input type="text" onChange={cardYearHandler} maxLength={2} id="cardExpireYear" placeHolder="YY" required />
      </InputContainer.box>
      {isExpireDateError && <InputContainer.errorMsg text={getErrorMsgByType('cardExpire')} />}
    </InputContainer>
  );
};

export default ExpireDateInput;
