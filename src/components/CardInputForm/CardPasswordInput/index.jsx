import React, { useRef } from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import InputWrapper from "../InputWrapper";
import { FIRST, SECOND } from "../../../config/constant";

const CardPasswordInput = React.forwardRef((props, ref) => {
	const { label, cardPassword, onChangeCardPassword } = props;
	const { cardPasswordRef } = ref;

	const secondRef = useRef(null);

	const checkNumber = e => {
		const { name, value } = e.target;

		if (isNaN(value)) return;
		onChangeCardPassword(e);

		if (+name === FIRST) {
			secondRef.current.focus();
		} else if (+name === SECOND) {
			secondRef.current.blur();
		}
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
					ref={cardPasswordRef}
					required
				/>
				<S.Input
					type="password"
					id="cardPassword-second"
					name={SECOND}
					maxLength={1}
					value={cardPassword[SECOND]}
					onChange={e => checkNumber(e)}
					ref={secondRef}
					required
				/>
				<S.Dot width="7px" height="7px" />
				<S.Dot width="7px" height="7px" />
			</S.LayoutWrapper>
		</InputWrapper>
	);
});

CardPasswordInput.propTypes = {
	label: PropTypes.string.isRequired,
	cardPassword: PropTypes.objectOf(PropTypes.string).isRequired,
	onChangeCardPassword: PropTypes.func.isRequired,
};

export default CardPasswordInput;
