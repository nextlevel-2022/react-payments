import React from "react";
import PropTypes from "prop-types";

import TextButton from "../../components/TextButton";

const CardList = ({ process, setProcess }) => {
	return (
		<div className="app">
			<h2>카드 목록 페이지</h2>
			<TextButton process={process} setProcess={setProcess} />
		</div>
	);
};

CardList.propTypes = {
	process: PropTypes.string.isRequired,
	setProcess: PropTypes.func.isRequired,
};

export default CardList;
