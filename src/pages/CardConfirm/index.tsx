import React from 'react';
import Card from '../../components/Card';

const CardConfirm = () => {
	return (
		<div className="app flex-column-center">
			<div className="flex-center">
				<h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
			</div>
			<Card />
			<div className="input-container flex-center w-100">
				<input className="input-underline w-75" type="text" placeholder="카드의 별칭을 입력해주세요." />
			</div>
			<div className="button-box mt-50">
				<span className="button-text">다음</span>
			</div>
		</div>
	);
};

export default CardConfirm;
