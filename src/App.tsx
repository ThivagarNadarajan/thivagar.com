import React from 'react';

import GlobalStyle from './styles';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';

//TODO: change favicon

const App = (): JSX.Element => {
	return (
		<>
			<GlobalStyle />
			<About />
			<Projects />
			<Experience />
		</>
	);
};

export default App;
