import styled from "styled-components";

export const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 15px;
	gap: 15px;
`;

export const ListItem = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
`;
