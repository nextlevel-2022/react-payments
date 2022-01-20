import React, { useRef, useState } from 'react';
import { CARD_INPUT_LENGTH } from '../../constants/Data';
import { ONLY_NUMBERS_CHECK, USER_NAME_CHECK, TEXT_GAP_CHECK } from '../../constants/Validator';

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
		</>
  );
}

export default CardRegistrationForm;