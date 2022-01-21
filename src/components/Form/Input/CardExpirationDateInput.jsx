import React, { useState } from 'react';
import { CARD_INPUT_LENGTH, ERROR_MESSAGE } from '../../../constants/Data';
import { ONLY_NUMBERS_CHECK, TEXT_GAP_CHECK } from '../../../constants/Validator';


const CardExpirationDateInput = props => {
	const date = new Date();
	let year = date.getFullYear();
		year = Number(String(year).slice(-2));		// 현재년도 끝 2자리
	let expirationYear = year+5;					// 최대 유효기간 5년
	
	const [errorMessage, setErrorMessage] = useState(false);

	const onChangeExpirationDateMM = e => {
		const value = e.target.value;
		if (value > 12 || value < 1) {
			e.target.value = value.substring(0, value.length - 1);
			return;
		}

		TEXT_GAP_CHECK(e);
		ONLY_NUMBERS_CHECK(e);
		props.setData({ ...props.data, EXPIRATION_DATE_MM: value });
		if (value.length >= CARD_INPUT_LENGTH.EXPIRATION_DATE) { props.inputRef.current[5].focus(); }
	}

	const onChangeExpirationDateYY = e => {
		const value = e.target.value;
		TEXT_GAP_CHECK(e);
		ONLY_NUMBERS_CHECK(e);
		props.setData({ ...props.data, EXPIRATION_DATE_YY: value });

		if (value > expirationYear || Number(value) < year || value === '') {
			setErrorMessage(true);
		} else {
			setErrorMessage(false);
			if (value.length >= CARD_INPUT_LENGTH.EXPIRATION_DATE) { props.inputRef.current[6].focus(); }
		}
	}

	return (
		<div className="input-container">
			<span className="input-title">만료일</span>
			<div className="input-box w-50">
				<input 
					ref={(el)=>props.inputRef.current[4]=el}
					className="input-basic" 
					type="text" 
					placeholder="MM" 
					minLength={1}
					maxLength={CARD_INPUT_LENGTH.EXPIRATION_DATE}
					onChange={e=> {
						onChangeExpirationDateMM(e);
					}}
					/>
				<input 
					ref={(el)=>props.inputRef.current[5]=el}
					className="input-basic" 
					type="text" 
					placeholder="YY" 
					minLength={1}
					maxLength={CARD_INPUT_LENGTH.EXPIRATION_DATE}
					onChange={e=> {
						onChangeExpirationDateYY(e);
					}}
				/>
			</div>

			{ errorMessage && <p className="error_message">{ERROR_MESSAGE.EXPIRATION_DATE}</p> }
		</div>
  );
}

export default CardExpirationDateInput;