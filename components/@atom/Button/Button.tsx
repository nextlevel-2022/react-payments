import { MouseEventHandler } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { COLOR } from '../../../constants';
import { Color } from '../../../types/card';

enum BUTTON_SIZE {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

const SIZES = {
  [BUTTON_SIZE.SMALL]: css`
    font-size: 0.875rem;
    --button-padding: 8px 12px;
  `,
  [BUTTON_SIZE.MEDIUM]: css`
    font-size: 1rem;
    padding: 12px 16px;
  `,
  [BUTTON_SIZE.LARGE]: css`
    font-size: 1.25rem;
    padding: 16px 20px;
  `,
};

interface ButtonProps {
  children: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  size?: BUTTON_SIZE;
  backgroundColor?: Color;
  textColor?: Color;
}

function Button({
  children,
  size = BUTTON_SIZE.MEDIUM,
  backgroundColor = COLOR.WHITE,
  textColor = COLOR.BLACK,
  onClick,
}: ButtonProps) {
  const sizeStyle = SIZES[size];

  return (
    <ButtonStyled
      sizeStyle={sizeStyle}
      backgroundColor={backgroundColor}
      textColor={textColor}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button<{
  sizeStyle: FlattenSimpleInterpolation;
  backgroundColor: Color;
  textColor: Color;
}>`
  ${({ sizeStyle }) => sizeStyle}
  background: ${({ backgroundColor }) => backgroundColor}
  color: ${({ textColor }) => textColor}
  border: none;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    opacity: 0.7;
  }
`;

export default Button;
