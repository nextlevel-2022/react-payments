import React from 'react';
import CardConfirm from './pages/CardConfirm';
import CardEnroll from './pages/CardEnroll';
import CardList from './pages/CardList';

import './styles/index.css';

const App = () => {
	return (
		<div className="app">
			<CardEnroll />
			<CardList />
			<CardConfirm />
		</div>
	);
};

export default App;
