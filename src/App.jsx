import React, { useState } from "react";

import CardList from "./pages/CardList";
import CardAdd from "./pages/CardAdd";
import CardDone from "./pages/CardDone";
import { LIST } from "./config/constant";
import useForm from "./hooks/useForm";

const App = () => {
	const [page, setPage] = useState(LIST); // list -> add -> done
	const [cardInfo, onChangeCardInfo] = useForm({
		cardName: "로이드카드",
		cardNumber: "1111 2222 3333 4444",
		cardOwner: "NAME",
		cardExpirationDate: "MM/YY",
	});

	return (
		<div className="root-container">
			<div className="root">
				{page === "list" && (
					<CardList
						setPage={setPage}
						cardInfo={cardInfo}
						onChangeCardInfo={onChangeCardInfo}
					/>
				)}
				{page === "add" && <CardAdd setPage={setPage} />}
				{page === "done" && <CardDone setPage={setPage} />}
			</div>
		</div>
	);
};

export default App;
