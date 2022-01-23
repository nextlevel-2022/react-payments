import React, { useState } from 'react';
import { CARD_INPUT_LENGTH, ERROR_MESSAGE } from '../../../constants/Data';
import { ONLY_NUMBERS_CHECK, TEXT_GAP_CHECK } from '../../../constants/Validator';
import Tooltip from '../../Tooltip';

const CardCVCInput = props => {
	const [errorMessage, setErrorMessage] = useState(false);

	

	const onChangeCardCVC = (e) => {
		const value = e.target.value;
		TEXT_GAP_CHECK(e);
		ONLY_NUMBERS_CHECK(e);

		if ( value.length < CARD_INPUT_LENGTH.CVC || value === '') {
			setErrorMessage(true);
		} else {
			setErrorMessage(false);
		}
	}

	return (
		<div className="input-container">
			<div className="input-title">
				<span>보안코드(CVC/CVV)</span> 
				<Tooltip tooltipText={"카드 뒷면 3자리"} />
			</div>
			<input 
				ref={(el)=>props.inputRef.current[7]=el}
				className="input-basic w-25" 
				type="password" 
				minLength={CARD_INPUT_LENGTH.CVC}
				maxLength={CARD_INPUT_LENGTH.CVC}
				onChange={e=> {
					const value = e.target.value;
					onChangeCardCVC(e)
					if (value.length >= CARD_INPUT_LENGTH.CVC) { props.inputRef.current[8].focus(); }
				}}
			/>
			{ errorMessage && <p className="error_message">{ERROR_MESSAGE.CVC}</p> }
		</div>
  );
}

export default CardCVCInput;