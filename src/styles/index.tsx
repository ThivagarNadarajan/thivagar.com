import { createGlobalStyle } from 'styled-components';

//TODO: clean up fonts
const GlobalStyle = createGlobalStyle`
	body {
		// background: #1e2238;
		background: #223152;
		color: white;
		font-family: Roboto;
	}
	
	h1, h2, h3, h4 {
		margin: 0;
		// font-family: Noto Sans JP;
		font-family: Nunito Sans;
		line-height: 1.2em;
	}
`;

export default GlobalStyle;