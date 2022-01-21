import React from 'react';
import { DATA_LIST } from '../../constants/Data';
import Card from '../../components/Card';

const CardList = props => {
	const router = () => {
		props.setRouter('cardRegistration');
	}

	const CardListData = [
		{
			CARD_ID: 0,
			NAME: '샘플이',
			CARD_NUMBER_1: '1212',
			CARD_NUMBER_2: '2323',
			CARD_NUMBER_3: '3434',
			CARD_NUMBER_4: '4545',
			EXPIRATION_DATE_YY: '24',
			EXPIRATION_DATE_MM: '12',
			CREDIT_CARD_COMPANY: 1,
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
					{CardListData.map((item) => 
						<>
							<Card data={item} key={item.ID} company={props.company} /> 
							<span className="card-nickname">법인카드</span>
						</>
					)}
					{DATA_LIST.map((item) => 
						<>
							<Card data={item} key={item.ID} company={props.company} /> 
							<span className="card-nickname">법인카드</span>
						</>
					)}
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
