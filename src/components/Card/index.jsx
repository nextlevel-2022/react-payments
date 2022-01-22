import React from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import palette from "../../styles/global/palette";
import {
	FIRST,
	FOURTH,
	MONTH,
	SECOND,
	THIRD,
	YEAR,
} from "../../config/constant";

const Card = props => {
	const {
		cardName,
		cardNumber,
		cardOwner,
		cardExpirationDate,
		size,
		backgroundColor,
	} = props;

	const changeToSecureCode = numbers => {
		return "*".repeat(numbers.length);
	};

	return (
		<S.Card size={size} backgroundColor={backgroundColor}>
			<S.CardName>{cardName && `${cardName} 카드`}</S.CardName>
			<S.Chip />
			<S.CardNumber>
				{`${cardNumber[FIRST]}  ${cardNumber[SECOND]} 
				 ${changeToSecureCode(cardNumber[THIRD])}  
			   ${changeToSecureCode(cardNumber[FOURTH])}`}
			</S.CardNumber>
			<S.CardOwner>{cardOwner || "NAME"}</S.CardOwner>
			<S.CardExpirationDate>
				{`${cardExpirationDate[MONTH] || "MM"}/${
					cardExpirationDate[YEAR] || "YY"
				}`}
			</S.CardExpirationDate>
		</S.Card>
	);
};

Card.propTypes = {
	cardName: PropTypes.string.isRequired,
	cardNumber: PropTypes.objectOf(PropTypes.string),
	cardOwner: PropTypes.string.isRequired,
	cardExpirationDate: PropTypes.objectOf(PropTypes.string),
	size: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string,
};

Card.defaultProps = {
	backgroundColor: palette.DEFAULT,
};

export default Card;
