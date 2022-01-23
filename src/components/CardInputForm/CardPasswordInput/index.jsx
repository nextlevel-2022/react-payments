import React from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import InputWrapper from "../InputWrapper";
import { FIRST, SECOND } from "../../../config/constant";

const CardPasswordInput = props => {
	const { label, cardPassword, onChangeCardPassword } = props;
	console.log(cardPassword[FIRST], cardPassword[SECOND]);

	const checkNumber = e => {
		const { value } = e.target;

		if (isNaN(value)) return;
		onChangeCardPassword(e);
	};

	return (
		<InputWrapper htmlFor="cardPassword-frist" label={label}>
			<S.LayoutWrapper>
				<S.Input
					type="password"
					id="cardPassword-frist"
					name={FIRST}
					maxLength={1}
					value={cardPassword[FIRST]}
					onChange={e => checkNumber(e)}
				/>
				<S.Input
					type="password"
					id="cardPassword-second"
					name={SECOND}
					maxLength={1}
					value={cardPassword[SECOND]}
					onChange={e => checkNumber(e)}
				/>
				<S.Dot width="7px" height="7px" />
				<S.Dot width="7px" height="7px" />
			</S.LayoutWrapper>
		</InputWrapper>
	);
};

CardPasswordInput.propTypes = {
	label: PropTypes.string.isRequired,
	cardPassword: PropTypes.objectOf(PropTypes.string).isRequired,
	onChangeCardPassword: PropTypes.func.isRequired,
};

export default CardPasswordInput;
