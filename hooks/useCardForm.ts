import { ChangeEvent, Ref, RefObject, useState } from 'react';

import { CARD_MAX_LENGTH } from '../constants';
import { Card, CardExpiredDate, CardNumber, CardPassword } from '../types/card';

export default function useCardForm() {
  const [cardNumber, setCardNumber] = useState<CardNumber>({
    0: '',
    1: '',
    2: '',
    3: '',
  });
  const [password, setPassword] = useState<CardPassword>({
    0: '',
    1: '',
  });
  const [expiredDate, setExpiredDate] = useState<CardExpiredDate>({
    month: '',
    year: '',
  });
  const [holderName, setHolderName] = useState<Card['holderName']>('');
  const [cvc, setCvc] = useState<Card['cvc']>('');

  const onChangeCardNumbers = (
    { target: { value } }: ChangeEvent<HTMLInputElement>,
    numberIndex: keyof CardNumber,
    tobeFocusedRef?: RefObject<HTMLInputElement>,
  ): void => {
    if (Number.isNaN(Number(value))) return;
    if (value.length > CARD_MAX_LENGTH.NUMBER) return;
    if (value.length === CARD_MAX_LENGTH.NUMBER) tobeFocusedRef?.current?.focus();

    setCardNumber((prev) => ({ ...prev, [numberIndex]: value }));
  };

  const onChangeExpiredDate = (
    { target: { value } }: ChangeEvent<HTMLInputElement>,
    dateType: keyof CardExpiredDate,
    tobeFocusedRef?: RefObject<HTMLInputElement>,
  ): void => {
    if (Number.isNaN(Number(value))) return;
    if (value.length > CARD_MAX_LENGTH.EXPIRED_DATE) return;
    if (value.length === CARD_MAX_LENGTH.EXPIRED_DATE) tobeFocusedRef?.current?.focus();

    setExpiredDate((prev) => ({ ...prev, [dateType]: value }));
  };

  const onChangeCardHolderName = (
    { target: { value } }: ChangeEvent<HTMLInputElement>,
    tobeFocusedRef?: RefObject<HTMLInputElement>,
  ): void => {
    if (value.length > CARD_MAX_LENGTH.HOLDER_NAME) return;
    if (value.length === CARD_MAX_LENGTH.HOLDER_NAME) tobeFocusedRef?.current?.focus();

    setHolderName(value);
  };

  const onChangeCvc = (
    { target: { value } }: ChangeEvent<HTMLInputElement>,
    tobeFocusedRef: RefObject<HTMLInputElement>,
  ): void => {
    if (Number.isNaN(Number(value))) return;
    if (value.length > CARD_MAX_LENGTH.CVC) return;
    if (value.length === CARD_MAX_LENGTH.CVC) tobeFocusedRef.current?.focus();

    setCvc(value);
  };

  const onChangePassword = (
    { target: { value } }: ChangeEvent<HTMLInputElement>,
    index: keyof CardPassword,
    tobeFocusedRef?: Ref<any> | RefObject<HTMLInputElement> | any,
  ): void => {
    if (Number.isNaN(Number(value))) return;
    if (value.length > CARD_MAX_LENGTH.PASSWORD) return;
    if (value.length === CARD_MAX_LENGTH.PASSWORD) tobeFocusedRef?.current?.focus();

    setPassword((prev) => ({ ...prev, [index]: value }));
  };

  return {
    cardNumber,
    setCardNumber,
    onChangeCardNumbers,
    expiredDate,
    setExpiredDate,
    onChangeExpiredDate,
    holderName,
    setHolderName,
    onChangeCardHolderName,
    cvc,
    setCvc,
    onChangeCvc,
    password,
    setPassword,
    onChangePassword,
  };
}
