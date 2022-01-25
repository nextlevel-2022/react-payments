import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CardButton = ({ onClick }) => {
	return (
		<StyledCardButton className="empty-card" onClick={onClick}>
			+
		</StyledCardButton>
	);
};

const StyledCardButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 208px;
	height: 130px;

	font-size: 30px;
	color: #575757;

	background: #e5e5e5;
	box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
	border-radius: 5px;

	user-select: none;
`;

CardButton.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default CardButton;
