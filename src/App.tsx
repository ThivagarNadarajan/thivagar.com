import React from 'react';

import GlobalStyle from './styles';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

//TODO: change favicon

const App = (): JSX.Element => {
	return (
		<>
			<GlobalStyle />
			<About />
			<Projects />
			<Experience />
			<Footer />
		</>
	);
};

export default App;
