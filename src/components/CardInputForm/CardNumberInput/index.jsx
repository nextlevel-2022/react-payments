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

	const handler = e => {
		console.log(e.target);
		e.target.value = "10";

		onChangeCardNumber(e);
	};

	return (
		<InputWrapper label={label}>
			<S.LayoutWrapper>
				<input
					type="number"
					min="1000"
					max="9999"
					name={FIRST}
					value={cardNumber[FIRST]}
					onChange={e => handler(e)}
					ref={firstRef}
				/>
				<S.Divider>-</S.Divider>
				<input
					type="number"
					min="1000"
					max="9999"
					name={SECOND}
					value={cardNumber[SECOND]}
					onChange={onChangeCardNumber}
					ref={secondRef}
				/>
				<S.Divider>-</S.Divider>
				<input
					type="number"
					min="1000"
					max="9999"
					name={THIRD}
					value={cardNumber[THIRD]}
					onChange={onChangeCardNumber}
					ref={thirdRef}
				/>
				<S.Divider>-</S.Divider>
				<input
					type="number"
					min="1000"
					max="9999"
					name={FOURTH}
					value={cardNumber[FOURTH]}
					onChange={onChangeCardNumber}
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
