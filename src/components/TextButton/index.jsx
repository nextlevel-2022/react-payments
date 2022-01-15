import React from "react";
import PropTypes from "prop-types";

const Button = ({ content, onClick }) => {
	return (
		<div className="button-box">
			<button className="button-text" type="button" onClick={onClick}>
				{content}
			</button>
		</div>
	);
};

Button.propTypes = {
	content: PropTypes.string,
	onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
	content: "Button",
};

export default Button;
