import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CardButton from "../../components/CardButton";
import { ADD } from "../../config/constant";
import Card from "../../components/Card";

const CardList = ({ setPage, cardInfo }) => {
	const onClick = () => {
		setPage(ADD);
	};

	return (
		<div className="app">
			<h1 className="page-title">보유카드</h1>
			<CardBox>
				<Card cardInfo={cardInfo} />
				<CardButton onClick={onClick} />
			</CardBox>
		</div>
	);
};

const CardBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

CardList.propTypes = {
	setPage: PropTypes.func.isRequired,
	cardInfo: PropTypes.shape({
		cardName: PropTypes.string.isRequired,
		cardNumber: PropTypes.string.isRequired,
		cardOwner: PropTypes.string.isRequired,
		cardExpirationDate: PropTypes.string.isRequired,
	}).isRequired,
};

export default CardList;
