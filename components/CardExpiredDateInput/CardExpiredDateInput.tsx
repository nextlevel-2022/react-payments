import { ChangeEvent, forwardRef, Ref, RefObject, useRef } from 'react';

import { TEST_ID } from '../../constants';
import { CardExpiredDate } from '../../types/card';
import Input from '../@atom/Input';
import InputContainerWithLabel from '../@atom/InputContainerWithLabel';

interface CardExpiredDateProps {
  onChangeExpiredDate: (
    e: ChangeEvent<HTMLInputElement>,
    dateType: keyof CardExpiredDate,
    tobeFocusedRef?: RefObject<HTMLInputElement>,
  ) => void;
  expiredDate: CardExpiredDate;
  tobeFocusedRef: RefObject<HTMLInputElement>;
}

export function CardExpiredDateInput(
  { expiredDate, tobeFocusedRef, onChangeExpiredDate }: CardExpiredDateProps,
  ref: Ref<any>,
) {
  const inputRef1 = useRef<HTMLInputElement>(null);

  return (
    <InputContainerWithLabel label={'만료일'}>
      <Input
        type={'text'}
        ref={ref}
        value={expiredDate['month']}
        onChange={(e) => onChangeExpiredDate(e, 'month', inputRef1)}
        placeholder={'**'}
        data-testid={TEST_ID.CARD_EXPIRED_DATE_INPUTS}
      />
      <Input
        type={'text'}
        ref={inputRef1}
        value={expiredDate['year']}
        onChange={(e) => onChangeExpiredDate(e, 'year', tobeFocusedRef)}
        placeholder={'**'}
        data-testid={TEST_ID.CARD_EXPIRED_DATE_INPUTS}
      />
    </InputContainerWithLabel>
  );
}

export default forwardRef<HTMLDivElement, CardExpiredDateProps>(CardExpiredDateInput);
