import type { NextPage } from 'next';
import CardContainer from '../../components/@atom/CardContainer';
import CardInformation from "../../components/CardInformation";
import CardNumberInput from "../../components/CardNumberInput";
import useCardForm from "../../hooks/useCardForm";
import {CARD_MAX_LENGTH, COMPANY_COLOR} from "../../constants";
import {ROUTE} from "../../constants/routes";
import {useEffect, useRef, useState} from "react";
import {CardCompany} from "../../types/card";
import {useRouter} from "next/router";
import {validateNewCard} from "../../validations/validateNewCard";
import CardExpiredDateInput from "../../components/CardExpiredDateInput";
import CardHolderInput from "../../components/CardHolderInput";
import CardCvcInput from "../../components/CardCvcInput";
import CardPasswordInput from "../../components/CardPasswordInput";
import RootPortal from "../../components/@atom/RootPortal";
import CardCompanySelectModal from "../../components/CardCompanySelectModal";
import Button from "../../components/@atom/Button";
import styled from "styled-components";

const NewCard: NextPage = () => {
  const {
    cardNumber,
    expiredDate,
    holderName,
    cvc,
    password,
    onChangeCardNumbers,
    onChangeExpiredDate,
    onChangeCardHolderName,
    onChangeCvc,
    onChangePassword,
  } = useCardForm();

  const [cardCompany, setCardCompany] = useState<CardCompany>('');

  const numberFirstInputRef = useRef<HTMLInputElement>(null);
  const expiredDateFirstInputRef = useRef<HTMLInputElement>(null);
  const holderNameFirstInputRef = useRef<HTMLInputElement>(null);
  const cvcInputFirstRef = useRef<HTMLInputElement>(null);
  const passwordInputFirstRef = useRef<HTMLInputElement>(null);

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const router = useRouter();

  const addNewCard = () => {
    try {
      if (!cardCompany) setIsOpenModal(true);
      validateNewCard({ number: cardNumber, expiredDate, cvc, password, cardCompany });

      alert('카드 등록을 성공했습니다.');
      router.push(ROUTE.DONE);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (cardCompany) return;
    if (
      cardNumber[0].length === CARD_MAX_LENGTH.NUMBER &&
      cardNumber[1].length === CARD_MAX_LENGTH.NUMBER
    ) {
      setIsOpenModal(true);
    }
  }, [cardNumber[1]]);

  useEffect(() => {
    numberFirstInputRef.current?.focus();
  }, []);

  return (
    <>
      <Header onClick={() => router.push(ROUTE.HOME)}>{'<'} 1️⃣ 카드 추가</Header>
      <CardContainer color={COMPANY_COLOR[cardCompany]}>
        <CardInformation
          cardNumber={cardNumber}
          holderName={holderName}
          expiredDate={expiredDate}
          cardCompany={cardCompany}
        />
      </CardContainer>

      <CardNumberInput
        cardNumber={cardNumber}
        onChangeCardNumbers={onChangeCardNumbers}
        tobeFocusedRef={expiredDateFirstInputRef}
        ref={numberFirstInputRef}
      />
      <CardExpiredDateInput
        expiredDate={expiredDate}
        onChangeExpiredDate={onChangeExpiredDate}
        tobeFocusedRef={holderNameFirstInputRef}
        ref={expiredDateFirstInputRef}
      />
      <CardHolderInput
        holderName={holderName}
        onChangeCardHolderName={onChangeCardHolderName}
        tobeFocusedRef={cvcInputFirstRef}
        ref={holderNameFirstInputRef}
      />
      <CardCvcInput
        cvc={cvc}
        onChangeCvc={onChangeCvc}
        tobeFocusedRef={passwordInputFirstRef}
        ref={cvcInputFirstRef}
      />
      <CardPasswordInput
        password={password}
        onChangePassword={onChangePassword}
        ref={passwordInputFirstRef}
      />
      {isOpenModal && (
        <RootPortal closeModal={() => setIsOpenModal(false)}>
          <CardCompanySelectModal setCardCompany={setCardCompany} setIsOpenModal={setIsOpenModal} />
        </RootPortal>
      )}
      <ButtonContainer>
        <Button onClick={addNewCard}>다음</Button>
      </ButtonContainer>
    </>
  );
}

export default NewCard;


const ButtonContainer = styled.div`
  width: 100%;
  text-align: right;
`;

const Header = styled.h2`
  cursor: pointer;
`;


