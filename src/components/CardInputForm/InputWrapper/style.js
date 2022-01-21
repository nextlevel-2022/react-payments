import styled from "styled-components";

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const LabelContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Label = styled.label`
	color: #525252;
	font-size: 0.75rem;
`;

export const Counter = styled.div`
	color: #525252;
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

	& input,
	& fieldset {
		background-color: transparent;
		font-size: 1.125rem;
		text-align: center;

		border: none;
	}

	& input:focus {
		outline: none;
	}

	/* Remove Spinner */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input[type="number"] {
		-moz-appearance: textfield;
	}
`;
