import React, { useCallback, useState } from 'react';
import { Input, InputContainer } from '@share';
import { CardProps } from '@interface';
import { focusOnNextRequiredInput, getCardBackGroundColor, getErrorMsgByType, isIndividualCardNumberInputValid, isPublicCardNumberInCardCompany, isStringInputed, isTotalCardNumberValid } from '@utils';
import { PUBLIC_CARD_NUMBER_INPUT_LAST_INDEX, CARD_NUMBER_TOTAL_LAST_INDEX, PUBLIC_CARD_NUMBER_LENGTH } from '@constants';

interface CardNumberInputProps {
  newCard: CardProps;
  setNewCard: React.Dispatch<React.SetStateAction<CardProps>>;
  setCompanyModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardNumberInput = ({ newCard, setNewCard, setCompanyModalOpened }: CardNumberInputProps) => {
  const [isCardNumberError, setIsCardNumberError] = useState<boolean>(false);
  const [isPublicCardNumberCompleted, setIsPublicCardNumberCompleted] = useState<boolean>(false);
  const { cardNumber, company } = newCard;

  const getCurrentCardNumberOnInputIndex = useCallback(
    (index, value) => {
      const sliceIndex = index <= PUBLIC_CARD_NUMBER_INPUT_LAST_INDEX ? PUBLIC_CARD_NUMBER_INPUT_LAST_INDEX + 1 : CARD_NUMBER_TOTAL_LAST_INDEX + 1;
      const tempArray = cardNumber.slice(0, sliceIndex);
      tempArray[index] = value;
      return tempArray.join('');
    },
    [cardNumber],
  );

  const cardNumberHandler = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = changeEvent;
    const {
      dataset: { index: targetIndex },
    } = target;

    if (isStringInputed(target.value)) {
      setIsCardNumberError(true);
      return;
    }

    target.value = target.value.replace(/[^0-9]/g, '');
    const index = Number(targetIndex);

    setNewCard((prevVal) => {
      prevVal.cardNumber[index] = target.value;
      return { ...prevVal };
    });

    if (isIndividualCardNumberInputValid(target.value)) {
      setIsCardNumberError(false);
    }

    // 두번째 부터 입력하는 경우도 고려
    if (index <= PUBLIC_CARD_NUMBER_INPUT_LAST_INDEX) {
      const publicCardNumber = getCurrentCardNumberOnInputIndex(index, target.value);

      if (publicCardNumber.length !== PUBLIC_CARD_NUMBER_LENGTH) {
        return;
      }

      setIsPublicCardNumberCompleted(true);

      if (isPublicCardNumberInCardCompany(publicCardNumber)) {
        const bgColor = getCardBackGroundColor(publicCardNumber);
        setNewCard((prevVal) => {
          return {
            ...prevVal,
            bgColor,
          };
        });
        return;
      }

      setCompanyModalOpened(true);
    }

    if (index === CARD_NUMBER_TOTAL_LAST_INDEX) {
      const totalCardNumber = getCurrentCardNumberOnInputIndex(index, target.value);
      if (isTotalCardNumberValid(totalCardNumber)) {
        focusOnNextRequiredInput(changeEvent);
      }
    }
  };

  const isNeedCompanySelect = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      event.preventDefault();
      if (isPublicCardNumberCompleted && company === '') {
        setCompanyModalOpened(true);
        return true;
      }
      return false;
    },
    [isPublicCardNumberCompleted, company],
  );

  return (
    <InputContainer>
      <InputContainer.title title="카드번호" />
      <InputContainer.box>
        <Input type="text" onChange={cardNumberHandler} maxLength={4} id="firstCardNumber" dataIndex="0" required />
        <Input type="text" onChange={cardNumberHandler} maxLength={4} id="secondCardNumber" dataIndex="1" required />
        <Input type="password" onChange={cardNumberHandler} onKeyPress={isNeedCompanySelect} maxLength={4} id="thirdCardNumber" dataIndex="2" required />
        <Input type="password" onChange={cardNumberHandler} onKeyPress={isNeedCompanySelect} maxLength={4} id="fourthCardNumber" dataIndex="3" required />
      </InputContainer.box>
      {isCardNumberError && <InputContainer.errorMsg text={getErrorMsgByType('cardNumber')} />}
    </InputContainer>
  );
};
export default CardNumberInput;
