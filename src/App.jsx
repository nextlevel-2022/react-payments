import React, { useState } from "react";

import GlobalStyle from "./GlobalStyle.jsx";
import CardList from "./pages/CardList";
import CardAdd from "./pages/CardAdd";
import CardDone from "./pages/CardDone";

const App = () => {
	const [page, setPage] = useState("list"); // list -> add -> done

	return (
		<>
			<GlobalStyle />
			{page === "list" && <CardList setPage={setPage} />}
			{page === "add" && <CardAdd setPage={setPage} />}
			{page === "done" && <CardDone setPage={setPage} />}
		</>
	);
};

export default App;
