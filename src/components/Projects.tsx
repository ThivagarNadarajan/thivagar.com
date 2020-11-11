import React from 'react';
import styled from 'styled-components';

import Card from './Card';

import nodeRoyale from '../assets/Node Royale.png';
import anjaleeFineArts from '../assets/Anjalee Fine Arts.png';
import teaforge from '../assets/Teaforge.png';
import portfolio from '../assets/Portfolio.png';
import sleepSimple from '../assets/Sleep Simple.png';
import loanTracker from '../assets/Loan Tracker.png';

const Projects = (): JSX.Element => {
	return (
		<Section>
			<h1>Projects</h1>
			<Cards>
				<Card
					imgSrc={teaforge} title={'Teaforge Games'}
					info={'Website to play social deduction games (ie. Resistance, Werewolf)'}
					tags={['ReactJS', 'TypeScript', 'Node.js', 'Socket.io']} />
				<Card
					imgSrc={nodeRoyale} title={'Node Royale'}
					info={'2D battle royale shooter; last one standing wins '}
					tags={['ReactJS', 'Node.js', 'WebSockets', 'SQLite3']}
				/>
				<Card
					imgSrc={portfolio} title={'Portfolio'}
					info={
						'Personal portfolio website to show my projects & experience '
						+ '(this website).'
					}
					tags={['ReactJS', 'TypeScript']} />
				<Card
					imgSrc={anjaleeFineArts} title={'Anjalee Fine Arts'}
					info={'Website to promote a local music school.'}
					tags={['HTML5', 'CSS3', 'Bootstrap 4']} />
				<Card
					imgSrc={loanTracker} title={'Loan Tracker'}
					info={'iOS application to keep track of loans with your contacts'}
					tags={['Swift', 'SQLite3']} />
				<Card
					imgSrc={sleepSimple} title={'Sleep Simple'}
					info={'iOS application to emit basic white noise'}
					tags={['Swift']} />
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
	row-gap: 25px;
	column-gap: 25px;

	@media only screen and (min-width: 1525px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media only screen and (max-width: 1525px) {
		grid-template-columns: 1fr;
	}

	@media only screen and (max-width: 1200px) {
		grid-template-columns: 1fr 1fr;
	}

	@media only screen and (max-width: 800px) {
		grid-template-columns: 1fr;
	}
`;



export default Projects;