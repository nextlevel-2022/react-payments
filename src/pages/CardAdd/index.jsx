import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import TextButton from "../../components/TextButton";
import { DONE, LIST } from "../../config/constant";
import BackButton from "../../components/ BackButton";
// import Card from "../../components/Card";

const CardAdd = ({ setPage }) => {
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
				<h1 className="page-title">카드 추가</h1>
			</StyledHeader>
			<CardBox>{/* <Card /> */}</CardBox>
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
	margin: 10px 0;
`;

CardAdd.propTypes = {
	setPage: PropTypes.func.isRequired,
};

export default CardAdd;
