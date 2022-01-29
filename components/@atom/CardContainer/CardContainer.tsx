import { ReactNode } from 'react';
import styled from 'styled-components';

import { COLOR } from '../../../constants';

interface CardContainerProps {
  children: string | ReactNode;
  color?: string;
}
export default function CardContainer({ children, color = COLOR.GRAY_50 }: CardContainerProps) {
  return (
    <Container>
      <CardStyle color={color}>{children}</CardStyle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;
const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 260px;
  height: 170px;

  font-size: 30px;
  color: #575757;

  background: ${({ color }) => color || '#e5e5e5'};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  user-select: none;
`;
