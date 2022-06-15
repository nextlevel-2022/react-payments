import { CardProps } from '@interface';
import { Input, InputContainer } from '@share';
import { focusOnNextRequiredInput, getErrorMsgByType, isCvcValid, isStringInputed } from '@utils';
import React, { useState } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

interface CvcInputProps {
  setNewCard: React.Dispatch<React.SetStateAction<CardProps>>;
}

const CvcInput = ({ setNewCard }: CvcInputProps) => {
  const [isCvcError, setIsCvcError] = useState<boolean>(false);
  const [tooltipOpened, setTooltipOpened] = useState(false);

  const cardCvcHandler = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = changeEvent;
    if (isStringInputed(target.value)) {
      setIsCvcError(true);
      return;
    }

    target.value = target.value.replace(/[^0-9]/g, '');
    setNewCard((prevVal) => {
      prevVal['cvcNumber'] = target.value;
      return prevVal;
    });

    if (isCvcValid(target.value)) {
      setIsCvcError(false);
      focusOnNextRequiredInput(changeEvent);
    }
  };

  return (
    <InputContainer>
      <InputContainer.title>
        <div className="title-with-tooltip">
          보안코드(CVC/CVV)
          <AiOutlineQuestionCircle onClick={() => setTooltipOpened(!tooltipOpened)} size="1rem" />
        </div>
      </InputContainer.title>
      {tooltipOpened && <div className="tooltip">CVV/CVC 번호는 카드 뒷 면에 있는 3자리 숫자이며 카드 보안을 위한 번호입니다.</div>}
      <InputContainer.box>
        <Input type="password" onChange={cardCvcHandler} maxLength={3} id="cvcNumber" className="w-25" required />
      </InputContainer.box>
      {isCvcError && <InputContainer.errorMsg text={getErrorMsgByType('cardCvcNumber')} />}
    </InputContainer>
  );
};

export default CvcInput;
