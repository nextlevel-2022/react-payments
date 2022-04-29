import styled from 'styled-components';

import { Card, CardCompany, CardExpiredDate, CardNumber } from '../../types/card';

interface CardInformationProps {
  cardNumber: CardNumber;
  holderName: Card['holderName'];
  expiredDate: CardExpiredDate;
  cardCompany: CardCompany;
}

export default function CardInformation({
  cardNumber,
  holderName,
  expiredDate,
  cardCompany,
}: CardInformationProps) {
  return (
    <>
      <CardTop>
        <CardText>{cardCompany} 카드</CardText>
      </CardTop>
      <CardMiddle>
        <SmallCardChip />
      </CardMiddle>
      <CardBottom>
        <CardNumberContainer>
          <div>{cardNumber[0]}</div>
          <div>{cardNumber[1]}</div>
          <div>{'*'.repeat(cardNumber[2].length)}</div>
          <div>{'*'.repeat(cardNumber[3].length)}</div>
        </CardNumberContainer>
        <CardBottomInfo>
          <CardText>{holderName || 'NAME'}</CardText>
          <CardText>
            {expiredDate.month || 'MM'} / {expiredDate.year || 'YY'}
          </CardText>
        </CardBottomInfo>
      </CardBottom>
    </>
  );
}

const CardTop = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`;
const CardMiddle = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 30px;

  display: flex;
  align-items: center;
`;
const SmallCardChip = styled.div`
  width: 40px;
  height: 26px;
  left: 95px;
  top: 122px;

  background: #cbba64;
  border-radius: 4px;
`;
const CardBottom = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
`;
const CardBottomInfo = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CardText = styled.span`
  margin: 0 16px;
  color: black;
  font-size: 14px;
  line-height: 16px;
  vertical-align: middle;
  font-weight: 400;
`;

const CardNumberContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  div {
    width: 19%;
    margin: 0 5px;
    color: black;
    font-size: 14px;
    line-height: 16px;
    vertical-align: middle;
    font-weight: 400;
  }
`;
