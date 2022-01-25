import React from "react";
import styled from "styled-components";
import CCV from "../../assets/tooltip.png";

const ToolTip = () => {
	return (
		<Wrapper>
			<img src={CCV} alt="CCV/CVV example image" />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: absolute;
	width: 120px;
	top: -20px;
	left: 30px;
	border: 2px solid black;
	z-index: 40;
`;

export default ToolTip;
