import styled from "styled-components";

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Label = styled.label`
	font-size: 0.75rem;
`;

export const InputContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 7px;
	background-color: #ecebf1;
	border-radius: 7px;

	width: ${({ width }) => width};
	height: 45px;

	& input {
		background-color: transparent;
		font-size: 1.125rem;
		border: none;
	}
`;
