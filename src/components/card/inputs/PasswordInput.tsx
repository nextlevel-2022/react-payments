import React, { useState } from 'react';
import { InputContainer, Input } from '@share';
import { focusOnNextRequiredInput, getErrorMsgByType, isPasswordValid, isStringInputed } from '@utils';
import { CardProps } from '@interface';

interface PasswordInputProps {
  setNewCard: React.Dispatch<React.SetStateAction<CardProps>>;
}

const PasswordInput = ({ setNewCard }: PasswordInputProps) => {
  const [isPasswordError, setIsPasswordError] = useState<boolean>(false);

  const cardPasswordHandler = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = changeEvent;

    if (isStringInputed(target.value)) {
      setIsPasswordError(true);
      return;
    }

    const {
      dataset: { index: targetIndex },
    } = target;

    const index = Number(targetIndex);
    const value = target.value;

    setNewCard((prevVal) => {
      const { password } = prevVal;
      if (password) password[index] = value;
      return { ...prevVal };
    });

    if (isPasswordValid(value)) {
      setIsPasswordError(false);
      focusOnNextRequiredInput(changeEvent);
    }
  };

  return (
    <InputContainer>
      <InputContainer.title title="카드 비밀번호" />
      <InputContainer.box>
        <Input type="password" onChange={cardPasswordHandler} maxLength={1} id="firstPassword" className="w-15" dataIndex="0" required />
        <Input type="password" onChange={cardPasswordHandler} maxLength={1} id="secondPassword" className="w-15" dataIndex="1" required />
        <div className="w-15 password-placeholder">*</div>
        <div className="w-15 password-placeholder">*</div>
      </InputContainer.box>
      {isPasswordError && <InputContainer.errorMsg text={getErrorMsgByType('cardPassword')} />}
    </InputContainer>
  );
};

export default PasswordInput;
