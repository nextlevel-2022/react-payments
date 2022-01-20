import React, { useRef } from "react";
import PropTypes from "prop-types";

import { FIRST, FOURTH, SECOND, THIRD } from "../../../config/constant";
import InputWrapper from "../InputWrapper";
import * as S from "./style";

const CardNumberInput = props => {
	const { width, label, cardNumber, onChangeCardNumber } = props;

	const firstRef = useRef(null);
	const secondRef = useRef(null);
	const thirdRef = useRef(null);
	const fourthRef = useRef(null);
	const refs = [firstRef, secondRef, thirdRef, fourthRef];

	const NumberHandler = e => {
		const { name: idx } = e.target;
		const isNumber = parseInt(e.target.value, 10);
		const isLessFourDigits = e.target.value.length < 4;
		const isFourDigits = e.target.value.length === 4;

		if (isNumber) {
			if (isLessFourDigits) {
				onChangeCardNumber(e);
			}
			if (isFourDigits) {
				onChangeCardNumber(e);
				idx <= THIRD ? moveFocus(idx) : removeFocus(idx - 1);
			}
		}
	};

	const moveFocus = idx => {
		refs[idx].current.focus();
	};

	const removeFocus = idx => {
		refs[idx].current.blur();
	};

	return (
		<InputWrapper label={label} width={width}>
			<S.LayoutWrapper>
				<input
					type="number"
					min="0"
					max="9999"
					name={FIRST}
					value={cardNumber[FIRST]}
					onChange={e => NumberHandler(e)}
					ref={firstRef}
				/>
				<S.Divider>-</S.Divider>
				<input
					type="number"
					min="0"
					max="9999"
					name={SECOND}
					value={cardNumber[SECOND]}
					onChange={e => NumberHandler(e)}
					ref={secondRef}
				/>
				<S.Divider>-</S.Divider>
				<input
					type="password"
					min="0"
					max="9999"
					name={THIRD}
					value={cardNumber[THIRD]}
					onChange={e => NumberHandler(e)}
					ref={thirdRef}
				/>
				<S.Divider>-</S.Divider>
				<input
					type="password"
					min="0"
					max="9999"
					name={FOURTH}
					value={cardNumber[FOURTH]}
					onChange={e => NumberHandler(e)}
					ref={fourthRef}
				/>
			</S.LayoutWrapper>
		</InputWrapper>
	);
};

CardNumberInput.propTypes = {
	label: PropTypes.string.isRequired,
	cardNumber: PropTypes.objectOf(PropTypes.string).isRequired,
	onChangeCardNumber: PropTypes.func.isRequired,
};

export default CardNumberInput;
