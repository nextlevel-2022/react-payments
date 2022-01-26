import React from 'react';
import Modal from '../../components/Modal';
import Card from '../../components/Card';
import CardForm from '../../components/CardForm';

const CardEnroll = () => {
	return (
		<>
			<Modal />
			<div className="flex-center-start">
				<button className="back-button">&lt;</button>
				<h2 className="page-title">카드 추가</h2>
			</div>
			<Card />
			<CardForm />
		</>
	);
};

export default CardEnroll;
