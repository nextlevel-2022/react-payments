import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TextButton = ({ type, content, onClick, color }) => {
	return (
		<div className="button-box">
			<StyledButton
				className="button-text"
				type={type}
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

TextButton.propTypes = {
	type: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	color: PropTypes.string.isRequired,
};

export default TextButton;
