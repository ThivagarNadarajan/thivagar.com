import React from 'react';
import styled from 'styled-components';

import Card from './Card';
import projects from './projects';

const Projects = (): JSX.Element =>
	<Section>
		<h1>Projects</h1>
		<Cards>
			{
				projects.map(({ title, imgSrc, link, info, tags }, idx) =>
					<Card
						key={idx}
						title={title}
						imgSrc={imgSrc}
						link={link}
						info={info}
						tags={tags}
					/>
				)
			}
		</Cards>
	</Section>;


const Section = styled.div`
	margin-bottom: 30px;
`;

const Cards = styled.div`
	margin-top: 25px;
	display: grid;
	row-gap: 25px;
	column-gap: 25px;


	@media only screen and (min-width: 1525px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media only screen and (max-width: 1525px) {
		grid-template-columns: 1fr;
	}

	@media only screen and (max-width: 1240px) {
		grid-template-columns: 1fr 1fr;
	}

	@media only screen and (max-width: 800px) {
		grid-template-columns: 1fr;
	}
`;



export default Projects;