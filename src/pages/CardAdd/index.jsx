import React from "react";
import PropTypes from "prop-types";

import TextButton from "../../components/TextButton";

const CardAdd = ({ process, setProcess }) => {
	return (
		<div className="app">
			<h2>카드 추가 페이지</h2>
			<TextButton process={process} setProcess={setProcess} content="다음" />
		</div>
	);
};

CardAdd.propTypes = {
	process: PropTypes.string.isRequired,
	setProcess: PropTypes.func.isRequired,
};

export default CardAdd;
