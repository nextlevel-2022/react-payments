import React from "react";
import PropTypes from "prop-types";

import TextButton from "../../components/TextButton";
import { LIST } from "../../config/constant";

const CardDone = ({ setPage }) => {
	const onClick = () => {
		setPage(LIST);
	};

	return (
		<div className="app">
			<header>
				<h1 className="page-title">등록완료</h1>
			</header>
			<TextButton
				type="button"
				content="확인"
				color="#04C09E"
				onClick={onClick}
			/>
		</div>
	);
};

CardDone.propTypes = {
	setPage: PropTypes.func.isRequired,
};

export default CardDone;
