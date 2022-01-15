import React from "react";
import PropTypes from "prop-types";

import TextButton from "../../components/TextButton";

const CardAdd = ({ setPage }) => {
	const onClick = () => {
		setPage("done");
	};

	return (
		<div className="app">
			<h1 className="page-title">카드 추가</h1>
			<TextButton content="다음" onClick={onClick} />
		</div>
	);
};

CardAdd.propTypes = {
	setPage: PropTypes.func.isRequired,
};

export default CardAdd;
