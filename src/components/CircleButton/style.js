import styled from "styled-components";

export const Button = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Circle = styled.div`
	width: 37px;
	height: 37px;
	border-radius: 50%;
	background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Title = styled.div`
	margin-top: 10px;
	font-size: 0.75rem;
	font-weight: 500;
	color: #525252;
`;
