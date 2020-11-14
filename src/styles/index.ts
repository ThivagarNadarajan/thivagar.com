import { createGlobalStyle } from 'styled-components';

export const colors = {
	bg: '#2f3040',
	fg: '#3f4157',
	accent: '#bd604f',
	accentHover: '#bd604f'
};

const GlobalStyle = createGlobalStyle`
	body {
		background: #1d1d26;
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
		font-family: Nunito Sans;
		line-height: 1.2em;
	}

	h1 {
		font-size: 50px;
		font-weight: 400;
	}
`;

export default GlobalStyle;