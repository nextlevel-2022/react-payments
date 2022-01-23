import React from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import CardNumberInput from "./CardNumberInput";
import CardExpirationDateInput from "./CardExpirationDateInput";
import { FOURTH } from "../../config/constant";
import CardOwnerInput from "./CardOwnerInput";
import CardSecureCodeInput from "./CardSecureCodeInput";
import CardPasswordInput from "./CardPasswordInput";

const CardInputForm = React.forwardRef((props, ref) => {
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

	const {
		cardNumberRef,
		cardExpirationDateRef,
		cardSecureCodeRef,
		cardPasswordRef,
	} = ref;

	const onSubmit = e => {
		e.preventDeafult();
		console.log("submited!");
	};

	return (
		<div>
			<S.Form onSubmit={onSubmit}>
				<CardNumberInput
					label="카드 번호"
					cardNumber={cardNumber}
					onChangeCardNumber={onChangeCardNumber}
					ref={cardNumberRef}
				/>
				<CardExpirationDateInput
					label="만료일"
					cardExpirationDate={cardExpirationDate}
					onChangeCardExpirationDate={onChangeCardExpirationDate}
					ref={cardExpirationDateRef}
				/>
				<CardOwnerInput
					label="카드 소유자 이름 (선택)"
					width="318px"
					cardOwner={cardOwner}
					onChangeCardOwner={onChangeCardOwner}
				/>
				<CardSecureCodeInput
					label="보안 코드(CCV/CVV)"
					cardSecureCode={cardSecureCode}
					onChangeCardSecureCode={onChangeCardSecureCode}
				/>
				<CardPasswordInput
					label="카드 비밀번호"
					cardPassword={cardPassword}
					onChangeCardPassword={onChangeCardPassword}
				/>
			</S.Form>
		</div>
	);
});

CardInputForm.propTypes = {
	cardNumber: PropTypes.objectOf(PropTypes.string),
	cardOwner: PropTypes.string.isRequired,
	cardExpirationDate: PropTypes.objectOf(PropTypes.string),
	onChangeCardNumber: PropTypes.func.isRequired,
	onChangeCardOwner: PropTypes.func.isRequired,
	onChangeCardExpirationDate: PropTypes.func.isRequired,
};

export default CardInputForm;
