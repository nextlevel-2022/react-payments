import { ChangeEvent, forwardRef, Ref, RefObject } from 'react';

import { Card } from '../../types/card';
import Input from '../@atom/Input';
import InputContainerWithLabel from '../@atom/InputContainerWithLabel';
import { TEST_ID } from '../../constants';

interface CardCvcInputProps {
  tobeFocusedRef: RefObject<HTMLInputElement>;
  cvc: Card['cvc'];
  onChangeCvc: (
    e: ChangeEvent<HTMLInputElement>,
    tobeFocusedRef: RefObject<HTMLInputElement>,
  ) => void;
}

function CardCvcInput(
  { tobeFocusedRef, onChangeCvc, cvc }: CardCvcInputProps,
  cvcInputRef: Ref<any>,
) {
  return (
    <InputContainerWithLabel label={'보안코드(CVC/CVV)'}>
      <Input
        type={'password'}
        ref={cvcInputRef}
        value={cvc}
        onChange={(event) => onChangeCvc(event, tobeFocusedRef)}
        data-testid={TEST_ID.CARD_CVC_INPUT}
      />
    </InputContainerWithLabel>
  );
}

export default forwardRef<HTMLInputElement, CardCvcInputProps>(CardCvcInput);
