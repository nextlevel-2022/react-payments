import React, { useEffect, useRef } from 'react';

import Card from '../../components/Card';
import CardRegistrationForm from '../../components/Form/CardRegistrationForm';

const CardRegistration = props => {
	const router = () => props.setRouter('cardRegistrationCompleted');
	const back = () => props.setRouter('cardList');

	const inputRef = useRef([]);

	useEffect(() => {
	  }, [inputRef])

	return (
		<>
			<h2>카드 추가</h2>
			<div className="root">
				<div className="app">
					<h2 className="page-title"><span onClick={back} className="mr-8">&lt;</span> 카드 추가</h2>
					<Card data={props.data} company={props.company} />
					<CardRegistrationForm 
						data={props.data} 
						setData={props.setData} 
						dataList={props.dataList}
						setDataList={props.setDataList}
						inputRef={inputRef} 
						router={router}
					/>
				</div>
			</div>
		</>
	);
}

export default CardRegistration;