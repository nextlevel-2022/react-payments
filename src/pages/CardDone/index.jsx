import React from "react";
import PropTypes from "prop-types";

import TextButton from "../../components/TextButton";

const CardDone = ({ setPage }) => {
	const onClick = () => {
		setPage("list");
	};

	return (
		<div className="app">
			<h2>카드 추가완료 페이지</h2>
			<TextButton content="확인" onClick={onClick} />
		</div>
	);
};

CardDone.propTypes = {
	setPage: PropTypes.func.isRequired,
};

export default CardDone;
