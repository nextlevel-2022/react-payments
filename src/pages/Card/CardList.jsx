import React from 'react';
import { DATA } from '../../constants/Data';

import Card from '../../components/Card';

const CardList = props => {
	const router = () => {
		props.setRouter('cardRegistration');
		props.setData(DATA);
	}

  return (
	<div className="">
		<>
			<h2>카드 목록</h2>
			<div className="root">
				<div className="app flex-column-center">
					<div className="flex-center">
						<h2 className="page-title mb-10">보유 카드</h2>
					</div>
					<div className="card-box">
						<div className="empty-card" onClick={router}>+</div>
					</div>
					{props.dataList.slice(0).reverse().map((item) => //역순정렬
						<div key={item.CARD_ID}>
							<Card data={item} company={props.company} /> 
							<span className="card-nickname">법인카드</span>
						</div>
					)}
				</div>
			</div>
		</>
	</div>
  );
}

export default CardList;