import { ChangeEvent, createRef, forwardRef, Ref, RefObject } from 'react';

import { TEST_ID } from '../../constants';
import { CardNumber } from '../../types/card';
import Input from '../@atom/Input';
import InputContainerWithLabel from '../@atom/InputContainerWithLabel';

interface CardNumberInputProps {
  cardNumber: CardNumber;
  onChangeCardNumbers: (
    e: ChangeEvent<HTMLInputElement>,
    numberIndex: keyof CardNumber,
    tobeFocusedRef?: RefObject<HTMLInputElement>,
  ) => void;
  tobeFocusedRef: RefObject<HTMLInputElement>;
}

function CardNumberInput(
  { cardNumber, onChangeCardNumbers, tobeFocusedRef }: CardNumberInputProps,
  firstInputRef: Ref<any>,
) {
  const NUMBER_OF_INPUTS = 4;

  const inputRefs = [firstInputRef, ...Array(NUMBER_OF_INPUTS - 1)].map(() =>
    createRef<HTMLInputElement>(),
  );

  return (
    <>
      <InputContainerWithLabel label={'카드번호'}>
        <Input
          type={'text'}
          value={cardNumber[0]}
          placeholder={'****'}
          ref={inputRefs[0]}
          onChange={(e) => onChangeCardNumbers(e, 0, inputRefs[1])}
          data-testid={TEST_ID.CARD_NUMBER_INPUTS}
        />
        <Input
          type={'text'}
          ref={inputRefs[1]}
          value={cardNumber[1]}
          onChange={(e) => onChangeCardNumbers(e, 1, inputRefs[2])}
          placeholder={'****'}
          data-testid={TEST_ID.CARD_NUMBER_INPUTS}
        />
        <Input
          type={'password'}
          ref={inputRefs[2]}
          value={cardNumber[2]}
          onChange={(e) => onChangeCardNumbers(e, 2, inputRefs[3])}
          placeholder={'****'}
          data-testid={TEST_ID.CARD_NUMBER_INPUTS}
        />
        <Input
          type={'password'}
          ref={inputRefs[3]}
          value={cardNumber[3]}
          onChange={(e) => onChangeCardNumbers(e, 3, tobeFocusedRef)}
          placeholder={'****'}
          data-testid={TEST_ID.CARD_NUMBER_INPUTS}
        />
      </InputContainerWithLabel>
    </>
  );
}

export default forwardRef<HTMLDivElement, CardNumberInputProps>(CardNumberInput);
