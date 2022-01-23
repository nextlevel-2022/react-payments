import React, { useRef } from "react";
import PropTypes from "prop-types";

import InputWrapper from "../InputWrapper";
import { MONTH, YEAR } from "../../../config/constant";
import * as S from "./style";

const CardExpirationDateInput = React.forwardRef((props, ref) => {
	const { label, cardExpirationDate, onChangeCardExpirationDate } = props;
	const { cardExpirationDateRef, cardOwnerRef } = ref;

	const yearRef = useRef(null);

	const checkDateInput = e => {
		const { name, value, min, max } = e.target;
		const isLessTwoDigits = value.length < 2;
		const isTwoDigits = value.length === 2;
		const isVaildMonth = value >= min && value <= max;
		const isVaildYear = value >= min && value <= max;

		if (name === MONTH) {
			if (isLessTwoDigits) {
				onChangeCardExpirationDate(e);
			} else if (isVaildMonth && isTwoDigits) {
				onChangeCardExpirationDate(e);
				yearRef.current.focus();
			}
		}

		if (name === YEAR) {
			if (isLessTwoDigits) {
				onChangeCardExpirationDate(e);
			} else if (isVaildYear && isTwoDigits) {
				onChangeCardExpirationDate(e);
				cardOwnerRef.current.focus();
			}
		}
	};

	return (
		<InputWrapper htmlFor="cardExpirationDate-month" label={label}>
			<S.LayoutWrapper>
				<S.Input
					type="number"
					placeholder="MM"
					id="cardExpirationDate-month"
					name={MONTH}
					min={1}
					max={12}
					value={cardExpirationDate[MONTH]}
					onChange={e => checkDateInput(e)}
					ref={cardExpirationDateRef}
				/>
				<S.Divider>/</S.Divider>
				<S.Input
					type="number"
					placeholder="YY"
					id="cardExpirationDate-year"
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
});

CardExpirationDateInput.propTypes = {
	label: PropTypes.string.isRequired,
	cardExpirationDate: PropTypes.objectOf(PropTypes.string).isRequired,
	onChangeCardExpirationDate: PropTypes.func.isRequired,
};

export default CardExpirationDateInput;
