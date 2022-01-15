import React, { useState } from "react";

import CardList from "./pages/CardList";
import CardAdd from "./pages/CardAdd";
import CardDone from "./pages/CardDone";

const App = () => {
	const [process, setProcess] = useState("list"); // list -> add -> done

	return (
		<div className="root">
			{process === "list" && (
				<CardList process={process} setProcess={setProcess} />
			)}
			{process === "add" && (
				<CardAdd process={process} setProcess={setProcess} />
			)}
			{process === "done" && (
				<CardDone process={process} setProcess={setProcess} />
			)}
		</div>
	);
};

export default App;
