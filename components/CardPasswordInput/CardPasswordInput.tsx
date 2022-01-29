import { ChangeEvent, createRef, forwardRef, Ref, RefObject } from 'react';

import { TEST_ID } from '../../constants';
import { CardPassword } from '../../types/card';
import Input from '../@atom/Input';
import InputContainerWithLabel from '../@atom/InputContainerWithLabel';

interface CardPasswordInputProps {
  password: CardPassword;
  onChangePassword: (
    e: ChangeEvent<HTMLInputElement>,
    index: keyof CardPassword,
    toBeFocusedRef?: Ref<any> | RefObject<HTMLInputElement>,
  ) => void;
}
function CardPasswordInput(
  { password, onChangePassword }: CardPasswordInputProps,
  firstInput: Ref<any>,
) {
  const NUMBER_OF_INPUTS = 2;
  const inputRefs = [
    firstInput,
    ...Array.from({ length: NUMBER_OF_INPUTS - 1 }).map(() => createRef<HTMLInputElement>()),
  ];

  return (
    <InputContainerWithLabel label={'카드 비밀번호'}>
      <Input
        type={'password'}
        ref={inputRefs[0]}
        value={password[0]}
        onChange={(e) => onChangePassword(e, 0, inputRefs[1])}
        data-testid={TEST_ID.CARD_PASSWORD_INPUTS}
      />
      <Input
        type={'password'}
        ref={inputRefs[1]}
        value={password[1]}
        onChange={(e) => onChangePassword(e, 1, inputRefs[2])}
        data-testid={TEST_ID.CARD_PASSWORD_INPUTS}
      />
      <Input type={'password'} placeholder={'*'} disabled />
      <Input type={'password'} placeholder={'*'} disabled />
    </InputContainerWithLabel>
  );
}

export default forwardRef<HTMLDivElement, CardPasswordInputProps>(CardPasswordInput);
