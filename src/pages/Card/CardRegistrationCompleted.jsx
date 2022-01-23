import React from 'react';
import Card from '../../components/Card';

const CardRegistrationCompleted = props => {
	const router = () => {
		props.setRouter('cardList');
	}

	return (
		<>
			<h2>카드 추가 완료</h2>
			<div className="root">
				<div className="app flex-column-center">
					<div className="flex-center">
						<h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
					</div>
					<Card data={props.data} company={props.company} />
					<div className="input-container flex-center w-100">
						<input
							className="input-underline w-75"
							type="text"
							placeholder="카드의 별칭을 입력해주세요."
						/>
					</div>
					<div className="button-box mt-50">
						<span className="button-text" onClick={router}>다음</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default CardRegistrationCompleted;