import React, { useState } from "react";

import CardList from "./pages/CardList";
import CardAdd from "./pages/CardAdd";
import CardDone from "./pages/CardDone";
import useInput from "./hooks/useInput";
import {
	ADD,
	DONE,
	LIST,
	FIRST,
	SECOND,
	THIRD,
	FOURTH,
	MONTH,
	YEAR,
} from "./config/constant";

const App = () => {
	const [page, setPage] = useState(LIST); // list -> add -> done
	const [cardName, onChangeCardName, setCardName] = useInput("");
	const [cardNumber, onChangeCardNumber] = useInput({
		[FIRST]: "",
		[SECOND]: "",
		[THIRD]: "",
		[FOURTH]: "",
	});
	const [cardOwner, onChangeCardOwner] = useInput("");
	const [cardExpirationDate, onChangeCardExpirationDate] = useInput({
		[MONTH]: "",
		[YEAR]: "",
	});
	const [cardSecureCode, onChangeCardSecureCode] = useInput("");
	const [cardPassword, onChangeCardPassword] = useInput({
		[FIRST]: "",
		[SECOND]: "",
	});

	return (
		<div className="root-container">
			<div className="root">
				{page === LIST && (
					<CardList
						setPage={setPage}
						cardName={cardName}
						cardNumber={cardNumber}
						cardOwner={cardOwner}
						cardExpirationDate={cardExpirationDate}
					/>
				)}
				{page === ADD && (
					<CardAdd
						setPage={setPage}
						cardName={cardName}
						onChangeCardName={onChangeCardName}
						setCardName={setCardName}
						cardNumber={cardNumber}
						onChangeCardNumber={onChangeCardNumber}
						cardOwner={cardOwner}
						onChangeCardOwner={onChangeCardOwner}
						cardExpirationDate={cardExpirationDate}
						onChangeCardExpirationDate={onChangeCardExpirationDate}
						cardSecureCode={cardSecureCode}
						onChangeCardSecureCode={onChangeCardSecureCode}
						cardPassword={cardPassword}
						onChangeCardPassword={onChangeCardPassword}
					/>
				)}
				{page === DONE && <CardDone setPage={setPage} />}
			</div>
		</div>
	);
};

export default App;
