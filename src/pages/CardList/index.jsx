import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CardButton from "../../components/CardButton";
import { ADD } from "../../config/constant";
import Card from "../../components/Card";

const CardList = props => {
	const { cardName, cardNumber, cardOwner, cardExpirationDate, setPage } =
		props;

	const onClick = () => {
		setPage(ADD);
	};

	return (
		<div className="app">
			<StyledHeader>
				<h1 className="page-title">보유카드</h1>
			</StyledHeader>
			<CardBox>
				<Card
					size="small"
					cardName={cardName}
					cardNumber={cardNumber}
					cardOwner={cardOwner}
					cardExpirationDate={cardExpirationDate}
				/>
			</CardBox>
			<CardBox>
				<CardButton onClick={onClick} />
			</CardBox>
		</div>
	);
};

const StyledHeader = styled.header`
	display: flex;
	padding: 10px 5px;
	font-size: 16px;

	h1 {
		padding-left: 15px;
	}
`;

const CardBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 60px;
`;

CardList.propTypes = {
	setPage: PropTypes.func.isRequired,
	cardName: PropTypes.string.isRequired,
	cardNumber: PropTypes.objectOf(PropTypes.string),
	cardOwner: PropTypes.string.isRequired,
	cardExpirationDate: PropTypes.objectOf(PropTypes.string),
};

export default CardList;
