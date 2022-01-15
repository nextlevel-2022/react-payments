import React from "react";
import PropTypes from "prop-types";
import CardButton from "../../components/CardButton";

const CardList = ({ setPage }) => {
	const onClick = () => {
		setPage("add");
	};

	return (
		<div className="app">
			<h2>카드 목록 페이지</h2>
			<CardButton onClick={onClick} />
		</div>
	);
};

CardList.propTypes = {
	setPage: PropTypes.func.isRequired,
};

export default CardList;
