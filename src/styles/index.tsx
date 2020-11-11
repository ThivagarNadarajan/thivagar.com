import { createGlobalStyle } from 'styled-components';

//TODO: clean up fonts
//TODO: consider turning the whole page into a grid and adding row gaps 
//instead of adding margins for each section
const GlobalStyle = createGlobalStyle`
	body {
		background: #1d1d26;
		// background #191624;
		color: white;
		font-family: Roboto;
		margin: 60px auto 0 auto;
		width: 60%;

		@media only screen and (max-width: 1200px) {
			width: 70%;
		}

		@media only screen and (max-width: 800px) {
			width: 85%;
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