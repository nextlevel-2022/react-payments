import React from 'react';

import CardNumberInput from './Input/CardNumberInput';
import CardExpirationDateInput from './Input/CardExpirationDateInput';
import CardUserNameInput from './Input/CardUserNameInput';
import CardCVCInput from './Input/CardCVCInput';
import CardPasswordInput from './Input/CardPasswordInput';

const CardRegistrationForm = props => {
	return (
		<>
			<CardNumberInput setData={props.setData} data={props.data} inputRef={props.inputRef} />
			<CardExpirationDateInput setData={props.setData} data={props.data} inputRef={props.inputRef} />
			<CardUserNameInput setData={props.setData} data={props.data} inputRef={props.inputRef} />
			<CardCVCInput setData={props.setData} data={props.data} inputRef={props.inputRef} />
			<CardPasswordInput setData={props.setData} data={props.data} inputRef={props.inputRef} />
			<div className="button-box">
				<span className="button-text" onClick={props.router}>다음</span>
			</div>
		</>
  );
}

export default CardRegistrationForm;