import styled from "styled-components";
import SecureDot from "../../../assets/circle-solid.svg";
import { DefalutStyledInput } from "../InputWrapper/style";

export const LayoutWrapper = styled.div`
	display: flex;
	align-items: center;

	input:nth-child(2) {
		margin-left: 7px;
	}
`;

export const Input = styled(DefalutStyledInput)`
	width: 43px;
`;

export const Dot = styled(SecureDot)`
	margin-left: 14px;
`;
