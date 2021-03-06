import React from 'react';

import GlobalStyle from './styles';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

const App = (): JSX.Element =>
	<>
		<GlobalStyle />
		<About />
		<Projects />
		<Experience />
		<Footer />
	</>;

export default App;
