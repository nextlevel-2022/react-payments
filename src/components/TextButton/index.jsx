import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = ({ content, onClick, color }) => {
	return (
		<div className="button-box">
			<StyledButton
				className="button-text"
				type="button"
				color={color}
				onClick={onClick}
			>
				{content}
			</StyledButton>
		</div>
	);
};

const StyledButton = styled.button`
	font-size: 0.875rem;
	font-weight: bold;
	color: ${({ color }) => color};
`;

Button.propTypes = {
	content: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default Button;
