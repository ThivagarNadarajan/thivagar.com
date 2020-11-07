import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const Projects = (): JSX.Element => {
	return (
		<Section>
			<h1>Projects</h1>
			<Card />
		</Section>
	);
};

const Section = styled.div`
	margin: 8vh 8vw 8vh 8vw;

	h1 {
		font-size: 50px;
		font-weight: 400;
	}
`;



export default Projects;