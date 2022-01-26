import React from 'react';
import Card from '../../components/Card';
import AddCard from '../../components/Card/addCard';

const CardList = () => {
	return (
		<div className="flex-column-center">
			<div className="flex-center">
				<h2 className="page-title mb-10">보유 카드</h2>
			</div>
			<div className="flex-column-center">
				<Card />
				<span className="card-nickname">법인카드</span>
			</div>
			<AddCard />
		</div>
	);
};

export default CardList;
