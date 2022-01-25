import React from "react";
import PropTypes from "prop-types";
import Back from "../../assets/chevron-left-solid.svg";

const BackButton = ({ onClick }) => {
	return (
		<button onClick={onClick}>
			<Back width="15" height="20" />
		</button>
	);
};

BackButton.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default BackButton;
