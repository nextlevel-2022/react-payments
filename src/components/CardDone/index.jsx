import React from "react";
import PropTypes from "prop-types";

import ButtonContainer from "../../containers/ButtonContainer";

const CardDone = ({ process, setProcess }) => {
	return (
		<div className="app">
			<h2>카드 추가완료 페이지</h2>
			<ButtonContainer
				process={process}
				setProcess={setProcess}
				content="확인"
			/>
		</div>
	);
};

CardDone.propTypes = {
	process: PropTypes.string.isRequired,
	setProcess: PropTypes.func.isRequired,
};

export default CardDone;
