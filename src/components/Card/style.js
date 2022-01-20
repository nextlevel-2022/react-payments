import styled from "styled-components";

export const Card = styled.div`
	position: relative;

	width: ${({ size }) => (size === "large" ? "290px" : "208px")};
	height: ${({ size }) => (size === "large" ? "180px" : "130px")};

	background-color: ${({ backgroundColor }) => backgroundColor};
	box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
`;

export const CardName = styled.div`
	position: absolute;
	top: 14px;
	left: 14px;

	font-size: 0.75rem;
`;

export const Chip = styled.div`
	position: absolute;
	top: 47px;
	left: 14px;

	width: 40px;
	height: 26px;

	background-color: #cbba64;
	border-radius: 4px;
`;

export const CardNumber = styled.div`
	position: absolute;
	top: 78px;
	left: 25px;
`;

export const CardOwner = styled.div`
	position: absolute;
	bottom: 10px;
	left: 20px;

	font-size: 0.75rem;
`;

export const CardExpirationDate = styled.div`
	position: absolute;
	bottom: 10px;
	right: 20px;

	font-size: 0.75rem;
`;
