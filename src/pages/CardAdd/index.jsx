import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import TextButton from "../../components/TextButton";
import { DONE, LIST } from "../../config/constant";
import BackButton from "../../components/ BackButton";

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
			<TextButton content="다음" onClick={onNext} />
		</div>
	);
};

const StyledHeader = styled.header`
	display: flex;
	padding: 10px 5px;

	h1 {
		padding-left: 14px;
	}
`;

CardAdd.propTypes = {
	setPage: PropTypes.func.isRequired,
};

export default CardAdd;
