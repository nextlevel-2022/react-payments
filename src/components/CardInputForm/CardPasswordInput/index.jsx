import React from "react";

import * as S from "./style";
import InputWrapper from "../InputWrapper";
import SecureDot from "../../../assets/circle-solid.svg";

const CardPasswordInput = props => {
	const { label, cardPassword, onChangeCardPassword } = props;
	return (
		<InputWrapper label={label}>
			<S.LayoutWrapper>
				<S.Input type="password" />
				<S.Input type="password" />
				<S.Dot width="6px" height="8px" />
				<S.Dot width="6px" height="8px" />
			</S.LayoutWrapper>
		</InputWrapper>
	);
};

export default CardPasswordInput;
