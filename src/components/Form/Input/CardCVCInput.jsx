import React, { useState } from 'react';
import { CARD_INPUT_LENGTH, ERROR_MESSAGE } from '../../../constants/Data';
import { ONLY_NUMBERS_CHECK, TEXT_GAP_CHECK } from '../../../constants/Validator';

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
				<span class="tooltip">
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-help" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="2c3e50" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
						<circle cx="12" cy="12" r="9" />
						<line x1="12" y1="17" x2="12" y2="17.01" />
						<path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
					</svg>
					<span className="text">카드 뒷면 3자리</span>
				</span>
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