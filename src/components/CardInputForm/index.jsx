import React from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import CardNumberInput from "./CardNumberInput";
import CardExpirationDateInput from "./CardExpirationDateInput";
import { FOURTH } from "../../config/constant";
import CardOwnerInput from "./CardOwnerInput";
import CardSecureCodeInput from "./ CardSecureCodeInput";

const CardInputForm = props => {
	const {
		cardNumber,
		cardOwner,
		cardExpirationDate,
		cardSecureCode,
		cardPassword,
		onChangeCardNumber,
		onChangeCardOwner,
		onChangeCardExpirationDate,
		onChangeCardSecureCode,
		onChangeCardPassword,
	} = props;

	return (
		<div>
			<S.Form>
				<CardNumberInput
					label="카드 번호"
					width="318px"
					cardNumber={cardNumber}
					onChangeCardNumber={onChangeCardNumber}
				/>
				<CardExpirationDateInput
					label="만료일"
					width="138px"
					startFocus={cardNumber[FOURTH].length === 4}
					cardExpirationDate={cardExpirationDate}
					onChangeCardExpirationDate={onChangeCardExpirationDate}
				/>
				<CardOwnerInput
					label="카드 소유자 이름 (선택)"
					width="318px"
					cardOwner={cardOwner}
					onChangeCardOwner={onChangeCardOwner}
				/>
				<CardSecureCodeInput
					label="보안 코드(CCV/CVV)"
					width="84px"
					cardSecureCode={cardSecureCode}
					onChangeCardSecureCode={onChangeCardSecureCode}
				/>
				{/* 
					카드 비밀번호
					<input type="password" name="cardPassword"></input>
				</label> */}
			</S.Form>
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
