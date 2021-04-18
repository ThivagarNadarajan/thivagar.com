import { createGlobalStyle } from 'styled-components';

export const colors = {
	font: 'white',
	bg: '#1d1d26',
	fg: '#2f3040',
	fgLight: '#3f4157',
	accent: '#ab4f4f',
	accentHover: '#ab3737'
};

const GlobalStyle = createGlobalStyle`
	body {
		background: ${colors.bg};
		color: ${colors.font};
		font-family: Open Sans;
		margin: 60px auto 0 auto;
		width: 70%;

		@media only screen and (max-width: 1200px) {
			width: 80%;
		}

		@media only screen and (max-width: 800px) {
			width: 85%;
		}
	}
	
	h1, h2, h3, h4 {
		margin: 0;
		font-family: Roboto Slab;
		line-height: 1.2em;
	}

	h1 {
		font-size: 50px;
		font-weight: 400;
	}
`;

export default GlobalStyle;