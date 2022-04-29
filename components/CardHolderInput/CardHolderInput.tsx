import { ChangeEvent, forwardRef, Ref, RefObject } from 'react';
import styled from 'styled-components';

import { TEST_ID } from '../../constants';
import { Card } from '../../types/card';
import Input from '../@atom/Input';
import InputContainerWithLabel from '../@atom/InputContainerWithLabel';

interface CardHolderInputProps {
  holderName: Card['holderName'];
  onChangeCardHolderName: (
    e: ChangeEvent<HTMLInputElement>,
    tobeFocusedRef?: RefObject<HTMLInputElement>,
  ) => void;
  tobeFocusedRef: RefObject<HTMLInputElement>;
}

export function CardHolderInput(
  { holderName, onChangeCardHolderName, tobeFocusedRef }: CardHolderInputProps,
  ref: Ref<any>,
) {
  return (
    <>
      <LengthIndicator>{holderName.length} / 10</LengthIndicator>
      <InputContainerWithLabel label={'카드 소유자 이름(선택)'}>
        <Input
          type={'text'}
          ref={ref}
          value={holderName}
          onChange={(e) => onChangeCardHolderName(e, tobeFocusedRef)}
          placeholder={'카드에 표시된 이름과 동일하게 입력하세요.'}
          data-testid={TEST_ID.CARD_HOLDER_NAME_INPUT}
        />
      </InputContainerWithLabel>
    </>
  );
}

export default forwardRef<HTMLDivElement, CardHolderInputProps>(CardHolderInput);

const LengthIndicator = styled.div`
  position: absolute;
  width: 34px;
  height: 18px;
  left: 312px;
  top: 385px;

  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: -0.05em;

  color: #525252;
`;
