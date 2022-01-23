import React from 'react';
import { CARD_INPUT_LENGTH } from '../../../constants/Data';
import { USER_NAME_CHECK, TEXT_GAP_CHECK } from '../../../constants/Validator';


const CardUserNameInput = props => {
	return (
		<div className="input-container">
			<span className="input-title">카드 소유자 이름(선택)</span>
			<input
				ref={(el)=>props.inputRef.current[6]=el}
				type="text"
				className="input-basic"
				placeholder="카드에 표시된 이름과 동일하게 입력하세요."
				minLength={1}
				maxLength={CARD_INPUT_LENGTH.USER_NAME}
				onChange={e=> {
					const value = e.target.value;
					TEXT_GAP_CHECK(e);
					USER_NAME_CHECK(e);
					props.setData({ ...props.data, NAME: value });

					if (value.length >= CARD_INPUT_LENGTH.USER_NAME) { props.inputRef.current[7].focus(); }
				}}
			/>
		</div>
  );
}

export default CardUserNameInput;