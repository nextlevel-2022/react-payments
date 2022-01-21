import React from "react";
import PropTypes from "prop-types";

import * as S from "./style";

const CircleButton = props => {
	const { onClick, title, backgroundColor } = props;

	return (
		<S.Button onClick={onClick}>
			<S.Circle backgroundColor={backgroundColor} />
			<S.Title>{`${title} 카드`}</S.Title>
		</S.Button>
	);
};

CircleButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string.isRequired,
};

export default CircleButton;
