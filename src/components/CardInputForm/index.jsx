import React from "react";
import PropTypes from "prop-types";

import CardNumberInput from "./CardNumberInput";

const CardInputForm = props => {
	const {
		cardName,
		cardNumber,
		cardOwner,
		cardExpirationDate,
		cardSecureCode,
		cardPassword,
		onChangeCardName,
		onChangeCardNumber,
		onChangeCardOwner,
		onChangeCardExpirationDate,
		onChangeCardSecureCode,
		onChangeCardPassword,
	} = props;

	return (
		<div>
			<form>
				<CardNumberInput
					label="카드 번호"
					cardNumber={cardNumber}
					onChangeCardNumber={onChangeCardNumber}
				/>
				{/* <label>
					만료일
					<input type="text" name="cardExpirationDate"></input>
				</label>
				<label>
					카드 소유자 이름(선택)
					<input
						type="text"
						name="cardOwner"
						value={cardOwner}
						onChange={onChangeCardOwner}
					></input>
				</label>
				<label>
					보안코드(CVC/CVV)
					<input type="text" name="cardSecureCode"></input>
				</label>
				<label>
					카드 비밀번호
					<input type="password" name="cardPassword"></input>
				</label> */}
			</form>
		</div>
	);
};

CardInputForm.propTypes = {
	cardName: PropTypes.string.isRequired,
	cardNumber: PropTypes.objectOf(PropTypes.string),
	cardOwner: PropTypes.string.isRequired,
	cardExpirationDate: PropTypes.objectOf(PropTypes.string),
	onChangeCardName: PropTypes.func.isRequired,
	onChangeCardNumber: PropTypes.func.isRequired,
	onChangeCardOwner: PropTypes.func.isRequired,
	onChangeCardExpirationDate: PropTypes.func.isRequired,
};

export default CardInputForm;
