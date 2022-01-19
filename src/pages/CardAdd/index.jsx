import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import TextButton from "../../components/TextButton";
import { DONE, LIST } from "../../config/constant";
import BackButton from "../../components/ BackButton";
import Card from "../../components/Card";
import CardInputForm from "../../components/CardInputForm";

const CardAdd = props => {
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
		setPage,
	} = props;

	const onBack = () => {
		setPage(LIST);
	};

	const onNext = () => {
		setPage(DONE);
	};

	return (
		<div className="app">
			<StyledHeader>
				<BackButton onClick={onBack} />
				<h1>카드 추가</h1>
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
			<CardInputForm
				cardName={cardName}
				onChangeCardName={onChangeCardName}
				cardNumber={cardNumber}
				onChangeCardNumber={onChangeCardNumber}
				cardOwner={cardOwner}
				onChangeCardOwner={onChangeCardOwner}
				cardExpirationDate={cardExpirationDate}
				onChangeCardExpirationDate={onChangeCardExpirationDate}
				cardSecureCode={cardSecureCode}
				onChangeCardSecureCode={onChangeCardSecureCode}
				cardPassword={cardPassword}
				onChangeCardPassword={onChangeCardPassword}
			/>
			<TextButton content="다음" onClick={onNext} />
		</div>
	);
};

const StyledHeader = styled.header`
	display: flex;
	padding: 10px 5px;

	h1 {
		padding-left: 15px;
	}
`;

const CardBox = styled.div`
	display: felx;
	justify-content: center;
	align-items: center;
	margin: 20px 0;
`;

CardAdd.propTypes = {
	cardName: PropTypes.string.isRequired,
	cardNumber: PropTypes.objectOf(PropTypes.string),
	cardOwner: PropTypes.string.isRequired,
	cardExpirationDate: PropTypes.objectOf(PropTypes.string),
	onChangeCardName: PropTypes.func.isRequired,
	onChangeCardNumber: PropTypes.func.isRequired,
	onChangeCardOwner: PropTypes.func.isRequired,
	onChangeCardExpirationDate: PropTypes.func.isRequired,
	setPage: PropTypes.func.isRequired,
};

export default CardAdd;
