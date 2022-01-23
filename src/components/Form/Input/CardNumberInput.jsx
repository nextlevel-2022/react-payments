import React, { useState } from 'react';
import { CARD_INPUT_LENGTH, ERROR_MESSAGE } from '../../../constants/Data';
import { ONLY_NUMBERS_CHECK } from '../../../constants/Validator';

const CardNumberInput = props => {
	const [errorMessage, setErrorMessage] = useState(false);

	const onChangeCardNumber = e => {
		const value = e.target.value;
		ONLY_NUMBERS_CHECK(e);

		if ( value.length < CARD_INPUT_LENGTH.CARD_NUMBERS || value === '') {
			setErrorMessage(true);
		} else {
			setErrorMessage(false);
		}
	}

	return (
		<div className="input-container">
			<span className="input-title">카드 번호</span>
			<div className="input-box">
				<input 
					ref={(el)=>props.inputRef.current[0]=el}
					className={`input-basic`} 
					type="text" 
					placeholder='0000' 
					minLength={CARD_INPUT_LENGTH.CARD_NUMBERS}
					maxLength={CARD_INPUT_LENGTH.CARD_NUMBERS}
					onChange={e=> {
						const value = e.target.value;
						onChangeCardNumber(e);
						props.setData({ ...props.data, CARD_NUMBER_1: value, CREDIT_CARD_COMPANY: Number(value.charAt(0)) });
						if (value.length >= CARD_INPUT_LENGTH.CARD_NUMBERS) { props.inputRef.current[1].focus(); }
					}}
				/>
				<input 
					ref={(el)=>props.inputRef.current[1]=el}
					className="input-basic" 
					type="text" 
					placeholder='0000' 
					minLength={CARD_INPUT_LENGTH.CARD_NUMBERS}
					maxLength={CARD_INPUT_LENGTH.CARD_NUMBERS}
					onChange={e=> {
						const value = e.target.value;
						onChangeCardNumber(e);
						props.setData({ ...props.data, CARD_NUMBER_2: value });
						if (value.length >= CARD_INPUT_LENGTH.CARD_NUMBERS) { props.inputRef.current[2].focus(); }
					}}
				/>
				<input 
					ref={(el)=>props.inputRef.current[2]=el}
					className="input-basic" 
					type="password" 
					placeholder='●●●●' 
					minLength={CARD_INPUT_LENGTH.CARD_NUMBERS}
					maxLength={CARD_INPUT_LENGTH.CARD_NUMBERS}
					onChange={e=> {
						const value = e.target.value;
						onChangeCardNumber(e);
						props.setData({ ...props.data, CARD_NUMBER_3: value });
						if (value.length >= CARD_INPUT_LENGTH.CARD_NUMBERS) { props.inputRef.current[3].focus(); }
					}}
				/>
				<input 
					ref={(el)=>props.inputRef.current[3]=el}
					className="input-basic" 
					type="password" 
					placeholder='●●●●' 
					minLength={CARD_INPUT_LENGTH.CARD_NUMBERS}
					maxLength={CARD_INPUT_LENGTH.CARD_NUMBERS}
					onChange={e=> {
						const value = e.target.value;
						onChangeCardNumber(e);
						props.setData({ ...props.data, CARD_NUMBER_4: value });
						if (value.length >= CARD_INPUT_LENGTH.CARD_NUMBERS) { props.inputRef.current[4].focus(); }
					}}
				/>
			</div>
			{ errorMessage && <p className="error_message">{ERROR_MESSAGE.CARD_NUMBERS}</p> }
		</div>
  );
}

export default CardNumberInput;