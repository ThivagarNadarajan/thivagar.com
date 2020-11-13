import { createGlobalStyle } from 'styled-components';

//TODO: clean up fonts
//TODO: consider turning the whole page into a grid and adding row gaps 
//instead of adding margins for each section
const GlobalStyle = createGlobalStyle`
	body {
		background: #1d1d26;
		color: white;
		font-family: Roboto;
		margin: 60px auto 0 auto;
	}
	
	h1, h2, h3, h4 {
		margin: 0;
		// font-family: Noto Sans JP;
		font-family: Nunito Sans;
		line-height: 1.2em;
	}

	h1 {
		font-size: 50px;
		font-weight: 400;
	}
`;

export default GlobalStyle;