import React from 'react';
import ReactDOM from 'react-dom';
import CardListContextProvider from './contexts/cardList';
import RouteContextProvider from './contexts/route';
import Root from './pages';
import './styles/index.css';

ReactDOM.render(
	<RouteContextProvider>
		<CardListContextProvider>
			<Root />
		</CardListContextProvider>
	</RouteContextProvider>,
	document.getElementById('root')
);
