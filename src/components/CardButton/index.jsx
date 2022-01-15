import React from "react";
import PropTypes from "prop-types";

const CardButton = ({ onClick }) => {
	return (
		<div className="card-box" onClick={onClick}>
			<div className="empty-card">+</div>
		</div>
	);
};

CardButton.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default CardButton;
