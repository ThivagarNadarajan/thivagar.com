import { createGlobalStyle } from 'styled-components';

//TODO: clean up fonts
const GlobalStyle = createGlobalStyle`
	body {
		background: #181a1c;
		color: white;
		font-family: Roboto;
		margin: 60px auto 0 auto;
		width: 50%;

		@media only screen and (max-width: 600px) {
			width: 90%;
		}
	}
	
	h1, h2, h3, h4 {
		margin: 0;
		// font-family: Noto Sans JP;
		font-family: Nunito Sans;
		line-height: 1.2em;
	}
`;

export default GlobalStyle;