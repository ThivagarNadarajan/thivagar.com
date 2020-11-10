import React from 'react';
import styled from 'styled-components';

import Card from './Card';

import nodeRoyale from '../assets/Node Royale.png';
import anjaleeFineArts from '../assets/Anjalee Fine Arts.png';
import teaforge from '../assets/Teaforge.png';
import portfolio from '../assets/Portfolio.png';

const Projects = (): JSX.Element => {
	return (
		<Section>
			<h1>Projects</h1>
			<Cards>
				<Card
					imgSrc={nodeRoyale} title={'Node Royale'}
					info={'This game blah blah lorem ipsum lol'}
					tags={['React', 'Node.js']}
				/>
				<Card
					imgSrc={teaforge} title={'Teaforge Games'}
					info={'This game blah blah lorem ipsum lol'}
					tags={['React', 'Node.js']} />
				<Card
					imgSrc={anjaleeFineArts} title={'Anjalee Fine Arts'}
					info={'This game blah blah lorem ipsum lol'}
					tags={['React', 'Node.js']} />
				<Card
					imgSrc={portfolio} title={'Personal Portfolio'}
					info={'This game blah blah lorem ipsum lol'}
					tags={['React', 'Node.js']} />
				<Card
					imgSrc={nodeRoyale} title={'Sleep Simple'}
					info={'This game blah blah lorem ipsum lol'}
					tags={['React', 'Node.js']} />
				<Card
					imgSrc={nodeRoyale} title={'Loan Tracker'}
					info={'This game blah blah lorem ipsum lol'}
					tags={['React', 'Node.js']} />
			</Cards>
		</Section>
	);
};

const Section = styled.div`
	h1 {
		font-size: 50px;
		font-weight: 400;
	}

	margin-bottom: 30px;
`;

const Cards = styled.div`
	margin-top: 25px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	row-gap: 25px;
	column-gap: 25px;

	@media only screen and (max-width: 1200px) {
		grid-template-columns: 1fr 1fr;
	}

	@media only screen and (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`;



export default Projects;