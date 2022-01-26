import React from 'react';

const cards = ['포코 카드', '준 카드', '공원 카드', '브랜 카드', '로이드 카드', '도비 카드', '콜린 카드', '썬 카드'];

const Modal = () => {
	return (
		<div className="modal-dimmed">
			<div className="modal">
				{cards.map((card, idx) => {
					return (
						<div key={idx} className="modal-item-container" data-company={idx + 1}>
							<div className={`modal-item-dot color-${idx + 1}`}></div>
							<span className="modal-item-name">{card}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Modal;
