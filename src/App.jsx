import React, { useState } from "react";

import CardList from "./pages/CardList";
import CardAdd from "./pages/CardAdd";
import CardDone from "./pages/CardDone";

const App = () => {
	const [page, setPage] = useState("list"); // list -> add -> done

	return (
		<div className="root-container">
			<div className="root">
				{page === "list" && <CardList setPage={setPage} />}
				{page === "add" && <CardAdd setPage={setPage} />}
				{page === "done" && <CardDone setPage={setPage} />}
			</div>
		</div>
	);
};

export default App;
