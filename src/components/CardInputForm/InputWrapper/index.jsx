import React from "react";
import PropTypes from "prop-types";

import * as S from "./style";

const InputWrapper = props => {
	const { label, children } = props;
	return (
		<S.InputWrapper>
			<S.Label>{label}</S.Label>
			<S.InputContainer>{children}</S.InputContainer>
		</S.InputWrapper>
	);
};

InputWrapper.propTypes = {
	label: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default InputWrapper;
