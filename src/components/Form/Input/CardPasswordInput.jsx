import React from 'react';
import { CARD_INPUT_LENGTH } from '../../../constants/Data';
import { ONLY_NUMBERS_CHECK, TEXT_GAP_CHECK } from '../../../constants/Validator';

const CardPasswordInput = props => {
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
					cardPasswordCheck(e);
					if (value.length >= CARD_INPUT_LENGTH.PASSWORD) { props.inputRef.current[9].focus(); }
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
					cardPasswordCheck(e);
					if (value.length >= CARD_INPUT_LENGTH.PASSWORD) { props.inputRef.current[10].focus(); }
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
					cardPasswordCheck(e);
					if (value.length >= CARD_INPUT_LENGTH.PASSWORD) { props.inputRef.current[11].focus(); }
				}}
			/>
			<input 
				ref={(el)=>props.inputRef.current[11]=el}
				className="input-basic w-15 mr-8" 
				type="password" 
				minLength={CARD_INPUT_LENGTH.PASSWORD}
				maxLength={CARD_INPUT_LENGTH.PASSWORD}
				onChange={e=> {
					cardPasswordCheck(e);
				}}
			/>
		</div>
  );
}

export default CardPasswordInput;