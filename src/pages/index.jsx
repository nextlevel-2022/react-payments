import React, { useState } from 'react';
import { ROUTER } from '../constants/Router';
import { DATA, CARD_COMPANY } from '../constants/Data';

import CardList from './Card/CardList';
import CardRegistration from './Card/CardRegistration';
import CardRegistrationCompleted from './Card/CardRegistrationCompleted';

const Home = () => {
	const [router, setRouter] = useState('cardList');
	const [data, setData] = useState(DATA);
	const [company, setCompany] = useState(CARD_COMPANY);

	return (
	<div className="">
		{ router === ROUTER.CARD_LIST && 
			<CardList 
				router={router} setRouter={setRouter} 
				data={data} setData={setData}
				company={company}
			/> 
		}
		{ router === ROUTER.CARD_REGISTRATION && 
			<CardRegistration 
				setRouter={setRouter} 
				setData={setData} 
				company={company} 
				setCompany={setCompany}
			/> 
		}
		{ router === ROUTER.CARD_REGISTRATION_COMPLETED && 
			<CardRegistrationCompleted 
				setRouter={setRouter} 
				data={data} 
				company={company}
			/> 
		}
		
	</div>
  );
}

export default Home;