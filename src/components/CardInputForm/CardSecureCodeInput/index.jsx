import React, { useState } from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import QuestionMark from "../../../assets/question-circle-regular.svg";
import InputWrapper from "../InputWrapper";
import ToolTip from "../../ToolTip";

const CardSecureCodeInput = props => {
	const { label, cardSecureCode, onChangeCardSecureCode } = props;
	const [isToolTipOn, setIsToolTipOn] = useState(false);

	const onChangeToolTip = () => {
		setIsToolTipOn(!isToolTipOn);
	};

	const checkNumber = e => {
		const { value } = e.target;
		const isLessThreeDigits = e.target.value.length < 3;
		const isThreeDigits = e.target.value.length === 3;

		if (isNaN(value)) return;
		if (isLessThreeDigits) {
			onChangeCardSecureCode(e);
		} else if (isThreeDigits) {
			onChangeCardSecureCode(e);
		}
	};

	return (
		<InputWrapper htmlFor="cardSecureCode" label={label}>
			<S.LayoutWrapper>
				<S.Input
					type="password"
					id="cardSecureCode"
					maxLength={3}
					value={cardSecureCode}
					onChange={e => checkNumber(e)}
				/>
				<S.SVGWrapper
					onMouseEnter={onChangeToolTip}
					onMouseLeave={onChangeToolTip}
				>
					<QuestionMark width="25px" height="25px" fill="#969696" />
					{isToolTipOn && <ToolTip />}
				</S.SVGWrapper>
			</S.LayoutWrapper>
		</InputWrapper>
	);
};

CardSecureCodeInput.propTypes = {
	label: PropTypes.string.isRequired,
	cardSecureCode: PropTypes.string.isRequired,
	onChangeCardSecureCode: PropTypes.func.isRequired,
};

export default CardSecureCodeInput;
