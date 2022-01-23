import React from "react";
import PropTypes from "prop-types";

import InputWrapper from "../InputWrapper";
import * as S from "./style";

const CardOwnerInput = props => {
	const { label, width, cardOwner, onChangeCardOwner } = props;

	return (
		<InputWrapper
			label={label}
			htmlFor="cardOwner"
			width={width}
			useToCount={true}
			dataToCount={cardOwner}
			limitToCount={30}
		>
			<div>
				<S.Input
					type="text"
					width={width}
					id="cardOwner"
					maxLength={30}
					placeholder="카드에 표시된 이름과 동일하게 입력하세요."
					value={cardOwner}
					onChange={onChangeCardOwner}
				/>
			</div>
		</InputWrapper>
	);
};

CardOwnerInput.propTypes = {
	label: PropTypes.string.isRequired,
	width: PropTypes.string.isRequired,
	cardOwner: PropTypes.string.isRequired,
	onChangeCardOwner: PropTypes.func.isRequired,
};

export default CardOwnerInput;
