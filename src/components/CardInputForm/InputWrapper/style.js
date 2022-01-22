import styled from "styled-components";

export const DefaultInputContainer = styled.fieldset`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #ecebf1;
	height: 47px;
	font-size: 1.125rem;
	text-align: center;

	border: none;
	border-radius: 7px;
`;

export const DefaultLabel = styled.label`
	margin-bottom: 7px;
	color: #525252;
	font-size: 0.75rem;
`;

export const DefaultInput = styled.input`
	background-color: transparent;
	text-align: center;
	border: none;

	&:focus {
		outline: none;
	}

	&[type="password"] {
		font-family: Verdana;
		letter-spacing: 2px;
	}

	/* Remove Spinner */
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Remove Spinner for FireFox */
	&[type="number"] {
		-moz-appearance: textfield;
	}
`;

export const DefalutStyledInput = styled(DefaultInput)`
	background-color: #ecebf1;
	height: 47px;
	font-size: 1.125rem;
	text-align: center;
	border: none;
	border-radius: 7px;
`;

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const LabelContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Label = styled(DefaultLabel)`
	color: #525252;
	font-size: 0.75rem;
`;

export const InputContainer = styled.div`
	display: flex;
`;

export const Counter = styled.div`
	color: #525252;
	font-size: 0.75rem;
`;
