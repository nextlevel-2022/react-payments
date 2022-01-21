import React from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import QuestionMark from "../../../assets/question-circle-regular.svg";
import InputWrapper from "../InputWrapper";

const CardSecureCodeInput = props => {
	const { label, width, cardSecureCode, onChangeCardSecureCode } = props;

	const onToggle = e => {
		e.preventDefault();
		console.log("clicked");
	};

	return (
		<InputWrapper label={label} width={width}>
			<S.LayoutWrapper>
				<S.Input
					type="password"
					value={cardSecureCode}
					onChange={onChangeCardSecureCode}
				/>
				<S.Button>
					<QuestionMark width="25px" height="25px" fill="#969696" />
				</S.Button>
			</S.LayoutWrapper>
		</InputWrapper>
	);
};

CardSecureCodeInput.propTypes = {
	label: PropTypes.string.isRequired,
	width: PropTypes.string.isRequired,
	cardSecureCode: PropTypes.string.isRequired,
	onChangeCardSecureCode: PropTypes.func.isRequired,
};

export default CardSecureCodeInput;
