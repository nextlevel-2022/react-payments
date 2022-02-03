import React from 'react';
import Card from '../../components/Card';
import CardForm from '../../components/CardForm';
import { useCardList } from '../../contexts/cardList';
import { useRouter } from '../../contexts/route';

const CardEnroll = () => {
	const { setRoute } = useRouter();
	const { editingCard } = useCardList();

	const onGoToBack = () => setRoute('LIST');

	return (
		<div className="app">
			<div className="flex-center-start">
				<button className="back-button" onClick={onGoToBack}>
					&lt;
				</button>
				<h2 className="page-title">카드 추가</h2>
			</div>
			<Card type="small" card={editingCard} />
			<CardForm />
		</div>
	);
};

export default CardEnroll;
