import React from "react";
import PropTypes from "prop-types";

import TextButton from "../../components/TextButton";

const CardAdd = ({ setPage }) => {
	const onClick = () => {
		setPage("done");
	};

	return (
		<div className="app">
			<h2>카드 추가 페이지</h2>
			<TextButton content="다음" onClick={onClick} />
		</div>
	);
};

CardAdd.propTypes = {
	setPage: PropTypes.func.isRequired,
};

export default CardAdd;
