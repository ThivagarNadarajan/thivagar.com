import React from 'react';
import styled from 'styled-components';

import Card from './Card';
import Section from '../styles/Section';

import nodeRoyale from '../assets/Node Royale.png';
import anjaleeFineArts from '../assets/Anjalee Fine Arts.png';
import teaforgeGames from '../assets/Teaforge Games.png';
import portfolio from '../assets/Portfolio.png';
import sleepSimple from '../assets/Sleep Simple.png';
import loanTracker from '../assets/Loan Tracker.png';

//TODO: github links
//TODO: bring down the phone imgs a little for loan tracker
const Projects = (): JSX.Element => {
	return (
		<StyledSection>
			<h1>Projects</h1>
			<Cards>
				<Card
					imgSrc={teaforgeGames} title={'Teaforge Games'}
					info={'Website to play social deduction games (ie. Resistance, Werewolf)'}
					tags={
						['ReactJS', 'TypeScript', 'Node.js',
							'Express', 'Socket.io']
					} />
				<Card
					imgSrc={nodeRoyale} title={'Node Royale'}
					info={'2D multiplayer battle royale shooter; last one standing wins '}
					tags={['ReactJS', 'Node.js', 'Express', 'WebSockets', 'SQLite3']}
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
		</StyledSection>
	);
};

const StyledSection = styled(Section)`
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