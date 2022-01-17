import GlobalStyle from "../src/styles/global/GlobalStyle";
import GlobalFonts from "../src/styles/fonts/";

export const decorators = [
	Story => (
		<>
			<GlobalFonts />
			<GlobalStyle />
			<Story />
		</>
	),
];

const customViewports = {
	mobile: {
		name: "mobile",
		styles: {
			width: "375px",
			height: "700px",
		},
		type: "mobile",
	},
};

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	layout: "fullscreen",
	viewport: {
		viewports: customViewports,
		defaultViewport: "mobile",
	},
};
