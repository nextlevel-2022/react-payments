import React from "react";
import PropTypes from "prop-types";
import * as S from "./style";
import palette from "../../styles/global/palette";

const Card = ({ cardInfo, size, backgroundColor }) => {
	const { cardName, cardNumber, cardOwner, cardExpirationDate } = cardInfo;

	return (
		<S.Card size={size} backgroundColor={backgroundColor}>
			<S.CardName>{cardName}</S.CardName>
			<S.Chip />
			<S.CardNumber>{cardNumber}</S.CardNumber>
			<S.CardOwner>{cardOwner}</S.CardOwner>
			<S.CardExpirationDate>{cardExpirationDate}</S.CardExpirationDate>
		</S.Card>
	);
};

Card.propTypes = {
	cardInfo: PropTypes.shape({
		cardName: PropTypes.string.isRequired,
		cardNumber: PropTypes.string.isRequired,
		cardOwner: PropTypes.string.isRequired,
		cardExpirationDate: PropTypes.string.isRequired,
	}),
	size: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string,
};

Card.defaultProps = {
	backgroundColor: palette.DEFAULT,
};

export default Card;
