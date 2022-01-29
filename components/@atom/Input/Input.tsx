import React, { forwardRef, InputHTMLAttributes, Ref } from 'react';
import styled, { css, CSSProp } from 'styled-components';

import { BUTTON_TYPE } from '../../../constants';
import { ButtonType } from '../../../types/card';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  buttonType?: ButtonType;
  width?: string;
}

interface InputStyleProps {
  buttonStyle: CSSProp;
}

export function Input(
  { buttonType = BUTTON_TYPE.BASIC, width, ...rest }: InputProps,
  ref?: Ref<HTMLInputElement>,
) {
  const buttonStyle = INPUT_STYLE[buttonType];

  return <InputStyle buttonStyle={buttonStyle} width={width} ref={ref} {...rest} />;
}

export default forwardRef<HTMLInputElement, InputProps>(Input);

const InputStyle = styled.input<InputStyleProps>`
  ${(p) => p.buttonStyle};
`;

const INPUT_STYLE = {
  [BUTTON_TYPE.BASIC]: css`
    background-color: #ecebf1;
    height: 45px;
    width: 100%;
    text-align: center;
    outline: 2px solid transparent;
    outline-offset: 2px;
    border: none #9ca3af;
    border-radius: 0.25rem;
  `,

  [BUTTON_TYPE.UNDERLINE]: css`
    text-align: center;
    border: none;
    background: none;
    outline: none;

    margin: 16px 0;
    padding: 4px 0;

    border-bottom: 1px solid #383838;
  `,
};
