import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import { CARD_COMPANIES, COMPANY_COLOR } from '../../constants';
import { CardCompany } from '../../types/card';

interface ModalProps {
  setCardCompany: Dispatch<SetStateAction<CardCompany>>;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

export default function CardCompanySelectModal({ setCardCompany, setIsOpenModal }: ModalProps) {
  const selectCardType = (company: CardCompany) => {
    setCardCompany(company);
    setIsOpenModal(false);
  };

  return (
    <>
      {Object.keys(CARD_COMPANIES).map((company, index) => (
        <ItemContainer key={`card-type-${index}`}>
          <ItemDot color={COMPANY_COLOR[company]} onClick={() => selectCardType(company)} />
          <ItemName>{company}</ItemName>
        </ItemContainer>
      ))}
    </>
  );
}

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 0;
`;

const ItemDot = styled.div`
  margin: 0.5rem 1rem;
  border-radius: 50%;
  width: 2.8rem;
  height: 2.8rem;
  background-color: ${({ color }) => color};
  cursor: pointer;
`;

const ItemName = styled.span`
  font-size: 12px;
  letter-spacing: -0.085rem;
`;
