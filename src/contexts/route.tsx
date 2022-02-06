import React from 'react';
import CardEnroll from '../pages/CardEnroll';
import CardConfirm from '../pages/CardConfirm';
import CardList from '../pages/CardList';
import { createContext, Dispatch, ReactChild, SetStateAction, useContext, useMemo, useState } from 'react';

export type Route = 'ADD' | 'CONFIRM' | 'LIST';

type PageType = (props: any) => JSX.Element;

const Pages: { [key in Route]: PageType } = {
	ADD: CardEnroll,
	CONFIRM: CardConfirm,
	LIST: CardList,
};

export const RouteContext = createContext<{
	Page: PageType;
	setRoute: Dispatch<SetStateAction<Route>>;
}>({
	Page: CardList,
	setRoute: () => {
		return;
	},
});

export const useRouter = () => useContext(RouteContext);

const RouteContextProvider = ({ children }: { children: ReactChild }) => {
	const [routeKey, setRoute] = useState<Route>('LIST');
	const state = useMemo(
		() => ({
			Page: Pages[routeKey],
			setRoute,
		}),
		[routeKey]
	);

	return <RouteContext.Provider value={state}>{children}</RouteContext.Provider>;
};

export default RouteContextProvider;
