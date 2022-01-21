import React, { useEffect, useRef, useState } from 'react';
import { DATA } from '../../constants/Data';

import Card from '../../components/Card';
import CardRegistrationForm from '../../components/Form/CardRegistrationForm';

const CardRegistration = props => {
	const router = () => props.setRouter('cardRegistrationCompleted');
	const back = () => props.setRouter('cardList');

	const [data, setData] = useState(DATA);
	const inputRef = useRef([]);

	useEffect(() => {
	  }, [inputRef])

	return (
		<>
			<h2>카드 추가</h2>
			<div className="root">
				<div className="app">
					<h2 className="page-title"><span onClick={back} className="mr-8">&lt;</span> 카드 추가</h2>
					<Card data={data} company={props.company} />
					<CardRegistrationForm data={data} setData={setData} inputRef={inputRef} router={router}/>
				</div>
			</div>
		</>
	);
}

export default CardRegistration;