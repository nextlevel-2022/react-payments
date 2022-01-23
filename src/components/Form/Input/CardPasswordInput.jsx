import React, { useState } from 'react';
import { CARD_INPUT_LENGTH, ERROR_MESSAGE } from '../../../constants/Data';
import { ONLY_NUMBERS_CHECK, TEXT_GAP_CHECK } from '../../../constants/Validator';

const CardPasswordInput = props => {

	const [errorMessage, setErrorMessage] = useState({
		card_1: false,
		card_2: false,
		card_3: false,
		card_4: false
	});

	const cardPasswordCheck = e => {
		TEXT_GAP_CHECK(e);
		ONLY_NUMBERS_CHECK(e);
	}

	return (
		<div className="input-container">
			<span className="input-title">카드 비밀번호</span>
			<input 
				ref={(el)=>props.inputRef.current[8]=el}
				className="input-basic w-15 mr-8" 
				type="text" 
				minLength={CARD_INPUT_LENGTH.PASSWORD}
				maxLength={CARD_INPUT_LENGTH.PASSWORD}
				onChange={e=> {
					const value = e.target.value;
					const errorType = value.length < CARD_INPUT_LENGTH.PASSWORD || value === '';
					cardPasswordCheck(e);

					if (errorType) {
						setErrorMessage({...errorMessage, card_1: true});
					}else {
						setErrorMessage({...errorMessage, card_1: false});
						props.inputRef.current[9].focus();
					}
				}}
			/>
			<input 
				ref={(el)=>props.inputRef.current[9]=el}
				className="input-basic w-15 mr-8" 
				type="text" 
				minLength={CARD_INPUT_LENGTH.PASSWORD}
				maxLength={CARD_INPUT_LENGTH.PASSWORD}
				onChange={e=> {
					const value = e.target.value;
					const errorType = value.length < CARD_INPUT_LENGTH.PASSWORD || value === '';
					cardPasswordCheck(e);

					if (errorType) {
						setErrorMessage({...errorMessage, card_2: true});
					}else {
						setErrorMessage({...errorMessage, card_2: false});
						props.inputRef.current[10].focus();
					}
				}}
			/>
			<input 
				ref={(el)=>props.inputRef.current[10]=el}
				className="input-basic w-15 mr-8" 
				type="password" 
				minLength={CARD_INPUT_LENGTH.PASSWORD}
				maxLength={CARD_INPUT_LENGTH.PASSWORD}
				onChange={e=> {
					const value = e.target.value;
					const errorType = value.length < CARD_INPUT_LENGTH.PASSWORD || value === '';
					cardPasswordCheck(e);

					if (errorType) {
						setErrorMessage({...errorMessage, card_3: true});
					}else {
						setErrorMessage({...errorMessage, card_3: false});
						props.inputRef.current[11].focus();
					}
				}}
			/>
			<input 
				ref={(el)=>props.inputRef.current[11]=el}
				className="input-basic w-15 mr-8" 
				type="password" 
				minLength={CARD_INPUT_LENGTH.PASSWORD}
				maxLength={CARD_INPUT_LENGTH.PASSWORD}
				onChange={e=> {
					const value = e.target.value;
					const errorType = value.length < CARD_INPUT_LENGTH.PASSWORD || value === '';
					cardPasswordCheck(e);

					if (errorType) {
						setErrorMessage({...errorMessage, card_4: true});
					}else {
						setErrorMessage({...errorMessage, card_4: false});
					}
				}}
			/>
			{ !errorMessage.card_1 && !errorMessage.card_2 && !errorMessage.card_3 && !errorMessage.card_4 ?
				""
				: <p className="error_message">{ERROR_MESSAGE.PASSWORD}</p> 
			}
		</div>
  );
}

export default CardPasswordInput;