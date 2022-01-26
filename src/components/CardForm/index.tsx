import React from 'react';
import CardNumber from './input/cardNumber';
import ExpireDate from './input/expireDate';
import OwnerName from './input/ownerName';
import SecureCode from './input/secureCode';
import CardPassword from './input/cardPassword';

const CardForm = () => {
	return (
		<form>
			<CardNumber />
			<ExpireDate />
			<OwnerName />
			<SecureCode />
			<CardPassword />
			<div className="button-box">
				<span className="button-text">다음</span>
			</div>
		</form>
	);
};

export default CardForm;
