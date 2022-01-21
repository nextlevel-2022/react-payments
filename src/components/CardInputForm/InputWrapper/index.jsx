import React from "react";
import PropTypes from "prop-types";

import * as S from "./style";

const InputWrapper = props => {
	const { width, label, children, useToCount, dataToCount, limitToCount } =
		props;

	return (
		<S.InputWrapper>
			<S.LabelContainer>
				<S.Label>{label}</S.Label>
				{useToCount && (
					<S.Counter>{`${dataToCount.length}/${limitToCount}`}</S.Counter>
				)}
			</S.LabelContainer>
			<S.InputContainer width={width}>{children}</S.InputContainer>
		</S.InputWrapper>
	);
};

InputWrapper.propTypes = {
	width: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	useToCount: PropTypes.bool,
	dataToCount: PropTypes.string,
};

export default InputWrapper;
