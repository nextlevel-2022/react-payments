import styled from "styled-components";
import { DefalutStyledInput } from "../InputWrapper/style";

export const LayoutWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const Input = styled(DefalutStyledInput)`
	width: 80px;
`;

export const Button = styled.button`
	position: absolute;
	left: 120px;
`;