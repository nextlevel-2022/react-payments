import React from "react";
import PropTypes from "prop-types";

const Button = ({ content }) => {
	return <button type="button">{content}</button>;
};

Button.propTypes = {
	content: PropTypes.string,
};

Button.defaultProps = {
	content: "Button",
};

export default Button;
