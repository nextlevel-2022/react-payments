import React from 'react';
import { DATA_LIST } from '../../constants/Data';
import Card from '../../components/Card';

const CardList = props => {
	const router = () => {
		props.setRouter('cardRegistration');
	}

	const CardListData = [
		{
			ID: 1,
			NAME: '예제이름',
			CARD_NUMBER_1: '1111',
			CARD_NUMBER_2: '2222',
			CARD_NUMBER_3: 'oooo',
			CARD_NUMBER_4: 'oooo',
			EXPIRATION_DATE_YY: '12',
			EXPIRATION_DATE_MM: '23',
			CREDIT_CARD_COMPANY: '예제카드'
		}
	]
	
  return (
	<div className="">
		<>
			<h2>카드 목록</h2>
			<div className="root">
				<div className="app flex-column-center">
					<div className="flex-center">
						<h2 className="page-title mb-10">보유 카드</h2>
					</div>
					{CardListData.map((item) => <Card data={item} key={item.ID} company={props.company} />)}
					{DATA_LIST.map((item) => <Card data={item} key={item.ID} company={props.company} />)}
					<div className="card-box">
						<div className="empty-card" onClick={router}>+</div>
					</div>
				</div>
			</div>
		</>
	</div>
  );
}

export default CardList;
