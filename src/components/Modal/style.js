import styled from "styled-components";

export const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 50;
	border-radius: 15px;
	background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 227px;
	z-index: 100;
	border-radius: 15px;
	background-color: #fdfdfd;
`;
