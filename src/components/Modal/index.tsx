import React from 'react';
import ModalPortal from './modalPortal';

const cards = ['포코 카드', '준 카드', '공원 카드', '브랜 카드', '로이드 카드', '도비 카드', '콜린 카드', '썬 카드'];

const Modal = ({ selectCard, closeModal }: { selectCard: (name: string) => void; closeModal: () => void }) => {
	const handleClick = (card: string) => () => selectCard(card);

	return (
		<ModalPortal>
			<div className="modal-dimmed" onClick={closeModal} />
			<div className="modal">
				<div className="flex-center flex-wrap">
					{cards.map((card, idx) => {
						return (
							<div key={idx} className="modal-item-container" data-company={idx + 1} onClick={handleClick(card)}>
								<div className={`modal-item-dot color-${idx + 1}`}></div>
								<span className="modal-item-name">{card}</span>
							</div>
						);
					})}
				</div>
			</div>
		</ModalPortal>
	);
};

export default Modal;
