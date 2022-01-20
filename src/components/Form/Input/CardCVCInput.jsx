import React from 'react';
import { CARD_INPUT_LENGTH } from '../../../constants/Data';
import { ONLY_NUMBERS_CHECK, TEXT_GAP_CHECK } from '../../../constants/Validator';

const CardCVCInput = props => {
	return (
		<div className="input-container">
			<span className="input-title">보안코드(CVC/CVV)</span>
			<input 
				ref={(el)=>props.inputRef.current[7]=el}
				className="input-basic w-25" 
				type="password" 
				minLength={CARD_INPUT_LENGTH.CVC}
				maxLength={CARD_INPUT_LENGTH.CVC}
				onChange={e=> {
					const value = e.target.value;
					TEXT_GAP_CHECK(e);
					ONLY_NUMBERS_CHECK(e);
					if (value.length >= CARD_INPUT_LENGTH.CVC) { props.inputRef.current[8].focus(); }
				}}
			/>
		</div>
  );
}

export default CardCVCInput;