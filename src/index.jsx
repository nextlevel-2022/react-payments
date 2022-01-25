import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import GlobalStyle from "./styles/global/GlobalStyle";
import GlobalFonts from "./styles/fonts";

ReactDom.render(
	<React.StrictMode>
		<GlobalFonts />
		<GlobalStyle />
		<App />
	</React.StrictMode>,
	document.getElementById("root"),
);
