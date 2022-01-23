import React, { useState } from 'react';
import { ROUTER } from '../constants/Router';
import { DATA, CARD_COMPANY_LIST, DATA_LIST } from '../constants/Data';

import CardList from './Card/CardList';
import CardRegistration from './Card/CardRegistration';
import CardRegistrationCompleted from './Card/CardRegistrationCompleted';

const Home = () => {
	const [router, setRouter] = useState('cardList');
	const [data, setData] = useState(DATA);
	const [dataList, setDataList] = useState(DATA_LIST);
	const [company, setCompany] = useState(CARD_COMPANY_LIST);

	return (
	<div className="">
		{ router === ROUTER.CARD_LIST && 
			<CardList    
				router={router} setRouter={setRouter} 
				data={data} setData={setData}
				dataList={dataList}
				company={company}
			/> 
		}
		{ router === ROUTER.CARD_REGISTRATION && 
			<CardRegistration 
				setRouter={setRouter} 
				data={data} 
				setData={setData} 
				dataList={dataList}
				setDataList={setDataList}
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