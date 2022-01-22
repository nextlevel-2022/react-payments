import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import InputWrapper from "../InputWrapper";
import { MONTH, YEAR } from "../../../config/constant";
import * as S from "./style";

const CardExpirationDateInput = props => {
	const { label, cardExpirationDate, onChangeCardExpirationDate, startFocus } =
		props;

	const monthRef = useRef(null);
	const yearRef = useRef(null);

	const checkDateInput = e => {
		const { name, value, min, max } = e.target;
		const isLessTwoDigits = value.length < 2;
		const isVaildMonth = value >= min && value <= max;
		const isVaildYear = value >= min && value <= max;

		if (name === MONTH) {
			if (isLessTwoDigits) {
				onChangeCardExpirationDate(e);
			} else if (isVaildMonth) {
				onChangeCardExpirationDate(e);
			}
		}

		if (name === YEAR) {
			if (isLessTwoDigits) {
				onChangeCardExpirationDate(e);
			} else if (isVaildYear) {
				onChangeCardExpirationDate(e);
			}
		}
	};

	return (
		<InputWrapper label={label}>
			<S.LayoutWrapper>
				<S.Input
					type="number"
					placeholder="MM"
					name={MONTH}
					min={1}
					max={12}
					value={cardExpirationDate[MONTH]}
					onChange={e => checkDateInput(e)}
					ref={monthRef}
				/>
				<S.Divider>/</S.Divider>
				<S.Input
					type="number"
					placeholder="YY"
					name={YEAR}
					min={1}
					max={31}
					value={cardExpirationDate[YEAR]}
					onChange={e => checkDateInput(e)}
					ref={yearRef}
				/>
			</S.LayoutWrapper>
		</InputWrapper>
	);
};

CardExpirationDateInput.propTypes = {
	label: PropTypes.string.isRequired,
	cardExpirationDate: PropTypes.objectOf(PropTypes.string).isRequired,
	onChangeCardExpirationDate: PropTypes.func.isRequired,
	startFocus: PropTypes.bool.isRequired,
};

export default CardExpirationDateInput;
