import React from 'react';
import { Input, InputContainer } from '@share';
import { CardProps } from '@interface';

interface OwnerNameInput {
  setNewCard: React.Dispatch<React.SetStateAction<CardProps>>;
  ownerName?: string;
}

const OwnerNameInput = ({ setNewCard, ownerName }: OwnerNameInput) => {
  const cardOwnerNameHandler = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
    setNewCard((prevVal) => {
      prevVal['ownerName'] = changeEvent.target.value;
      return { ...prevVal };
    });
  };

  return (
    <InputContainer>
      <InputContainer.title title="카드 소유자 이름(선택)">
        <span>{ownerName && `${ownerName.length}/30`}</span>
      </InputContainer.title>
      <InputContainer.box>
        <Input type="text" onChange={cardOwnerNameHandler} maxLength={30} id="ownerName" placeHolder="카드에 표시된 이름과 동일하게 입력하세요." />
      </InputContainer.box>
    </InputContainer>
  );
};

export default OwnerNameInput;
