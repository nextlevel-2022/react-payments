import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import InputWrapper from "../InputWrapper";
import { MONTH, YEAR } from "../../../config/constant";
import * as S from "./style";

const CardExpirationDateInput = props => {
	const {
		width,
		label,
		cardExpirationDate,
		onChangeCardExpirationDate,
		startFocus,
	} = props;

	const monthRef = useRef(null);
	const yearRef = useRef(null);

	useEffect(() => {
		if (startFocus) {
			monthRef.current.focus();
		}
	}, [startFocus]);

	if (cardExpirationDate[MONTH].length === 2) {
		yearRef.current.focus();
	}

	return (
		<InputWrapper label={label} width={width}>
			<S.LayoutWrapper>
				<input
					type="number"
					placeholder="MM"
					name={MONTH}
					value={cardExpirationDate[MONTH]}
					onChange={onChangeCardExpirationDate}
					ref={monthRef}
				/>
				<S.Divider>/</S.Divider>
				<input
					type="number"
					placeholder="YY"
					name={YEAR}
					value={cardExpirationDate[YEAR]}
					onChange={onChangeCardExpirationDate}
					ref={yearRef}
				/>
			</S.LayoutWrapper>
		</InputWrapper>
	);
};

CardExpirationDateInput.propTypes = {
	width: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	cardExpirationDate: PropTypes.objectOf(PropTypes.string).isRequired,
	onChangeCardExpirationDate: PropTypes.func.isRequired,
	startFocus: PropTypes.bool.isRequired,
};

export default CardExpirationDateInput;
