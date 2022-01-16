import React from "react";
import PropTypes from "prop-types";

const CardButton = ({ onClick }) => {
	return (
		<button className="card-box" onClick={onClick}>
			<div className="empty-card">+</div>
		</button>
	);
};

CardButton.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default CardButton;
