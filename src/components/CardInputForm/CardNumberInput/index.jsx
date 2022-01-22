import React, { useRef } from "react";
import PropTypes from "prop-types";

import { FIRST, FOURTH, SECOND, THIRD } from "../../../config/constant";
import InputWrapper from "../InputWrapper";
import * as S from "./style";

const CardNumberInput = props => {
	const { label, cardNumber, onChangeCardNumber } = props;

	const firstRef = useRef(null);
	const secondRef = useRef(null);
	const thirdRef = useRef(null);
	const fourthRef = useRef(null);
	const refs = [firstRef, secondRef, thirdRef, fourthRef];

	// ToDo: input의 type="password"일 때 숫자 유효성 검사
	const NumberHandler = e => {
		const { name: idx } = e.target;
		const isLessFourDigits = e.target.value.length < 4;
		const isFourDigits = e.target.value.length === 4;

		if (isLessFourDigits) {
			onChangeCardNumber(e);
		}
		if (isFourDigits) {
			onChangeCardNumber(e);
			controlFocue(idx);
		}
	};

	const controlFocue = idx => {
		const moveFocus = idx => {
			refs[idx].current.focus();
		};

		const removeFocus = idx => {
			refs[idx].current.blur();
		};

		idx <= THIRD ? moveFocus(idx) : removeFocus(idx - 1);
	};

	return (
		<InputWrapper label={label}>
			<S.LayoutWrapper>
				<S.Input
					type="number"
					min="0"
					max="9999"
					name={FIRST}
					value={cardNumber[FIRST]}
					onChange={e => NumberHandler(e)}
					ref={firstRef}
				/>
				<S.Divider>-</S.Divider>
				<S.Input
					type="number"
					min="0"
					max="9999"
					name={SECOND}
					value={cardNumber[SECOND]}
					onChange={e => NumberHandler(e)}
					ref={secondRef}
				/>
				<S.Divider>-</S.Divider>
				<S.Input
					type="password"
					min="0"
					max="9999"
					name={THIRD}
					value={cardNumber[THIRD]}
					onChange={e => NumberHandler(e)}
					ref={thirdRef}
				/>
				<S.Divider>-</S.Divider>
				<S.Input
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
