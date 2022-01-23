import React, { useState } from 'react';

import CardNumberInput from './Input/CardNumberInput';
import CardExpirationDateInput from './Input/CardExpirationDateInput';
import CardUserNameInput from './Input/CardUserNameInput';
import CardCVCInput from './Input/CardCVCInput';
import CardPasswordInput from './Input/CardPasswordInput';
import Modal from '../Modal';

const CardRegistrationForm = props => {
	const [modalShow, setModalShow] = useState(true);

	const addCard = (e) => {
		props.setDataList([...props.dataList, props.data]);
		props.router();
	}
	
	return (
		<>
			<CardNumberInput setData={props.setData} data={props.data} inputRef={props.inputRef} />
			<CardExpirationDateInput setData={props.setData} data={props.data} inputRef={props.inputRef} />
			<CardUserNameInput setData={props.setData} data={props.data} inputRef={props.inputRef} />
			<CardCVCInput setData={props.setData} data={props.data} inputRef={props.inputRef} />
			<CardPasswordInput setData={props.setData} data={props.data} inputRef={props.inputRef} />
			<div className="button-box">
				<span className="button-text" onClick={addCard}>다음</span>
			</div>

			{modalShow && <Modal setData={props.setData} data={props.data} setModalShow={setModalShow} />}
		</>
  );
}

export default CardRegistrationForm;