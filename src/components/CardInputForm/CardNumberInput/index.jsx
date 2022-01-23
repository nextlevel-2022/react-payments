import React, { useRef } from "react";
import PropTypes from "prop-types";

import { FIRST, FOURTH, SECOND, THIRD } from "../../../config/constant";
import InputWrapper from "../InputWrapper";
import * as S from "./style";
import { useImperativeHandle } from "react";

const CardNumberInput = React.forwardRef((props, cardNumberRef) => {
	const { label, cardNumber, onChangeCardNumber } = props;

	const firstRef = useRef(null);
	const secondRef = useRef(null);
	const fourthRef = useRef(null);
	const refs = [firstRef, secondRef, cardNumberRef, fourthRef];

	const checkNumber = e => {
		const { name: idx, value } = e.target;
		const isLessFourDigits = e.target.value.length < 4;
		const isFourDigits = e.target.value.length === 4;

		if (isNaN(value)) return;
		if (isLessFourDigits) {
			onChangeCardNumber(e);
		}
		if (isFourDigits) {
			onChangeCardNumber(e);
			console.log(e);
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
		<InputWrapper htmlFor="cardNumber-first" label={label}>
			<S.LayoutWrapper>
				<S.Input
					type="number"
					min="0"
					max="9999"
					id="cardNumber-first"
					name={FIRST}
					value={cardNumber[FIRST]}
					onChange={e => checkNumber(e)}
					autoFocus
					ref={firstRef}
					required
				/>
				<S.Divider>-</S.Divider>
				<S.Input
					type="number"
					min="0"
					max="9999"
					id="cardNumber-second"
					name={SECOND}
					value={cardNumber[SECOND]}
					onChange={e => checkNumber(e)}
					ref={secondRef}
					required
				/>
				<S.Divider>-</S.Divider>
				<S.Input
					type="password"
					min="0"
					max="9999"
					id="cardNumber-third"
					name={THIRD}
					value={cardNumber[THIRD]}
					onChange={e => checkNumber(e)}
					ref={cardNumberRef}
					required
				/>
				<S.Divider>-</S.Divider>
				<S.Input
					type="password"
					min="0"
					max="9999"
					id="cardNumber-fourth"
					name={FOURTH}
					value={cardNumber[FOURTH]}
					onChange={e => checkNumber(e)}
					ref={fourthRef}
					required
				/>
			</S.LayoutWrapper>
		</InputWrapper>
	);
});

CardNumberInput.propTypes = {
	label: PropTypes.string.isRequired,
	cardNumber: PropTypes.objectOf(PropTypes.string).isRequired,
	onChangeCardNumber: PropTypes.func.isRequired,
};

export default CardNumberInput;
